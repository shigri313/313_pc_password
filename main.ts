#! /usr/bin/evn node
let password = "shigri313";
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  {
    message: "Enter your password ",
    type: "string",
    name: "user",
  },
]);
if (answer.user != password) {
  console.log("please Enter a valid password ");
} else {
  console.log("Congratulation , you enter the right password");
}
