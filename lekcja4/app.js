let x = document.getElementById("myForm");
x.addEventListener("focusin", myFocusFunction);
x.addEventListener("focusout", myBlurFunction);

function myFocusFunction() {
  document.getElementById("onfocus").style.backgroundColor = "yellow";
}

function myBlurFunction() {
  document.getElementById("onfocus").style.backgroundColor = "";
}