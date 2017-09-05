var index = document.querySelector(".index-wrapper");
var link = document.querySelector(".writeus-link");
var feedbackpopup = document.querySelector(".modal-feedback");
var close = feedbackpopup.querySelector(".modal-close");
var form = feedbackpopup.querySelector("form");
var nickname = form.querySelector(".field-name");
var mail = form.querySelector(".field-mail");
var message = form.querySelector(".field-message");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackpopup.classList.add("modal-show");
  index.classList.add("modal-open");
  nickname.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackpopup.classList.remove("modal-show");
  index.classList.remove("modal-open");
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
    var popup = document.querySelector(".modal-show");
    if (popup) {
      popup.classList.remove("modal-show");
      index.classList.remove("modal-open");
    }
  }
});

var maplink = document.querySelector(".map");
var mappopup = document.querySelector(".modal-map");
var mapclose = mappopup.querySelector(".modal-close");

maplink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mappopup.classList.add("modal-show");
  index.classList.add("modal-open");
});

mapclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mappopup.classList.remove("modal-show");
  index.classList.remove("modal-open");
});

