function increment() {
  let count = parseInt(document.getElementById("counter").innerText);
  document.getElementById("counter").innerText = count + 1;
}

function decrement() {
  let count = parseInt(document.getElementById("counter").innerText);
  document.getElementById("counter").innerText = count - 1;
}

document.getElementById("increment").addEventListener("click", increment);
document.getElementById("decrement").addEventListener("click", decrement);
