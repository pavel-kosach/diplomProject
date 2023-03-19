const upArrow = () => {
  const arrowBtn = document.querySelector(".up");
  const servicesBlock = document.getElementById("services");
  const heightToTop = servicesBlock.offsetTop;

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > heightToTop) {
      arrowBtn.style.display = "block";
    } else {
      arrowBtn.style.display = "none";
    }
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  arrowBtn.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToTop();
  });
};

export default upArrow;
