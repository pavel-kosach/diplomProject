const modal = () => {
  const callbackModal = document.querySelector(".modal-callback");
  const callbackBtn = document.querySelectorAll(".callback-btn");
  const buttonServices = document.querySelector(".button-services");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalClose = document.querySelector(".modal-close");
  const servicesElems = document.querySelector(".services-elements");
  const telInput = document.querySelector(".tel");
  const nameInput = document.querySelector("input[name='fio']");

  // В поля ввода имени позволить ввод только кириллицы в любом регистре и пробел.
  nameInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^а-яА-я\s]/gi, "");
  });
  // В поле ввода с телефоном позволить ввод только цифр, круглых скобок, плюс
  telInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^0-9()+]/g, "");
  });

  // servicesElems.addEventListener("click", (e) => {
  //   console.log(e.target);
  //   if (e.target.closest(".element")) {
  //     callbackModal.style.display = "block";
  //     modalOverlay.style.display = "block";
  //   }
  // });

  document.addEventListener("click", (e) => {
    if (
      e.target.closest(".button-services") ||
      e.target.closest(".callback-btn") ||
      e.target.closest(".fancyboxModal")
    ) {
      e.preventDefault();
      callbackModal.style.display = "block";
      modalOverlay.style.display = "block";
    }
  });

  // callbackBtn.forEach((btn) => {
  //   btn.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     callbackModal.style.display = "block";
  //     modalOverlay.style.display = "block";
  //   });
  // });
  // buttonServices.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   callbackModal.style.display = "block";
  //   modalOverlay.style.display = "block";
  // });
  modalClose.addEventListener("click", (e) => {
    e.preventDefault();
    callbackModal.style.display = "none";
    modalOverlay.style.display = "none";
  });
  modalOverlay.addEventListener("click", (e) => {
    e.preventDefault();
    callbackModal.style.display = "none";
    modalOverlay.style.display = "none";
  });
};
export default modal;
