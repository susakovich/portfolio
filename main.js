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

  // Loop through all input elements using forEach
  Array.from(inputs).forEach(function (input) {
    // Clear the value of each input element
    input.value = "";
  });
});
