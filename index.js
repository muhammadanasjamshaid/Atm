#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let myBalance = 10000; // Dollor
let myPin = 1234;
let pinanswer = await inquirer_1.default.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter Your Pin",
    },
]);
if (pinanswer.pin === myPin) {
    console.log("Correct Pin Code.!!");
    let operationans = await inquirer_1.default.prompt([
        {
            name: "operation",
            message: "Please Select Option",
            type: "list",
            choices: ["Withdraw", "Check Balance"],
        },
    ]);
    // console.log(operationans);
    if (operationans.operation === "Withdraw") {
        let amountAns = await inquirer_1.default.prompt([
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
