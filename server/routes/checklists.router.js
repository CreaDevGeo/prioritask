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
const userID = req.params.id

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
                        'task_id', Tasks.task_id,
                        'task_description', Tasks.task_description,
                        'task_completed', Tasks.is_completed,
                        'deadline', Tasks.deadline,
                        'todos', todos_data
                    ) ORDER BY Tasks.task_id
                )
                FROM Tasks
                LEFT JOIN LATERAL (
                    SELECT json_agg(
                        json_build_object(
                            'todo_id', todo_id,
                            'todo_item', todo_item
                        ) ORDER BY todo_id
                    ) AS todos_data
                    FROM ToDos
                    WHERE ToDos.task_id = Tasks.task_id
                ) AS ToDosSubquery ON true
                WHERE Tasks.priority_id = Priorities.priority_id
            ) 
        ) ORDER BY priority_number
    ) AS checklist_item_priorities
FROM
    "user"
LEFT JOIN
    Checklists ON "user"."id" = Checklists.user_id
LEFT JOIN
    Priorities ON Checklists.checklist_id = Priorities.checklist_id
WHERE
    "user"."id" = $1
GROUP BY
    Checklists.checklist_id, Checklists.ranking, Checklists.is_completed;
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



module.exports = router;
