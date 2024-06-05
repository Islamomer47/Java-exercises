// Q7: Use a loop to display the numbers 0 through 5, each in a separate alert window.
for (let i = 0; i <= 5; i++) {
  alert(i);
}

// Q8: Use a loop to display the numbers 0 through 5 in a single alert window
let message = "";
for (let i = 0; i <= 5; i++) {
  message += i + " ";
}
alert(message);

// Q9: Use a loop to display the numbers in the range 0…20 that are multiples of 3.
for (let i = 0; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
//Q10: Prompt the user for a number in the range 0…100.  If the number is out of range, display an error message and prompt again until a valid number is entered.  Assume the user enters a number each time
let number = parseInt(prompt("Please enter a number between 0 and 100:"));

while (number < 0 || number > 100 || isNaN(number)) {
  alert("Error: The number must be between 0 and 100.");
  number = parseInt(prompt("Please enter a valid number between 0 and 100:"));
}

alert("You entered a valid number: " + number);

// Q11: Prompt for an integer, then display the sum of the integers from 0 through the number entered.  For example, if you enter 10, then display 55 which is the sum of   0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
let userInput;
do {
  userInput = parseInt(prompt("Enter a positive integer:"));
  if (isNaN(userInput) || userInput <= 0) {
    alert("Error: Please enter a valid positive integer.");
  }
} while (isNaN(userInput) || userInput <= 0);

let totalSum = 0;
for (let i = 0; i <= userInput; i++) {
  totalSum += i;
}

alert("The sum of integers from 0 to " + userInput + " is: " + totalSum);
