const carousel1 = document.querySelector(".carousel1");
const button1 = document.querySelectorAll(".btn4");
const card1 = carousel1.querySelector(".card1").offsetWidth;

let isDragging1 = false,
  startX1,
  startScrollLeft1;

button1.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel1.scrollLeft += btn.id === "left1" ? -card1 : card1;
  });
});
const dragStart1 = (e) => {
  isDragging1 = true;
  carousel1.classList.add("dragging");
  startX1 = e.pageX;
  startScrollLeft1 = carousel1.scrollLeft;
};

const dragStop1 = () => {
  isDragging1 = false;
  carousel1.classList.remove("dragging");
};

const dragging1 = (e) => {
  if (!isDragging1) return;
  carousel1.scrollLeft = startScrollLeft1 - (e.pageX - startX1);
};

carousel1.addEventListener("mousedown", dragStart1);
carousel1.addEventListener("mousedoup", dragStop1);
carousel1.addEventListener("mousemove", dragging1);
