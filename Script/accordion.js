const accordionItem = document.querySelectorAll(".accordion-item");

accordionItem.forEach((item, index) => {
  let header = item.querySelector(".title-accordion");
  let button = item.querySelector(".acc-button");

  header.addEventListener("click", () => {
    item.classList.toggle("openA");
    let description = item.querySelector(".description");

    if (item.classList.contains("openA")) {
      description.style.height = `${description.scrollHeight}px`;
      button.textContent = "-";
    } else {
      description.style.height = "0px";
      button.textContent = "+";
    }
  });
});
