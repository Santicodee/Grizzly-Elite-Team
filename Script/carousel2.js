const carousel2 = document.querySelector(".carousel2");
const button2 = document.querySelectorAll(".btn7");
const card2 = carousel2.querySelector(".card2").offsetWidth;

let isDragging2 = false,
  startX2,
  startScrollLeft2;

button2.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel2.scrollLeft += btn.id === "left2" ? -card2 : card2;
  });
});
const dragStart2 = (e) => {
  isDragging2 = true;
  carousel2.classList.add("dragging");
  startX2 = e.pageX;
  startScrollLeft2 = carousel2.scrollLeft;
};

const dragStop2 = () => {
  isDragging2 = false;
  carousel2.classList.remove("dragging");
};

const dragging2 = (e) => {
  if (!isDragging2) return;
  carousel2.scrollLeft = startScrollLeft2 - (e.pageX - startX2);
};

carousel2.addEventListener("mousedown", dragStart2);
carousel2.addEventListener("mousedoup", dragStop2);
carousel2.addEventListener("mousemove", dragging2);
