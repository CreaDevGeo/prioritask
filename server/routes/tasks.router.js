const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");
const userStrategy = require("../strategies/user.strategy");

const router = express.Router();

// - GET -
// * GET request for all tasks of user that is logged in
router.get("/:priorityID", (req, res) => {
  const priorityID = req.params.priorityID;

  // SQL Query for all tasks
  // Selecting from view table
  const queryText = `
SELECT * FROM "tasks"
WHERE priority_id = $1;
`;

  pool
    .query(queryText, [priorityID])
    .then((result) => {
      console.log("GET request made for tasks! Result is:", result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Failed to retrieve priority's tasks! Error is:", error);
      res.sendStatus(500);
    });
}); // * end GET all user's priority tasks

// - POST -
// * POST request for adding checklist of user that is logged in
router.post("/", (req, res) => {
  // Declaring priority id as variable
  const priorityID = req.body.priorityID;
  console.log("\nPriorityID in server is:", priorityID);

  // Declaring task title id as variable
  const taskInput = req.body.taskInput;
  console.log("\ntaskInput in server is:", taskInput);

  // Declaring task title id as variable
  const taskNumber = req.body.taskNumber;
  console.log("\ntaskInput in server is:", taskNumber);

  // SQL query to add a checklist
  const queryText = `
    INSERT INTO "tasks" ("priority_id", "task_title", "task_number")
    VALUES ($1, $2, $3)
    `;

  pool
    .query(queryText, [priorityID, taskInput, taskNumber])
    .then((result) => {
      console.log(
        "POST request made to add a task to the priority! Result is:",
        result
      );
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("Failed to add task to priority! Error is:", error);
      res.sendStatus(500);
    });
}); // * end POST request for a task

// - DELETE -
// * DELETE request of user's selected task
router.delete("/:priorityID/:taskNumber", (req, res) => {
  // Declaring user's priority id as parameter
  const priorityID = req.params.priorityID;
  // Declaring user's task number as parameter
  const taskNumber = req.params.taskNumber;

  // Query
  const deleteTasksQuery = `
    DELETE FROM tasks WHERE priority_id = $1 AND task_number = $2
  `;

  pool
    .query(deleteTasksQuery, [priorityID, taskNumber])
    .then((result) => {
      console.log("DELETE request made to remove a selected task!");
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("Failed to remove task! Error is:", error);
      res.sendStatus(500);
    });
}); // * end POST request for a task

module.exports = router;
