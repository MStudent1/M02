//function is declared
function playGuessingGame(numToGuess, totalGuesses = 10) { 
//while loop that only ends when the user runs out of guesses OR their number is the right number
while (totalGuesses != 0 || num == numToGuess) {
let num = prompt("Enter a number between 1 and 100.");
//if else conditions prevent user from entering a null character, "", and a NaN value. Else activates the nested if else statements
if (num === null){
            return 0;
}
else if(num == "" || isNaN(num)){
  console.log("Please enter a number");
  console.log("Total guesses: " + totalGuesses);
} 
else {
//If else statements test if the number the user entered is less than, greater than, or equal to the number to guess. It will display a proper message based on the user's input
if (num > numToGuess) {
num = prompt(num + " is too small. Guess a larger number.");
totalGuesses -= 1;
console.log("Total guesses: " + totalGuesses);

} 
else if (num < numToGuess) {
num = prompt(num + " is too small. Guess a larger number.");
totalGuesses -= 1;
console.log("Total guesses: " + totalGuesses);

} 
else if (num == numToGuess) {
  console.log("You have guessed the right number, which is " + numToGuess + ".");
    console.log("You have " + totalGuesses + " guesses left. End of program.");
    return totalGuesses;

}
//Program will abruptly end if the total allowed guesses equals zero
if (totalGuesses == 0){
    console.log("You have " + totalGuesses + " guesses left. End of program.");
    return 0;
}
}
}
}