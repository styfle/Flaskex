function message(status) {
  const feedback = document.querySelector("#feedback");
  feedback.textContent = status;
  feedback.style.opacity = 1;
  setTimeout(() => {
    feedback.style.opacity = 0;
  }, 3000);
}

function login() {
  $.post({
    type: "POST",
    url: "/",
    data: {
      "username": document.querySelector("#login-user").value,
      "password": document.querySelector("#login-pass").value
	},
    success(response){
      const { status } = JSON.parse(response);
      if (status === "Login successful") { location.reload(); }
      else { document.querySelector(".login-input").style.borderColor = '#E14448'; }
    }
  });
}

function signup() {
  $.post({
    type: "POST",
    url: "/signup",
    data: {
      "username": document.querySelector("#signup-user").value,
      "password": document.querySelector("#signup-pass").value,
      "email": document.querySelector("#signup-mail").value
    },
    success(response) {
      const { status } = JSON.parse(response);
      if (status === "Signup successful") { location.reload(); }
      else { message(status); }
    }
  });
}

function save() {
  $.post({
    type: "POST",
    url: "/settings",
    data: {
      "username": document.querySelector("#settings-user").value,
      "password": document.querySelector("#settings-pass").value,
      "email": document.querySelector("#settings-mail").value
    },
    success(response) {
      const { status } = JSON.parse(response);
      message(status);
    }
  });
}

const loginButton = document.querySelector('#login-button');
const signupButton = document.querySelector('#signup-button');
const saveButton = document.querySelector('#save');

if (loginButton) {
	loginButton.addEventListener('click', login);
}
if (signupButton) {
  signupButton.addEventListener('click', signup);
}
if (saveButton) {
  saveButton.addEventListener('click', save);
}

//$(document).keypress((e) => {if(e.which === 13) {login();}});

const burger = document.querySelector("#navbar-burger-id");
const menu = document.querySelector("#navbar-menu-id");

// Open or Close mobile & tablet menu
// https://github.com/jgthms/bulma/issues/856
burger.addEventListener('click', () => {
  burger.classList.toggle('is-active');
  menu.classList.toggle('is-active');
});
