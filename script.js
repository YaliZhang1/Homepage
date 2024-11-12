var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function openTab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

const currentYear = new Date().getFullYear();
document.getElementById(
  "copyright"
).innerHTML = `Copyright © ${currentYear} . Made with <i class="fa-solid fa-heart"></i> by Yali.`;

// Add event listeners to tab links, the sidebar when <=600px
var sidemeu = document.getElementById("sidemenu");
function openmenu() {
  sidemeu.style.right = "0";
}

function closemenu() {
  sidemeu.style.right = "-200px";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzn4LyuuG-QmODdjrbZQTIBfzWxLOWc1ID9Doaz_toCDmRy2iPNdYAbUdWBmjTzJI_ysw/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});