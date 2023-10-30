function drawRectangle() {
    var width = document.getElementById("width").value;
    var height = document.getElementById("height").value;
    var color = document.getElementById("color").value;

    var rectangle = document.getElementById("rectangle");
    rectangle.style.width = width + "px";
    rectangle.style.height = height + "px";
    rectangle.style.backgroundColor = color;

    var info = document.getElementById("info");
    info.innerHTML = "Obwód: " + (2*(parseInt(width) + parseInt(height))) + ", Pole: " + (width * height);
}