const carousel = document.querySelector(".carousel");
const button = document.querySelectorAll(".btn3");
const card = carousel.querySelector(".feedback-card").offsetWidth;

let isDragging = false,
  startX,
  startScrollLeft;

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id === "left" ? -card : card;
  });
});
const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

const dragging = (e) => {
  if (!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousedoup", dragStop);
carousel.addEventListener("mousemove", dragging);
