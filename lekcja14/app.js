var Numbers = document.getElementById("Numbers");

for (var i = 100; i <= 999; i++) {
    if (getDigitSum(i) === 10) {

        var numerson = document.createElement("span");
        numerson.textContent = i + " ";
        numerson.className = "dziesiatki";
        Numbers.appendChild(numerson);
    } else {
 
        var numerson = document.createElement("span");
        numerson.textContent = i + " ";
        Numbers.appendChild(numerson);
    }
}


function getDigitSum(numer) {
    return numer.toString().split('').reduce(function (maslo, cyfry) {
        return maslo + parseInt(cyfry);
    }, 0);
}