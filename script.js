let value = 0;

// Function to increment counter
function incrementCounter() {
  // Display alert with the current (un-incremented) value
  alert(value);

  // Increment the counter value
  value++;

  // Update the counter paragraph
  document.getElementById('counter').innerText = value;
}

// Attach the function to the button click
document.getElementById('incrementBtn').addEventListener('click', incrementCounter);
