const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");
const userStrategy = require("../strategies/user.strategy");

const router = express.Router();

// * GET request for all priorities of user that is logged in
router.get("/:priorityID", (req, res) => {
  const priorityID = req.params.priorityID;

  // SQL Query for all priorities
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
}); // * end GET all user's checklist priorities

// // * POST request for adding checklist of user that is logged in
// router.post("/", (req, res) => {
//   // Declaring req.body as variable
//   const userID = req.body.userID;
//   console.log("userID is:", userID);
//   // SQL query to add a checklist
//   const queryText = `
//     INSERT INTO "priorities" ("checklist_id")
//     VALUES ($1)
//     RETURNING priorities_id;
//     `;

//   pool
//     .query(queryText, [userID])
//     .then((result) => {
//       const newpriorityID = result.rows[0].checklist_id;

//       // Fetch the newly created checklist with priority data
//       const queryUpdatedChecklist = `
//         SELECT * FROM checklists_view WHERE checklist_id = $1;
//       `;

//       return pool.query(queryUpdatedChecklist, [newpriorityID]);
//     })
//     .then((result) => {
//       console.log("POST request made to add a checklist! Result is:", result);
//       res.sendStatus(201);
//     })
//     .catch((error) => {
//       console.log("Failed to add checklist! Error is:", error);
//       res.sendStatus(500);
//     });
// });

// // * DELETE request of user's selected checklist
// router.delete("/:userID/:checklist", (req, res) => {
//   // Declaring user's id as parameter
//   const userID = req.params.id;
//   // Declaring user's checklist id as parameter
//   const priorityID = req.params.checklist;

//   // Queries
//   // Query to remove todos from selected checklist
//   const deleteTodosQuery = `
//     DELETE FROM todos WHERE task_id IN (SELECT task_id FROM tasks WHERE priority_id IN (SELECT priority_id FROM priorities WHERE checklist_id = $1));
//   `;

//   // Query to remove todos from selected checklist
//   const deleteTasksQuery = `
//     DELETE FROM tasks WHERE priority_id IN (SELECT priority_id FROM priorities WHERE checklist_id = $1);
//   `;

//   // Query to remove todos from selected checklist
//   const deletePrioritiesQuery = `
//     DELETE FROM priorities WHERE checklist_id = $1;
//   `;

//   // Query to remove todos from selected checklist
//   const deleteChecklistQuery = `
//     DELETE FROM checklists WHERE checklist_id = $1 AND user_id = $2;
//   `;

//   // Running multiple queries in the pool query
//   pool
//     .query(deleteTodosQuery, [priorityID])
//     .then(() => pool.query(deleteTasksQuery, [priorityID]))
//     .then(() => pool.query(deletePrioritiesQuery, [priorityID]))
//     .then(() => pool.query(deleteChecklistQuery, [priorityID, userID]))
//     .then(() => {
//       console.log("DELETE request made to remove a checklist!");
//       res.sendStatus(201);
//     })
//     .catch((error) => {
//       console.log("Failed to remove checklist! Error is:", error);
//       res.sendStatus(500);
//     });
// });

module.exports = router;
