const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");
const userStrategy = require("../strategies/user.strategy");

const router = express.Router();

// * GET request for all priorities of user that is logged in
router.get("/:checklistID", (req, res) => {
  const checklistID = req.params.checklistID;

  // SQL Query for all priorities
  // Selecting from view table
  const queryText = `
SELECT
    p.priority_id,
    p.priority_number,
    p.is_completed AS priority_completed,
    COALESCE(
        json_agg(
            json_build_object(
                'task_id', t.task_id,
                'task_description', t.task_description,
                'task_completed', t.is_completed,
                'deadline', t.deadline
            ) ORDER BY t.task_id
        ),
        '[]'::json
    ) AS tasks
FROM priorities p
LEFT JOIN tasks t ON p.priority_id = t.priority_id
WHERE p.checklist_id = $1
GROUP BY p.priority_id, p.priority_number, p.is_completed
ORDER BY p.priority_number;
`;

  pool
    .query(queryText, [checklistID])
    .then((result) => {
      console.log("GET request made for priorities! Result is:", result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Failed to retrieve priorities! Error is:", error);
      res.sendStatus(500);
    });
}); // * end GET all user's checklist priorities

// * POST request for adding checklist of user that is logged in
router.post("/", (req, res) => {
  // Declaring user's checklist id as parameter
  const checklistID = req.params.checklistID;
  // Declaring user's checklist id as parameter
  const priorityNumber = req.params.priorityNumber;

  const checklistIDToSend = req.body.checklistID
  const priorityNumberToSend = req.body.priorityNumber

  // SQL query to add a checklist
  const queryText = `
    INSERT INTO priorities (checklist_id, priority_number)
VALUES ($1, $2)
RETURNING priority_id;
    `;

  pool
    .query(queryText, [checklistIDToSend, priorityNumberToSend])
    .then((result) => {
      console.log("Added new priority! Result is:", result);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("Failed to add checklist! Error is:", error);
      res.sendStatus(500);
    });
});

// * DELETE request of user's selected checklist
router.delete("/:checklistID", (req, res) => {
  // Declaring user's checklist id as parameter
  const checklistID = req.params.checklistID;

  // Queries

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
    .query(deleteTasksQuery, [checklistID])
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
