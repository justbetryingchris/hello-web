const greeting = document.getElementById("greeting");
const waveButton = document.getElementById("wave-button");

const messages = ["Hello, Chris", "Hey there", "Welcome back", "Nice to see you"];

let index = 0;

waveButton.addEventListener("click", () => {
  index = (index + 1) % messages.length;
  greeting.textContent = messages[index];
});
