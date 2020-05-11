const connection = require('./db/db');
const inquirer = require('inquirer');
const cTable = require('console.table');

connection.connect(function(error){
    if (error) throw error;
    console.log('Result: ' + 'connected!\n\n');
    userPrompt();
});


function userPrompt(){
    inquirer.prompt({
        name: 'choice',
        type: 'list',
        message: 'Welcome......... to your dashboard.',
        choices: [
            'View Employees',
            'View Roles',
            'View Department',
            'Add Employee',
            'Add Role',
            'Add Department',
            'Update Employee Role',
            'Exit'
        ]
    })
    // CREATE SWITCH FUNCTION TO VIEW EACH CHOICE AND EXIT
    .then(function(answer) {
        switch (answer.choice) {
            case "View Employees":
                viewEmployees();
                break;

            case "View Roles":
                viewRoles();
                break;

            case "View Department":
                viewDepartment();
                break;

            case "Add Employee":
                addEmployee();
                break;

            case "Add Role":
                addRole();
                break;

            case "Add Department":
                addDepartment();
                break;

            case "Update Employee Role":
                updateRole();
                break;

            default:
                console.log("Great! See you later.")
                connection.end();
        };
    });
};
// FUNCTIONS TO VIEW INFO FROM DB

function viewEmployees(){
        let query = "SELECT employees.first_name, employees.last_name, employee_role.title, employee_role.salary, department.department  FROM employees LEFT JOIN employee_role ON employee_role.id = employees.role_id LEFT JOIN department ON employee_role.department_id = department.id";
        connection.query(query, function (error, response){
        if (error) throw error;
        console.table(response);
        console.log('Request complete.\n');
        userPrompt();
    });      
};
function viewRoles(){
    let query = "SELECT * FROM employee_role"
    connection.query(query, function (error, response){
        if(error) throw error;
        console.table(response);
        console.log("Request complete.")
        userPrompt();
    });
};
function viewDepartment(){
    let query = "SELECT * FROM department"
    connection.query(query, function(error, response){
        if(error) throw error;
        console.table(response);
        console.log('Request complete.');
        userPrompt();
    });
};

// FUNCTION THAT ADDS NEW EMPLOYEE TO TABLE IN DB
function addEmployee(){
    console.log('\nPlease enter the new Employee`s information.\n')
    let query = 'SELECT * FROM employee_role'
    connection.query(query, function (error, response){
        if(error) throw error;
        const roles = response.map(function(item){
            return item.title;
        });
        // console.log(response);
        // console.log(roles);
    
        // PROMPT TO GET NEW EMPLOYEE INFO
        inquirer.prompt([
            {
            type: "list",
            name: "role_id",
            message: "Select Role",
            choices: roles
        },  {
            type: "input",
            name: "first_name",
            message: "Enter First Name",
        },  {
            type: "input",
            name: "last_name",
            message: "Enter Last Name"
        },
    ]).then(function(enter){
        
        connection.query("INSERT INTO employees SET ?", {
            first_name: enter.first_name,
            last_name: enter.last_name,
            
        },
         function(error, response){
                if (error) throw error;
                // console.log(enter);
                console.log("\nEmployee has been added.\n");
                console.table(enter);
                userPrompt();

            }
        );
            
    });
});
    
};

function addRole(){
    console.log('\n Create new role.\n')
    let query = "SELECT * FROM department"
    connection.query(query, function (error, response){
        if(error)throw error;
        const departments = response.map(function(item){
            return item.department;
        });
        // console.log(departments)
    });

    // PROMPT TO GET NEW ROLE INFO
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Enter new role title."

        },
        {
            type: "input",
            name: "department_id",
            message: "Enter Role Id."
        },
        {
            type: "input",
            name: "salary",
            message: "Enter starting salary."
        }
    ]).then(function(enter){
        connection.query("INSERT INTO employee_role SET ?", {
            department_id: enter.department_id,
            title: enter.title,
            salary: enter.salary

        },
        function(error, response){
            if(error) throw error;
            // console.log(enter);
            console.log("\nNew Role has been added.\n");
            console.log(enter);
            userPrompt();
        });
    });
};
