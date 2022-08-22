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

let aux = prompt('Make your choice, player: Rock, Paper or Scissors?');
console.log (aux); //just to check

// now, I write a function that converts the input to a valid value for later comparison with the computers choice
//finally, a function was not needed

if (aux.toLowerCase() === 'rock'){
    playerSelection = 'Rock';

} else if (aux.toLowerCase() === 'paper') {
    playerSelection = 'Paper';

} else if (aux.toLowerCase() === 'scissors') {
    playerSelection = 'Scissors';

} else {
    console.log ('Not valid, Ill put a prompt here in the future')
}

console.log ('PLAYERS CHOICE IS '+ playerSelection);


// *************    THIRD SECTION   *************

//Now, I take both ComputerSelection and playerSelection and check who the winner is

function playRound (playerSelection, ComputerSelection){
    

if (ComputerSelection === playerSelection){
    console.log('it\'s a Draw, bro');
} else if (ComputerSelection === 'Rock' && playerSelection === 'Paper'){
    console.log('Player wins!');

} else if (ComputerSelection === 'Rock' && playerSelection === 'Scissors') {
    console.log('Computer wins!');

} else if (ComputerSelection === 'Paper' && playerSelection === 'Rock'){
    console.log('Computer wins!')   ; 
} else if (ComputerSelection === 'Paper' && playerSelection === 'Scissors'){
    console.log('Player wins!')   ; 
} else if (ComputerSelection ==='Scissors' && playerSelection === 'Rock'){
    console.log('Player wins!');
} else if (ComputerSelection === 'Scissors' && playerSelection === 'Paper') {
    console.log('Computer wins!');
} else {
    console.log('looks like theres something wrong here...')
}



}



//at the moment, it plays only one round, and it only shows who the winner is
// it doesn't record the result


