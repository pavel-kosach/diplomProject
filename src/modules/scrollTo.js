const scrollTo = () => {
  const topMenu = document.querySelector(".top-menu");
  const menuLinks = topMenu.querySelectorAll("a[href^='#']");

  for (let smoothLink of menuLinks) {
    smoothLink.addEventListener("click", function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute("href");

      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
};

export default scrollTo;
