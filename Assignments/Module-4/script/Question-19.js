const boxContainer = document.querySelector(".container");
const boxes = document.querySelectorAll(".box");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

let currentSlide = parseInt(Math.ceil(boxes.length / 2)) - 1;
console.log(currentSlide);

function showSlide(index) {
  if (index < 0) {
    index = boxes.length - 1;
  } else if (index >= boxes.length + 1) {
    index = 0;
  }

  boxes.forEach(function (box, currentSlide) {
    boxContainer.style.transform = `translateX(${(currentSlide - index) * 18}%)`;
    box.style.height = index === currentSlide + 2 ? `350px` : `250px`;
  });
  currentSlide = index;
  console.log(currentSlide - 1);
}

prevBtn.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

nextBtn.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});
