const faq = () => {
  const accordeon = document.querySelector(".accordeon");
  const accorderonElems = accordeon.querySelectorAll(".element");
  const elemTitle = accordeon.querySelectorAll(".title");

  accordeon.addEventListener("click", (e) => {
    if (e.target.closest(".element")) {
      const tab = e.target.closest(".element");
      if (tab.classList.contains("active")) {
        tab.classList.remove("active");
      } else {
        tab.classList.add("active");
      }
    }
  });
};

export default faq;

// tabPanel.addEventListener("click", (e) => {
//   if (e.target.closest(".service-header-tab")) {
//     const tabBtn = e.target.closest(".service-header-tab");
//     tabs.forEach((tab, index) => {
//       if (tab === tabBtn) {
//         tab.classList.add("active");
//         tabContent[index].classList.remove("d-none");
//       } else {
//         tab.classList.remove("active");
//         tabContent[index].classList.add("d-none");
//       }
//     });
//   }
// });
