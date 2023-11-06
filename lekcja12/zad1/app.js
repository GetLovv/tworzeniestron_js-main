function wygenerujLiczbe() {
    var Losowa = Math.floor(Math.random() * 30) + 1;
    document.getElementById("liczbaLosowa").innerHTML = Losowa;
    document.getElementById("liczbaLosowa").style.color = "darkorchid";

    if (Losowa >= 20) {
        document.getElementById("wiekszaOdDwudziestu").innerHTML = "Wylosowana liczba jest większa lub równa 20.";
        document.getElementById("wiekszaOdDwudziestu").style.display = "block"
        document.getElementById("wiekszaOdDwudziestu").style.color = "magenta";
    } else {
        document.getElementById("wiekszaOdDwudziestu").style.display = "none"
    }

    if (Losowa % 2 == 0) {
        document.getElementById("parzystaCzyNieparzysta").innerHTML = "Wylosowana liczba jest parzysta.";
    } else {
        document.getElementById("parzystaCzyNieparzysta").innerHTML = "Wylosowana liczba jest nieparzysta.";
    }
    document.getElementById("parzystaCzyNieparzysta").style.color = "navy";

    if (Losowa <= 10) {
        document.getElementById("dziesiatki").innerHTML = "Pierwsza dziesiątka";
    } else if (Losowa <= 20) {
        document.getElementById("dziesiatki").innerHTML = "Druga dziesiątka";
    } else {
        document.getElementById("dziesiatki").innerHTML = "Trzecia dziesiątka";
    }
    document.getElementById("dziesiatki").style.color = "deeppink";
}
