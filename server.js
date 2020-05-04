const connection = require('../db/db');
const inquirer = require('inquirer');
const cTable = require('console.table');

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
    // CREATE FUNCTION TO VIEW EACH CHOICE AND CLOSE
}