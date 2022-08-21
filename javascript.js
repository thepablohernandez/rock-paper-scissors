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
console.log(ComputerSelection); // this is just to test the function and its assingment