document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".plan__button");
  buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      buttons.forEach(function (btn) {
        btn.classList.remove("active");
      });
      button.classList.add("active");
    });
  });
});
