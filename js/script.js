window.addEventListener("scroll", reveal);

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}

const emailBtn = document.querySelector(".emailEnv");
const emailBtnRemove = document.querySelector(".showEmailBtn");

emailBtn.addEventListener("click", () => {
  emailBtnRemove.classList.toggle("active");
});


const iconDiv = document.querySelector(".iconDiv");
const textEmail = document.querySelector(".textEmail > p")

iconDiv.onclick = function() {
  document.execCommand("copy");
}

iconDiv.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", textEmail.textContent);
    console.log(event.clipboardData.getData("text"))
  }
});