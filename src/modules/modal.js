const modal = () => {
  const callbackModal = document.querySelector(".modal-callback");
  const modalOverlay = document.querySelector(".modal-overlay");
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

  document.addEventListener("click", (e) => {
    if (
      e.target.closest(".button-services") ||
      e.target.closest(".callback-btn") ||
      e.target.closest(".fancyboxModal")
    ) {
      e.preventDefault();
      callbackModal.style.display = "block";
      modalOverlay.style.display = "block";
    } else if (e.target.closest(".modal-close") || e.target.closest(".modal-overlay")) {
      callbackModal.style.display = "none";
      modalOverlay.style.display = "none";
    }
  });
};
export default modal;
