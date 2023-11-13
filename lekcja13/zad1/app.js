liczba.addEventListener('change', czokolate)
dzielnik.addEventListener('change', czokolate)

function czokolate() {
    var liczba = document.getElementById('liczba').value;
    var dzielnik = document.getElementById('dzielnik').value;
    var wynik = Math.floor(liczba / dzielnik);
    var reszta = liczba % dzielnik;
    if (dzielnik === 0) {
      document.getElementById('wynik').value = 'Nie można dzielić przez zero';
    } else {
      document.getElementById('wynik').value = wynik;
      document.getElementById('reszta').value = reszta;
    }
  }
