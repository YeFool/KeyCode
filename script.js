document.addEventListener("keydown", (event) => {

  if (event.keyCode == 116) {
    event.preventDefault();
  }

  document.querySelector(".codeOutput").textContent = event.code;
  document.querySelector(".keyOutput").textContent = event.key;
  document.querySelector(".charCodeOutput").textContent = event.charCode;

  document.getElementById("welcome").remove();

  const show = document.getElementById("show");
  show.classList.remove("hide");
});

