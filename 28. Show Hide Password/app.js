const input = document.querySelector("input");
const eye = document.querySelector("#eye-icon");

eye.addEventListener("click", () => {
  //   if (input.type === "password") {
  //     input.type = "text";
  //   } else {
  //     input.type = "password";
  //   }

  // REFACTOR
  input.type === "password" ? (input.type = "text") : (input.type = "password");
});

eye.addEventListener("click", () => {
    eye.style.color === "rgb(10, 10, 165)" ? eye.style.color = "" : eye.style.color = "rgb(10, 10, 165)";
  });