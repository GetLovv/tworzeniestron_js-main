document.getElementById('promptButton').addEventListener('click', function() {
    var kolor = prompt('Wpisz kolor sufitu:');
    if (kolor !== null && kolor !== '') {
        alert('twoje niebo ma kolor ' + kolor);
    } else {
        alert('Anulowałeś akcję, a okienko zwróciło ' + kolor);
    }
});