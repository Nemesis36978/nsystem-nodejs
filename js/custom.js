const body = document.querySelector('body');
const toggle = document.getElementById('toggle');

const lightToggle = document.getElementsByClassName("lightToggleIcon");
const darkToggle = document.getElementsByClassName("darkToggleIcon");

toggle.addEventListener("click", () => {
    const bodyCheck = body.classList.contains('dark');
    if (bodyCheck) {
        body.className = ''

        lightToggle[0].style.display = "block";
        darkToggle[0].style.display = "none";
    } else {
        body.className = "dark"

        lightToggle[0].style.display = "none";
        darkToggle[0].style.display = "block";
  }
})