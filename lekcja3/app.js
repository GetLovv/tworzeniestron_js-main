//zadanie 1
document.querySelector("#zad1").addEventListener("click", function(){
    document.querySelector("#zadanie1 h6").innerHTML = "<i>Świetnie!</i>"
})

//zadanie 2
document.querySelector("#zad2").addEventListener("click", function (){
    document.querySelector("#zadanie2 h5").innerText = "<i>Świetnie</i>"
})

//zadanie 3
document.querySelector("#zad3").addEventListener("click", function(){
    document.querySelector("#zadanie3 p strong").style.border = "10px dotted green"
})

//zadanie 4
document.querySelector("#zad4").addEventListener("click", function(){
    alert(document.querySelector("#zadanie4 p").getAttribute("title"))
})

//zadanie 5
document.querySelector("#zad5").addEventListener("click", function (){
    document.querySelector("#zadanie5 p").setAttribute("dir", "rtl")
})

//zadanie 6
document.querySelector("#zad6").addEventListener("click", function (){
    if(document.querySelector("#zadanie6 input").hasAttribute("disabled")){
        document.querySelector("#zad6").innerText = "Można edytować"
    } else {
        document.querySelector("#zad6").innerText = "Edycja jest teraz niemożliwa"
    }
    document.querySelector("#zadanie6 input").toggleAttribute("disabled")
})

//zadanie 7
document.querySelector("#zad7").addEventListener("click", function() {
    document.querySelector("#zadanie7 p").removeAttribute("style")
    document.querySelector("#zadanie7 a").removeAttribute("href")
})

//zadanie 8
document.querySelector("#zad8").addEventListener("click", function(){
    let headerData = document.querySelector("#zadanie8 h3")
    console.log(headerData.attributes)
    console.log(headerData.dataset)
    for (let i = 0; i <= headerData.attributes.length; i++) {
        document.querySelector("#dataset-attributes-container").innerHTML +=
            "<p>Atrybut: <b>"+ headerData.attributes[i] +"</b> ma wartość: "+ headerData.dataset[i] + "</p>"
    }
    // for(const atr in headerData.attributes )
    // {
    //     console.log(atr.nodeName);
    //     console.log(atr.nodeValue);
    // }
})

//zadanie 9
document.querySelector("#zad9").addEventListener("click", function(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16).toUpperCase();
    let bgColor =  "#" + randomColor
    document.querySelector("#zadanie9 textarea").innerText = bgColor
    document.querySelector("#zadanie9 textarea").style.backgroundColor = bgColor
})

