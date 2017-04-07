//for html play button do not delete
function rock() {

    var userchoice = prompt("Do you choose rock paper or scissors?").toLowerCase();
    
    //computer choosing rock paper or scissors
    var computerchoice = Math.random();
    if (computerchoice < .34)
    {
        computerchoice = "rock";
    }
    else if (computerchoice > .67)
    {
        computerchoice = "paper";
    }
    else {
        computerchoice = "scissors";
    }
    //ends here
    
    //tie
    if (computerchoice === userchoice)
    {
        alert ("Computer chose " + computerchoice+ ". It is a tie :|");
    }
    //tie ends
    
    
    else if (computerchoice == "rock" && userchoice == "paper")
    {
        alert("Computer chooses rock. You win :)");
    }
    
    else if (computerchoice == "rock" && userchoice == "scissors")
    {
        alert("Computer chooses rock. You lose :(");
    }
    
    else if (computerchoice == "paper" && userchoice == "scissors")
    {
        alert("Computer chooses rock. You win :)");
    }
    
    else if (computerchoice == "paper" && userchoice == "rock")
    {
        alert("Computer chooses paper. You lose :(");
    }
    
    else if (computerchoice == "scissors" && userchoice == "rock")
    {
        alert("Computer chooses scissors. You win :)")
    }
    
    else if(computerchoice == "scissors" && userchoice == "paper")
    {
        alert("Computer chooses scissors. You lose :(");
    }

    else {
        alert("Error. Please only put in Rock, Paper or Scissors. Capitalization dosent matter.")
    }
    
    
    
//do not erase it is part of function
}


function cointoss() {

    var toss =    var computerchoice = Math.random();

    if (computerchoice > .50) {
        alert("Heads");

    }
    
        if (computerchoice < .50) {
        alert("Tails");

    }

}     
