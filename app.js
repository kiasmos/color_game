let start = document.querySelector(".start");
let startBox = document.querySelector(".start-box");
let rgbRandomText = document.querySelector(".rgb-random");
let divColor = document.querySelectorAll(".colors");
let correct = document.querySelector(".correct");
let incorrect = document.querySelector(".incorrect");
let result = document.querySelector(".result");
let correctCount = 0;

function randomRgb() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let color = "rgb(" + r + ", " + g + ", " + b + ")";

  return color;
}

start.addEventListener("click", () => {
  startBox.style.display = "none";
  rgbRandomText.textContent = `${randomRgb()}`;

  let randomColor = randomRgb();
  rgbRandomText.textContent = randomColor;

  let randomIndex = Math.floor(Math.random() * divColor.length);
  divColor[randomIndex].style.background = randomColor;

  divColor.forEach((element, index) => {
    if (index !== randomIndex) {
      element.style.background = randomRgb();
    }
  });

  divColor.forEach((element) => {
    element.addEventListener("click", () => {
      let color = element.style.background;

      if (color === randomColor) {
        divColor.forEach((div) => {
          div.style.background = randomRgb();
        });
        divColor[randomIndex].style.background = rgbRandomText.textContent;

        correct.style.display = "block";
        incorrect.style.display = "none";
        correctCount++;
        result.textContent = `Doğru: ${correctCount}`;
        setTimeout(() => {
          correct.style.display = "none";
          incorrect.style.display = "none";
          let newRandomColor = randomRgb();
          rgbRandomText.textContent = newRandomColor;
          divColor[
            Math.floor(Math.random() * divColor.length)
          ].style.background = newRandomColor;
          randomColor = newRandomColor;
        }, 1000);
      } else {
        correct.style.display = "none";
        incorrect.style.display = "block";
        correctCount = 0;
        result.textContent = `Doğru: ${correctCount}`;
        setTimeout(() => {
          correct.style.display = "none";
          incorrect.style.display = "none";
        }, 1000);
      }
    });
  });

  let selectedOption = document.getElementById("select").value;
  let duration = parseInt(selectedOption);
  // console.log(duration);

  startTimer(duration);
});

let done = document.querySelector(".done");
function startTimer(duration) {
  let say = 60;
  let vaxt = say * duration;
  let timerInterval = setInterval(() => {
    let timer = document.querySelector(".timer");
    // var s = new Date();
    // console.log(s.getSeconds(duration));

    console.log(vaxt);
    let seconds = parseInt(vaxt % 60);
    let minutes = parseInt((vaxt / 60) % 60);
    // console.log(seconds);

    console.log(minutes);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    timer.innerHTML = minutes + ":" + seconds;
    vaxt = vaxt - 1;

    console.log(timer.innerHTML);
    if (timer.innerHTML == "0:0") {
    }
    if (timer.innerHTML == "00:00") {
      clearInterval(timerInterval);
      done.style.display = "block";
    }

    let totalResult = document.querySelector(".total-result");
    let restart = document.querySelector(".restart");

    totalResult.textContent = `Nəticə: ${correctCount}`;

    restart.addEventListener("click", () => {
      done.style.display = "none";
      startBox.style.display = "block";
    });
  }, 100);
}
