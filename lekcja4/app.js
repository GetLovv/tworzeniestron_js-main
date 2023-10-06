//zadanie 1
let x = document.getElementById("myForm");
x.addEventListener("focusin", myFocusFunction);

function myFocusFunction() {
  document.getElementById("onfocus").style.backgroundColor = "yellow";
}

//zadanie 2