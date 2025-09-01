/********************************************
 * Part 1: Variable Declarations & Conditionals
 ********************************************/
let number = 5;
let userName = "Guest";
let isLoggedIn = false;

if (isLoggedIn) {
  console.log("Welcome back, " + userName + "!");
} else {
  console.log("Please log in.");
}

/********************************************
 * Part 2: Custom Functions
 ********************************************/
// Function 1: Change the message text
function changeMessage() {
  let messageElement = document.getElementById("message");
  messageElement.textContent = "You clicked the button!";
}

// Function 2: Check if a number is even or odd
function checkNumber() {
  let input = document.getElementById("numberInput").value;
  let messageElement = document.getElementById("message");

  if (input === "") {
    messageElement.textContent = "Please enter a number.";
    return;
  }

  let number = parseInt(input);
  if (number % 2 === 0) {
    messageElement.textContent = number + " is Even.";
  } else {
    messageElement.textContent = number + " is Odd.";
  }
}

/********************************************
 * Part 3: Loops
 ********************************************/
// Example 1: For loop (populate a list)
let fruits = ["Apple", "Banana", "Cherry", "Date"];
let listContainer = document.getElementById("listContainer");

for (let i = 0; i < fruits.length; i++) {
  let li = document.createElement("li");
  li.textContent = fruits[i];
  listContainer.appendChild(li);
}

// Example 2: While loop (countdown in console)
let count = 5;
while (count > 0) {
  console.log("Countdown: " + count);
  count--;
}

/********************************************
 * Part 4: DOM Interactions
 ********************************************/
// Interaction 1: Change text on button click
document.getElementById("changeTextBtn").addEventListener("click", changeMessage);

// Interaction 2: Check number on button click
document.getElementById("checkNumberBtn").addEventListener("click", checkNumber);

// Interaction 3: Change background color when hovering message
document.getElementById("message").addEventListener("mouseover", function() {
  this.style.color = "blue";
});
document.getElementById("message").addEventListener("mouseout", function() {
  this.style.color = "black";
});
