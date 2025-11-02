// 🎯 Part 1: JavaScript Basics — Variables, Conditionals, and Output
function checkVotingEligibility() {
  // Capture user input
  const age = parseInt(document.getElementById("ageInput").value);

  // Conditional logic to determine eligibility
  let message;
  if (isNaN(age)) {
    message = "Please enter a valid number.";
  } else if (age >= 18) {
    message = "✅ You are eligible to book!";
  } else {
    message = "❌ You are not eligible to book yet.";
  }

  // Output result to the page
  document.getElementById("ageResult").textContent = message;
  console.log("Age check result:", message);
}

// ❤️ Part 2: JavaScript Functions — Reusable Logic
function calculateTotal() {
  // Get input values
  const price1 = parseFloat(document.getElementById("price1").value);
  const price2 = parseFloat(document.getElementById("price2").value);

  // Reusable function to add two numbers
  function add(a, b) {
    return a + b;
  }

  // Validate and calculate
  if (isNaN(price1) || isNaN(price2)) {
    document.getElementById("totalResult").textContent = "Please enter valid prices.";
  } else {
    const total = add(price1, price2);
    document.getElementById("totalResult").textContent = `Total price: $${total.toFixed(2)}`;
    console.log("Total calculated:", total);
  }
}

// 🔁 Part 3: JavaScript Loops — Repetition and Iteration
function listGenres() {
  const genres = ["Fiction", "Non-Fiction", "Mystery", "Science Fiction", "Biography"];
  const list = document.getElementById("genreList");
  list.innerHTML = ""; // Clear previous list

  // Use forEach loop to create list items
  genres.forEach(genre => {
    const li = document.createElement("li");
    li.textContent = genre;
    list.appendChild(li);
  });

  console.log("Genres listed:", genres);
}

// 🌐 Part 4: DOM Manipulation — Interactivity
let isLightTheme = true;

function toggleTheme() {
  const body = document.body;
  const status = document.getElementById("themeStatus");

  if (isLightTheme) {
    body.style.backgroundColor = "#499c73ff";
    body.style.color = "#829c45ff";
    status.textContent = "Current theme: green";
  } else {
    body.style.backgroundColor = "#f4f6f8";
    body.style.color = "#464555ff";
    status.textContent = "Current theme: Light";
  }

  isLightTheme = !isLightTheme;
  console.log("Theme toggled:", isLightTheme ? "Light" : "green");
}
