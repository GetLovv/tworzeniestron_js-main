//zadanie 1
let x = document.getElementById("myForm");
x.addEventListener("focusin", myFocusFunction);

function myFocusFunction() {
  document.getElementById("onfocus").style.backgroundColor = "yellow";
}

//zadanie 2

let y=document.getElementById("myp");
y.addEventListener("blur", myBlurFunction, true);


function myBlurFunction() {
let text=document.getElementById("myInput").value; 
let wielkie = text.toUpperCase();
document.getElementById("myInput").value=text.toUpperCase();

}

//zadanie 3

let selectColor = document.querySelector('#selectColors')
function changeColor() {
  let color = selectColor.value
  selectColor.style.color = color
}

//zadanie 4

function changeFontSize(element, size) {
  element.style.fontSize = size;
}

//zadania 5

function showImageSource(element) {
 
  alert(element.src);

  return false;
}