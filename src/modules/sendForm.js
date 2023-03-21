const sendForm = () => {
  const form = document.querySelector("form");
  const statusBlock = document.createElement("div");
  const loadText = "Загрузка";
  const successText = "Успешно отпрвлено";
  const errorText = "Ошибка";
  const nameInput = form.querySelector("input[name=fio]");
  const phoneInput = form.querySelector("input[name=tel]");

  const validate = (list) => {
    let success = true;
    if (nameInput.value.length < 2) {
      nameInput.style.border = "3px solid red";
      console.log("1");
    } else {
      nameInput.classList.add("success");
      nameInput.style.border = "";
    }
    if (phoneInput.value.length < 6) {
      phoneInput.style.border = "3px solid red";
    } else {
      phoneInput.classList.add("success");
      phoneInput.style.border = "";
    }
    list.forEach((input) => {
      if (!input.classList.contains("success")) {
        success = false;
      }
    });
    return success;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input[type=text]");
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);
    statusBlock.style.color = "black";

    formData.forEach((value, key) => {
      formBody[key] = value;
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          formElements.forEach((input) => {
            input.value = "";
            input.classList.remove("success");
          });
          statusBlock.textContent = successText;
          setTimeout(() => {
            statusBlock.remove();
          }, 3500);
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      statusBlock.textContent = errorText;
    }
  };

  try {
    if (!form) {
      throw new Error("Форма отсутствует!");
    }
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
