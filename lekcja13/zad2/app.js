
function allowDrop(jablka) {
    jablka.preventDefault();
}

function drag(jablka) {
    jablka.dataTransfer.setData("text", jablka.target.id);
}

function drop(jablka) {
    jablka.preventDefault();
    var data = jablka.dataTransfer.getData("text");
    if (jablka.target.tagName == 'TD' && jablka.target.childElementCount === 0) {
        jablka.target.appendChild(document.getElementById(data));
}

}