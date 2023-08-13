import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

// Example dynamic data (replace this with your actual data)
const checklistHistoryData = [
  {
    checklistID: 1,
    priorities: [
      { priority: "Priority 1", deadline: "Deadline 1" },
      { priority: "Priority 2", deadline: "Deadline 2" },
      { priority: "Priority 3", deadline: "Deadline 3" },
    ],
    prioritiesCompletedAt: "Priorities Completion Date",
    tasks: ["Task 1", "Task 2", "Task 3"],
    tasksCompletedAt: "Tasks Completion Date",
  },
  // Add more data entries as needed
];

// - ChecklistHistory COMPONENT -
function ChecklistHistory() {
  return (
    <>
      <center>
        <h1>Checklist History</h1>
      </center>
      <TableContainer component={Paper} style={{ marginBottom: "16px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Checklist ID</TableCell>
              <TableCell>Priorities and Deadlines</TableCell>
              <TableCell>Priorities Completed At</TableCell>
              <TableCell>Tasks</TableCell>
              <TableCell>Tasks Completed At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {checklistHistoryData.map((entry) => (
              <TableRow key={entry.checklistID}>
                <TableCell>{entry.checklistID}</TableCell>
                <TableCell>
                  {entry.priorities.map((priority) => (
                    <div key={priority.priority}>
                      {priority.priority}: {priority.deadline}
                    </div>
                  ))}
                </TableCell>
                <TableCell>{entry.prioritiesCompletedAt}</TableCell>
                <TableCell>
                  {entry.tasks.map((task) => (
                    <div key={task}>{task}</div>
                  ))}
                </TableCell>
                <TableCell>{entry.tasksCompletedAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
} // - END ChecklistHistory COMPONENT -

export default ChecklistHistory;
