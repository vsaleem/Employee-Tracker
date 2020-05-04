USE employeetracker_db;

INSERT INTO department(name)
VALUES("Judge"), ("Attorney"), ("Caseworker"), ("CASA Volunteer");

INSERT INTO employee_role(title, salary, department_id)
VALUES('Judge', 89000, 1),('DCFS Supervisor', 49000, 2),('CASA Volunteer', 0, 3);

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES("Beyonce", "K-Carter", 1, 1),("BlueIvy", "Carter", 2, 1),("Sarah", "Baskin", 3, 1),("Tiger", "King", 3, 1);
