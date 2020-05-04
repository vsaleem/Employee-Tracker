USE employeetracker_db;

INSERT INTO department(name)
VALUES("Judge"), ("Attorney"), ("Caseworker"), ("CASA Volunteer");

INSERT INTO employee_role(title, salary, department_id)
VALUES('Judge', 89000, 1),('DCFS Supervisor', 49000, 2),('CASA Volunteer', 0, 3);

