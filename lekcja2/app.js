// zadanie 1
document.querySelector("header").style.backgroundColor = "yellow"

//zadanie 2
var text = document.querySelector("header h1")
text.innerHTML = "tekst"
text.style.fontFamily = "Arial Black"

//zadanie 3
var sections = document.querySelectorAll("section")
for (const el of sections) {
    el.style.border = "2px solid brown"
}

//zadanie 4
document.querySelector(".main_column h1").innerText = "Specjalność szefa: "

//zadanie 5
const newParagraph = document.createElement("p")
document.querySelector(".main_column").appendChild(newParagraph)
document.querySelector(".main_column p").innerText = "Kebab na frytkach -_-"

//zadanie 6
const newDiv = document.createElement("div")
const pInDiv = document.createElement("p")
document.querySelector("footer").appendChild(newDiv)
document.querySelector("footer div").style.backgroundColor = "pink"
document.querySelector("footer div").appendChild(pInDiv)
document.querySelector("footer div p").innerText = "&copy"
document.querySelector("footer div p").style.textAlign = "center"

//zadanie 7
let cols = document.querySelectorAll(".side_column h1")
cols[1].remove()

//zadanie 8
let header = document.querySelector("header")
const headerParagraph = document.createElement("p")
header.appendChild(headerParagraph)
header.appendChild(headerParagraph.cloneNode(true))

let cos = document.querySelectorAll("header p")
cos[0].innerHTML = "<i>Pochylony tekst</i>"
cos[1].innerText = "<i>Pochylony tekst</i>"

//zadanie 9
const sec = document.createElement("section")
document.querySelector("body").appendChild(sec)

const lastSection = document.querySelectorAll("section")
lastSection[3].style.border = "2px dotted blue"
lastSection[3].style.padding = "10px 20px"
lastSection[3].innerText = "Zderzak"
