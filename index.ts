#! /usr/bin/env node


import inquirer from "inquirer";

const generatedNum:number=Math.floor(Math.random()*10+1);

const answer=await inquirer.prompt([{
    message:"Guess your number from 1-10",
    type:"number",
    name:"Guessednumber",
}]);

if(answer.Guessednumber===generatedNum){
    console.log("Congratulation! you won.")
}else{
    console.log("You guessed the wrong number!")
}