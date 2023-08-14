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
  const queryText = `
    SELECT
    *,
    TO_CHAR(deadline, 'Mon DD, YYYY') AS due_date_formatted
FROM
    tasks
WHERE
    priority_id = $1;
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

// - GET -
// * GET request for all task deadlines of user that is logged in
router.get("/task-deadline", (req, res) => {
  // Query
  let tasksDeadlineQuery = `SELECT
    t.deadline
FROM
    tasks t
JOIN
    priorities p ON t.priority_id = p.priority_id
ORDER BY
    p.priority_number ASC;`;

  pool
    .query(tasksDeadlineQuery)
    .then((result) => {
      console.log("GET request made to retrieve task deadline!");
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("Failed to get task deadline! Error is:", error);
      res.sendStatus(500);
    });
}); // * end GET request for a task

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

// - PUT: TASK DEADLINE -
// * PUT request of selected task's deadline
router.put("/:priorityID/:taskNumber", (req, res) => {
  // Declaring user's priority id as parameter
  const priorityID = req.params.priorityID;
  // Declaring user's task number as parameter
  const taskNumber = req.params.taskNumber;
  // Declaring task deadline as parameter
  const taskDeadline = req.body.taskDeadline;

  // Query
  const updateTaskDeadlineQuery = `
    UPDATE tasks
    SET deadline = $1
    WHERE priority_id = $2 AND task_number = $3
  `;

  pool
    .query(updateTaskDeadlineQuery, [taskDeadline, priorityID, taskNumber])
    .then((result) => {
      console.log("PUT request made to update task deadline!");
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Failed to update task deadline! Error is:", error);
      res.sendStatus(500);
    });
}); // * end PUT request for a task deadline

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
}); // * end DELETE request for a task

module.exports = router;
