const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: .8, // Trigger the effect when the element is 1.5 times in the viewport while scrolling down
  }
);

const hiddenElements = document.querySelectorAll(".hidden");
[...hiddenElements].forEach((el) => observer.observe(el));


