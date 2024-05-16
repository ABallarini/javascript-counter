function increment() {
  let count = parseInt(document.getElementById("counter").innerText);
  document.getElementById("counter").innerText = count + 1;
}

function decrement() {
  let count = parseInt(document.getElementById("counter").innerText);
  if (count === 0){
    alert("The counter is at zero");
  }else{
    document.getElementById("counter").innerText = count - 1;
  }
  
}

document.addEventListener("DOMContentLoaded", function() {
  
  document.getElementById("increment").onclick = increment;
  document.getElementById("decrement").onclick = decrement;
});
