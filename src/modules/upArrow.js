import { animate } from "./helpers";

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
    const c = document.documentElement.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  };

  arrowBtn.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToTop();
    // animate({
    //   duration: 1100,
    //   timing(timeFraction) {
    //     return timeFraction;
    //   },
    //   draw(progress) {
    //     // console.log(document.documentElement.scrollTop);
    //     // console.log(document.documentElement.scrollHeight);
    //     // // console.log(document.documentElement.scrollTop - 10 * progress);
    //     // document.documentElement.scrollTop = 1000 * progress;
    //   },
    // });
  });
};

export default upArrow;
