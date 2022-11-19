// let tabLinks = document.getElementsByClassName("about__tab-links");
// let tabContents = document.getElementsByClassName("about__tab-contents");

// function openTab(tabName) {
//   for (tabLink of tabLinks) {
//     tabLink.classList.remove("active-link");
//   }
//   for (tabContent of tabContents) {
//     tabContent.classList.remove("active-tab");
//   }
//   event.currentTarget.classList.add("active-link");
//   document.getElementById("tabName").classList.add("active-tab");
// }

let sideMenu = document.getElementById("sideMenu");

function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-120px";
}

// Form Script

const scriptURL =
  "https://script.google.com/macros/s/AKfycby_Jo9z7dRS2qJVU1TYY07BShDLkTZx1pKlQ0QVJDXNRIYTEhbvw6HzN1RlwcQ6gq3cRg/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 2000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
