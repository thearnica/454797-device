var link = document.querySelector(".writeus-link");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var nickname = form.querySelector(".field-name");
var mail = form.querySelector(".field-mail");
var message = form.querySelector(".field-message");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  nickname.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!nickname.value || !mail.value || !message.value) {
    evt.preventDefault();
    if (!nickname.value) {
      nickname.classList.add("field-invalid");
    }
    if (!mail.value) {
      mail.classList.add("field-invalid");
    }
    if (!message.value) {
      message.classList.add("field-invalid");
    }
  }
  if (nickname.value) {
    nickname.classList.remove("field-invalid");
  }
  if (mail.value) {
    mail.classList.remove("field-invalid");
  }
  if (message.value) {
    message.classList.remove("field-invalid");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});

var maplink = document.querySelector(".map");
var mappopup = document.querySelector(".modal-map");
var mapclose = mappopup.querySelector(".modal-close");

maplink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mappopup.classList.add("modal-show");
});

mapclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mappopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mappopup.classList.contains("modal-show")) {
      mappopup.classList.remove("modal-show");
    }
  }
});