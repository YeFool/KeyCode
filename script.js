document.addEventListener("keydown", (event) => {
  const code = event.code;
  const key = event.key;
  const charCode = event.charCode;

  if (event.keyCode == 116) {
    event.preventDefault();
  }

  document.querySelector(".codeOutput").textContent = code;
  document.querySelector(".keyOutput").textContent = key;
  document.querySelector(".charCodeOutput").textContent = charCode;

  document.getElementById("welcome").remove();

  const show = document.getElementById("show");
  show.classList.remove("hide");
});

