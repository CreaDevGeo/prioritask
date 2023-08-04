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
  // Created a structured object build in select query
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
      console.log("Failed to retrieve checklists! Error is:", error);
      res.sendStatus(500);
    });
}); // * end GET all user's checklists

// * POST request for adding checklist of user that is logged in
router.post("/", (req, res) => {
  // Declaring req.body as variable
  const userID = req.body.userID;
  console.log("userID is:", userID);
  // SQL query to add a checklist
  const queryText = `
    INSERT INTO Checklists (user_id)
    VALUES ($1);
    `;

  pool
    .query(queryText, [userID])
    .then((result) => {
      console.log("POST request made to add a checklist! Result is:", result);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("Failed to add checklist! Error is:", error);
      res.sendStatus(500);
    });
});

// * DELETE request of user's selected checklist
router.delete("/:id/:checklist", (req, res) => {
  // Declaring user's id as parameter
  const userID = req.params.id;
  // Declaring user's checklist id as parameter
  const checklistID = req.params.checklist;

  // Queries
  // Query to remove todos from selected checklist
  const deleteTodosQuery = `
    DELETE FROM todos WHERE task_id IN (SELECT task_id FROM tasks WHERE priority_id IN (SELECT priority_id FROM priorities WHERE checklist_id = $1));
  `;

  // Query to remove todos from selected checklist
  const deleteTasksQuery = `
    DELETE FROM tasks WHERE priority_id IN (SELECT priority_id FROM priorities WHERE checklist_id = $1);
  `;

  // Query to remove todos from selected checklist
  const deletePrioritiesQuery = `
    DELETE FROM priorities WHERE checklist_id = $1;
  `;

  // Query to remove todos from selected checklist
  const deleteChecklistQuery = `
    DELETE FROM checklists WHERE checklist_id = $1 AND user_id = $2;
  `;

  // Running multiple queries in the pool query
  pool
    .query(deleteTodosQuery, [checklistID])
    .then(() => pool.query(deleteTasksQuery, [checklistID]))
    .then(() => pool.query(deletePrioritiesQuery, [checklistID]))
    .then(() => pool.query(deleteChecklistQuery, [checklistID, userID]))
    .then(() => {
      console.log("DELETE request made to remove a checklist!");
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("Failed to remove checklist! Error is:", error);
      res.sendStatus(500);
    });
});

module.exports = router;
