#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollor
let myPin = 1234;
let pinanswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter Your Pin",
    },
]);
if (pinanswer.pin === myPin) {
    console.log("Correct Pin Code.!!");
    let operationans = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select Option",
            type: "list",
            choices: ["Withdraw", "Check Balance"],
        },
    ]);
    // console.log(operationans);
    if (operationans.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter Your Amount",
                type: "number",
            },
        ]);
        myBalance -= amountAns.amount;
        console.log("Your remaing Balane is : " + myBalance);
    }
    else if (operationans.operation === "Check Balance") {
        console.log("Your Current Balance is : " + myBalance);
    }
}
else {
    console.log("Incorrect Pin Code.!!");
}
