let liczba1 = document.querySelector('#liczba1')
let liczba2 = document.querySelector('#liczba2')
let wynik = document.querySelector('#wynik')
let reszta = document.querySelector('#reszta')
liczba1.addEventListener('change', function(){
    if (liczba2 ===0) {
        wynik.value = 'nie można dzielić przez 0'
    } else {
        wynik.value = math.floor(liczba1.value / liczba2.value)
        reszta.value = liczba1.value % liczb2.value
    }
})
liczba2.addEventListener('change', function(){
    if (liczba2 ===0) {
        wynik.value = 'nie można dzielić przez 0'
    } else {
        wynik.value = math.floor(liczba1.value / liczba2.value)
        reszta.value = liczba1.value % liczb2.value
    }
})