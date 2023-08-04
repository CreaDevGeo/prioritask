const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");
const userStrategy = require("../strategies/user.strategy");

const router = express.Router();

// * GET request for all checklists of user that is logged in
router.get("/:id", (req, res) => {
  const userID = req.params.id;

  // SQL Query for all checklists
  const queryText = `
    SELECT
    checklists.checklist_id,
    checklists.checklist_number AS checklist_number,
    checklists.ranking AS checklist_ranking,
    checklists.is_completed AS checklist_completed,
    json_build_object(
        'priorities', json_agg(
            json_build_object(
                'priority_id', priorities.priority_id,
                'priority_number', priorities.priority_number,
                'priority_completed', priorities.is_completed,
                'tasks', (
                    SELECT json_agg(
                        json_build_object(
                            'task_id', tasks.task_id,
                            'task_description', tasks.task_description,
                            'task_completed', tasks.is_completed,
                            'deadline', tasks.deadline,
                            'todos', (
                                SELECT json_agg(
                                    json_build_object(
                                        'todo_id', todos.todo_id,
                                        'todo_item', todos.todo_item
                                    )
                                ) FROM todos WHERE todos.task_id = tasks.task_id
                            )
                        )
                    ) FROM tasks WHERE tasks.priority_id = priorities.priority_id
                )
            )
        )
    ) AS checklist_data
FROM
    "user"
LEFT JOIN
    checklists ON "user".id = checklists.user_id
LEFT JOIN
    priorities ON checklists.checklist_id = priorities.checklist_id
WHERE
    "user".id = $1
GROUP BY
    checklists.checklist_id, checklists.checklist_number, checklists.ranking, checklists.is_completed;

  `;

  pool
    .query(queryText, [userID])
    .then((result) => {
      console.log("GET request made for checklists! Result is:", result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Failed to retrieve checklists! ", error);
      res.sendStatus(500);
    });
}); // * end GET all user's checklists

router.post("/", (req, res) => {
  // Declaring req.body as variable
  const userID = req.body.userID;
  console.log("userID is:", userID);
  // SQL query to add a checklist
  const queryText = `
    INSERT INTO Checklists (user_id)
    VALUES ($1);
    `;

  // * POST request for adding checklist of user that is logged in
  pool
    .query(queryText, [userID])
    .then((result) => {
      console.log("POST request made to add a checklist! Result is:", result);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("Failed to add checklist! ", error);
      res.sendStatus(500);
    });
});

module.exports = router;
