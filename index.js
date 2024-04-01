#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = ["Maham", "Hani", "Maryam"];
async function createTodo() {
    let ans = await inquirer.prompt([{
            type: "list",
            name: "select",
            message: "Select an Operation",
            choices: ["Add", "Update", "View", "Delete"]
        }]);
    if (ans.select === "Add") {
        let addTodo = await inquirer.prompt([{
                name: "todo",
                type: "input",
                message: chalk.bgMagenta.bold("Add Task Items In Your List:"),
            }]);
        todos.push(addTodo.todo);
        console.log(todos);
    }
    if (ans.select === "Update") {
        let updateTodo = await inquirer.prompt([{
                name: "updatetodo",
                type: "list",
                message: chalk.bgMagenta.bold("Select the task to update:"),
                choices: todos
            }]);
        let updatedIndex = todos.indexOf(updateTodo.updatetodo);
        let newTodo = await inquirer.prompt([{
                name: "todo",
                type: "input",
                message: chalk.bgMagenta.bold("Enter the updated task:"),
            }]);
        todos[updatedIndex] = newTodo.todo;
        console.log(todos);
    }
    if (ans.select === "View") {
        console.log(chalk.bgGreen("***********TO DO LIST***********"));
        console.log(todos);
        console.log(chalk.bgGreen.bold("***********"));
    }
    if (ans.select === "Delete") {
        let delTodo = await inquirer.prompt([{
                name: "del",
                type: "list",
                message: chalk.bgMagenta.bold("Select the task to delete:"),
                choices: todos
            }]);
        todos = todos.filter(value => value !== delTodo.del);
        console.log(todos);
    }
}
createTodo();
