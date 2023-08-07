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
    // Selecting from view table
    const queryText = `
      SELECT
        c.checklist_id,
        c.ranking,
        checklist_completed,
        p.priority_id,
        p.priority_number,
        priority_completed,
        p.num_tasks,
        t.task_id,
        t.task_description,
        task_completed,
        t.deadline,
        td.todo_id,
        td.todo_item
      FROM checklists_view c
      LEFT JOIN priorities p ON c.checklist_id = p.checklist_id
      LEFT JOIN tasks t ON p.priority_id = t.priority_id
      LEFT JOIN todos td ON t.task_id = td.task_id
      WHERE c.user_id = $1
      ORDER BY c.checklist_id, p.priority_number, t.task_id, td.todo_id;
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
      INSERT INTO "checklists" ("user_id")
      VALUES ($1)
      RETURNING checklist_id;
      `;

    pool
      .query(queryText, [userID])
      .then((result) => {
        const newChecklistID = result.rows[0].checklist_id;

        // Fetch the newly created checklist with priority data
        const queryUpdatedChecklist = `
          SELECT * FROM checklists_view WHERE checklist_id = $1;
        `;

        return pool.query(queryUpdatedChecklist, [newChecklistID]);
      })
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
