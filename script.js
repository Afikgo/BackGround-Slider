const body = document.querySelector("body");
const slides = document.querySelectorAll(".slide");
const left = document.getElementById("left");
const right = document.getElementById("right");

let curSlide = 0;

function bodyImage() {
  body.style.backgroundImage = slides[curSlide].style.backgroundImage;
}

bodyImage();

function curPic() {
  slides.forEach((pic) => pic.classList.remove("active"));
  slides[curSlide].classList.add("active");
}
curPic();

right.addEventListener("click", function () {
  curSlide++;
  if (curSlide > slides.length - 1) {
    curSlide = 0;
  }

  bodyImage();
  curPic();
});

left.addEventListener("click", function () {
  curSlide--;

  if (curSlide < 0) {
    curSlide = slides.length - 1;
  }
  curPic();
  bodyImage();
});
