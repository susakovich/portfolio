let sideMenu = document.getElementById("sideMenu");

function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-120px";
}

// Get all input elements in the form
let inputs = document.querySelectorAll("input, textarea");

// Attach a submit event listener to the form
document.querySelector("form").addEventListener("submit", function (event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Loop through all input elements
  for (var i = 0; i < inputs.length; i++) {
    // Clear the value of each input element
    inputs[i].value = "";
  }

  // Log a message to confirm that the form was submitted
  console.log("Form submitted!");
});
