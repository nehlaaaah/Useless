
const keys = document.querySelectorAll('.key');
const output = document.getElementById('output');

// Prevent mouse clicks from doing anything on the on-screen keyboard
keys.forEach(key => {
  key.addEventListener('click', (event) => {
    event.preventDefault();
  });
});

// Listen for external keyboard presses
window.addEventListener('keydown', (event) => {
  const keyElement = document.querySelector(`.key[data-key="${event.key.toUpperCase()}"]`);
  if (keyElement) {
    keyElement.classList.add('pressed');  // Highlight the pressed key on the on-screen keyboard
    output.value += event.key;            // Add the character to the output input field
  }
});

window.addEventListener('keyup', (event) => {
  const keyElement = document.querySelector(`.key[data-key="${event.key.toUpperCase()}"]`);
  if (keyElement) {
    keyElement.classList.remove('pressed');
  }
});
