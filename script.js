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

document.getElementById("loadMore").addEventListener("click", function (e) {
  e.preventDefault();
  const myWorkContents = document.querySelector(".work-list");

  const newWorkContent = document.createElement("div");
  newWorkContent.innerHTML = ` 
          <div class="work">
            <img src="./asset/img/redFlowerDesk.jpg" />
            <div class="layer">
              <h3>Social Media App</h3>
              <p>
                A social media app that allows users to share their thoughts,
                feelings, and experiences.
              </p>
              <a href="#"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></a>
            </div>
          
        `;
  myWorkContents.appendChild(newWorkContent);
});

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

// const mediaQuery = window.matchMedia("(max-width: 800px)");
// function handleMediaChange(e) {
//   if (e.matches) {
//     openmenu(); // 当屏幕小于800px时调用openmenu()
//   }
// }
// handleMediaChange(mediaQuery);
// mediaQuery.addEventListener("change", handleMediaChange);

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
