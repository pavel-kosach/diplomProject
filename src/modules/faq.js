const faq = () => {
  const accordeon = document.querySelector(".accordeon");
  const accorderonElems = accordeon.querySelectorAll(".element");

  accordeon.addEventListener("click", (e) => {
    if (e.target.closest(".title")) {
      const tab = e.target.closest(".element");
      const elementContent = tab.querySelector(".element-content");

      if (tab.classList.contains("active")) {
        tab.classList.remove("active");
        elementContent.style.display = "none";
      } else if (!tab.classList.contains("active")) {
        accorderonElems.forEach((element) => {
          element.classList.remove("active");
          element.querySelector(".element-content").style.display = "none";
        });
        tab.classList.add("active");
        elementContent.style.display = "block";
      }
    }
  });
};

export default faq;
