CREATE TABLE tasks (
"id" serial PRIMARY KEY,
"task" varchar (30),
"completed" boolean DEFAULT false
);

INSERT INTO tasks (task) VALUES('testTask1');

SELECT * FROM tasks;

DELETE FROM tasks WHERE id=1;

UPDATE tasks SET completed=true WHERE id=1;