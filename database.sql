-- Drop the view first
DROP VIEW IF EXISTS checklists_view;

-- Drop the table tasks next (since checklists_view depends on it)
DROP TABLE IF EXISTS tasks;

-- Drop the table priorities next (since tasks depends on it)
DROP TABLE IF EXISTS priorities;

-- Drop the table checklists next (since priorities depends on it)
DROP TABLE IF EXISTS checklists;

-- Drop the table user last (since checklists depends on it)
DROP TABLE IF EXISTS "user";


-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

-- Create User Table
CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL
);

-- Create Checklists Table
CREATE TABLE checklists (
    checklist_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    ranking INTEGER CHECK (ranking BETWEEN 1 AND 4),
    is_completed BOOLEAN NOT NULL DEFAULT FALSE,
    checklist_completed_at TIMESTAMP
);

-- Create Priorities Table
CREATE TABLE priorities (
    priority_id SERIAL PRIMARY KEY,
    checklist_id INT REFERENCES checklists(checklist_id),
    priority_number INTEGER CHECK (priority_number BETWEEN 1 AND 3),
    is_completed BOOLEAN NOT NULL DEFAULT FALSE,
    num_tasks INTEGER CHECK (num_tasks BETWEEN 0 AND 2),
    priority_completed_at TIMESTAMP,
    
    CONSTRAINT check_num_tasks CHECK (num_tasks BETWEEN 0 AND 2)
);

-- Create Tasks Table
CREATE TABLE tasks (
    task_id SERIAL PRIMARY KEY,
    priority_id INT REFERENCES priorities(priority_id) ON DELETE CASCADE,
    task_title VARCHAR(80),
    task_description TEXT,
    is_completed BOOLEAN NOT NULL DEFAULT FALSE,
    deadline DATE
);

-- Create view of all the tables of checklists
CREATE VIEW checklists_view AS
SELECT
    checklists.checklist_id,
    checklists.user_id,
    checklists.ranking,
    checklists.is_completed AS checklist_completed,
    priorities.priority_id,
    priorities.priority_number,
    priorities.is_completed AS priority_completed,
    priorities.num_tasks,
    priorities.priority_completed_at,
    tasks.task_id,
    tasks.task_title,
    tasks.task_description,
    tasks.is_completed AS task_completed,
    tasks.deadline
FROM
    checklists
LEFT JOIN
    priorities ON checklists.checklist_id = priorities.checklist_id
LEFT JOIN
    tasks ON priorities.priority_id = tasks.priority_id;
