
 function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }


const bodyRef = document.querySelector("body");

const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
let timerId = null;

stopBtn.setAttribute('disabled',true);

startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
        bodyRef.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startBtn.setAttribute('disabled',true);
    stopBtn.removeAttribute('disabled');
  });

 
stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled',true);
 });


 console.log("5555555555555555555555");