#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let score = 0;
let quiz = await inquirer.prompt([
    {
        name: "Q1",
        message: "National police academy is situated in ?",
        type: "list",
        choices: ["Islamabad", "Karachi", "Lahore", "Multan"],
    },
    {
        name: "Q2",
        message: "Largest islamic country by area is ?",
        type: "list",
        choices: ["Kazakistan", "Sudan", "indonesia", "Saudia"],
    },
    {
        name: "Q3",
        message: "Cyprus is ?",
        type: "list",
        choices: ["Island", "Landlocked", "Peninsula", "None of them"],
    },
    {
        name: "Q4",
        message: "Hamas is ?",
        type: "list",
        choices: ["President of lebanon", "Radical palestinian group", "Town of Jordon", "None of them"],
    },
    {
        name: "Q5",
        message: "Tenge is the currency of ?",
        type: "list",
        choices: ["New zealand", "Kazakastan", "Finland", "Malaysia"],
    },
    {
        name: "Q6",
        message: "Which is the oldest search engine of internet ?",
        type: "list",
        choices: ["Google", "Yahoo", "Ask", "Archie"],
    },
    {
        name: "Q7",
        message: " Pakistan largest river is ?",
        type: "list",
        choices: ["Indus", "Ravi", "Hub", "Chenab"],
    },
    {
        name: "Q8",
        message: "Nippon is the stcok exchange of ?",
        type: "list",
        choices: ["Japan", "France", "Russia", "UK"],
    },
    {
        name: "Q9",
        message: "Silicon valley of California  is called because of ?",
        type: "list",
        choices: ["Government Offices", "Film industry", "Stock exchange", "Computer industry"],
    },
    {
        name: "Q10",
        message: "What is the colour of blood in body ?",
        type: "list",
        choices: ["Red", "White", "Yellow", "Black"],
    },
]);
let Answer1 = quiz.Q1;
let Answer2 = quiz.Q2;
let Answer3 = quiz.Q3;
let Answer4 = quiz.Q4;
let Answer5 = quiz.Q5;
let Answer6 = quiz.Q6;
let Answer7 = quiz.Q7;
let Answer8 = quiz.Q8;
let Answer9 = quiz.Q9;
let Answer10 = quiz.Q10;
if (Answer1 === "Islamabad") {
    score = score + 1;
    console.log(chalk.green.bold(`1: Correct`));
}
else {
    console.log(chalk.red.bold(`1: Wrong`));
}
if (Answer2 === "Kazakistan") {
    score = score + 1;
    console.log(chalk.green.bold(`2: Correct`));
}
else {
    console.log(chalk.red.bold(`2: Wrong`));
}
if (Answer3 === "Island") {
    score = score + 1;
    console.log(chalk.green.bold(`3: Correct`));
}
else {
    console.log(chalk.red.bold(`3: Wrong`));
}
if (Answer4 === "Radical palesdtinian group") {
    score = score + 1;
    console.log(chalk.green.bold(`4: Correct`));
}
else {
    console.log(chalk.red.bold(`4: Wrong`));
}
if (Answer5 === "Kazakastan") {
    score = score + 1;
    console.log(chalk.green.bold(`5: Correct`));
}
else {
    console.log(chalk.red.bold(`5: Wrong`));
}
if (Answer6 === "Yahoo") {
    score = score + 1;
    console.log(chalk.green.bold(`6: Correct`));
}
else {
    console.log(chalk.red.bold(`6: Wrong`));
}
if (Answer7 === "Indus") {
    score = score + 1;
    console.log(chalk.green.bold(`7: Correct`));
}
else {
    console.log(chalk.red.bold(`7: Wrong`));
}
if (Answer8 === "Japan") {
    score = score + 1;
    console.log(chalk.green.bold(`8: Correct`));
}
else {
    console.log(chalk.red.bold(`8: Wrong`));
}
if (Answer9 === "Computer industry") {
    score = score + 1;
    console.log(chalk.green.bold(`9: Correct`));
}
else {
    console.log(chalk.red.bold(`9: Wrong`));
}
if (Answer10 === "Red") {
    score = score + 1;
    console.log(chalk.green.bold(`10: Correct`));
}
else {
    console.log(chalk.red.bold(`10: Wrong`));
}
if (score > 5) {
    console.log(chalk.yellowBright.bold.italic(`Congratulations, Your score is 10 out of ${score} Well done keep it up`));
}
if (score <= 5) {
    console.log(chalk.redBright.bold.italic(`Sorry, Your score is out of ${score}. You need more practice`));
}
