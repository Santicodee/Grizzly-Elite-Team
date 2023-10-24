const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.classList.add("show1");
    } else {
      entry.target.classList.remove("show");
      entry.target.classList.remove("show1");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
[...hiddenElements].forEach((el) => observer.observe(el));
const hiddenElements1 = document.querySelectorAll(".hidden1");
[...hiddenElements1].forEach((el) => observer.observe(el));
