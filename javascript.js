

// I add two variables to keep record. the variables go before the following for statement, so they start with 0...
//... but they do not restart every round

let computerRecord = 0;
let playerRecord = 0;

// the next for statement plays 5 rounds of rock, paper, scissors

for (let i = 0; i < 5; i++) {

// *************    FIRST SECTION   *************

/* For the first section of the file I will work on one or more functions
to generate a random choice for the computer (between rock, paper or scissors) and save it
to later on use it and compare against users choice*/

// generate a function that randomly selects rock, paper or scissors
// to do so, I generate random numbers

function getComputerChoice () {

    // I assign the result with the same probabilty, dividing the math.random in 3:
    // at 1/3 and 2/3
    
    let choice = Math.random();
    if (choice <= 1/3) {
        console.log(choice);//just to check
        return 'Rock'
    }
    else if (choice > 1/3 && choice < 2/3){
       console.log(choice); //just to check         
        return 'Paper'; 
    } else {
       console.log(choice); //just to check;
        return 'Scissors'
            
    }
}

// ... then, save the result of the previous function in the variable ComputerSelection

let ComputerSelection = getComputerChoice ();
console.log('COMPUTERS CHOICE IS '+ ComputerSelection); // this is just to test the function and its assingment


// *************    SECOND SECTION   *************

/* this sections goal is to develop a prompt that saves the users choice
and that can handle uppercase, lowercase, and combinations */


// first, I create a variable to store the users choice

let playerSelection;

// then, a prompt that assings its result to an auxiliary variable
// why an aux variable? to save the prompt, no matter if the input is useful/valid or not


//I write a function to keep asking for a valid input while the playerSelection is undefined. once it has a valid value, it stops asking

function playerInput(){

    while (playerSelection === undefined){

    
let aux = prompt('Make your choice, player: Rock, Paper or Scissors?');
//console.log (aux); //just to check

// now, I write a function that converts the input to a valid value for later comparison with the computers choice
//finally, a function was not needed

if (aux.toLowerCase() === 'rock'){
    playerSelection = 'Rock';

} else if (aux.toLowerCase() === 'paper') {
    playerSelection = 'Paper';

} else if (aux.toLowerCase() === 'scissors') {
    playerSelection = 'Scissors';

} else {
    console.log ('Seems like you made a typo, please try again')
}

console.log ('PLAYERS CHOICE IS '+ playerSelection);

    }


}

playerInput();



// *************    THIRD SECTION   *************



//Now, I take both ComputerSelection and playerSelection and check who the winner is

function playRound (playerSelection, ComputerSelection){
    

if (ComputerSelection === playerSelection){
    console.log('it\'s a Draw, bro');
} else if (ComputerSelection === 'Rock' && playerSelection === 'Paper'){
    console.log('Player wins!');
    playerRecord = playerRecord +1;

} else if (ComputerSelection === 'Rock' && playerSelection === 'Scissors') {
    console.log('Computer wins!');
    computerRecord = computerRecord + 1;
} else if (ComputerSelection === 'Paper' && playerSelection === 'Rock'){
    console.log('Computer wins!')   ; 
    computerRecord = computerRecord + 1;
} else if (ComputerSelection === 'Paper' && playerSelection === 'Scissors'){
    console.log('Player wins!')   ; 
    playerRecord = playerRecord +1;
} else if (ComputerSelection ==='Scissors' && playerSelection === 'Rock'){
    console.log('Player wins!');
    playerRecord = playerRecord +1;
} else if (ComputerSelection === 'Scissors' && playerSelection === 'Paper') {
    console.log('Computer wins!');
    computerRecord = computerRecord + 1;
} else {
    console.log('looks like theres something wrong here...')
}

console.log('Player record is: '+playerRecord+' ... Computer record is: '+computerRecord);


}

playRound(playerSelection,ComputerSelection);

}


// *************    LAST SECTION   *************

// Compare the records to show a message determining the final winner

if (playerRecord < computerRecord){
    console.log('Computer wins... FLAWLESS VICTORY');
} else if (playerRecord > computerRecord) {
    console.log('You win... FLAWLESS VICTORY');
} else {
    console.log('it\'s a draw :(');
};