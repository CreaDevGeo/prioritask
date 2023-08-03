const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");
const userStrategy = require("../strategies/user.strategy");

const router = express.Router();

// * GET request for all checklists of user that is logged in
router.get("/", (req, res) => {
  // SQL Query for all checklists
  const queryText = `
    SELECT
    Checklists.checklist_id,
    Checklists.ranking AS checklist_ranking,
    Checklists.is_completed AS checklist_completed,
    json_agg(
        json_build_object(
            'priority_id', Priorities.priority_id,
            'priority_number', Priorities.priority_number,
            'priority_completed', Priorities.is_completed,
            'tasks', (
                SELECT json_agg(
                    json_build_object(
                        'task_id', task_id,
                        'task_description', task_description,
                        'task_completed', is_completed,
                        'deadline', deadline,
                        'todos', (
                            SELECT json_agg(
                                json_build_object(
                                    'todo_id', todo_id,
                                    'todo_item', todo_item
                                )
                            ) FROM ToDos WHERE ToDos.task_id = Tasks.task_id
                        )
                    )
                ) FROM Tasks WHERE Tasks.priority_id = Priorities.priority_id
            )
        )
    ) AS priorities_data
FROM
    "user"
LEFT JOIN
    Checklists ON "user"."id" = Checklists.user_id
LEFT JOIN
    Priorities ON Checklists.checklist_id = Priorities.checklist_id
WHERE
    "user"."id" = 1
GROUP BY
    Checklists.checklist_id, Checklists.ranking, Checklists.is_completed;
  `;

  pool
    .query(queryText)
    .then((result) => {
      console.log("GET request made for checklists! Result is:", result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Failed to retrieve checklists! ", error);
      res.sendStatus(500);
    });
}); // * end GET all user's checklists

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post("/register", (req, res, next) => {
//   const username = ;
//   const password = ;
  // Add other additional info for database here

  // Update query to include additional info
  const queryText = `INSERT INTO "user" (username, password)
    VALUES ($1, $2) RETURNING id`;
  pool
    .query(queryText, [username, password])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log("User registration failed: ", err);
      res.sendStatus(500);
    });
});


module.exports = router;
