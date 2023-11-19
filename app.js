form = document.querySelector('form');

for (i = 1; i <= 100; i++) {
    form.innerHTML += '<input id="' + i + '"style="margin: 10px; box-shadow: 5px 5px lightblue;" placeholder="Element numer '  + i + '" ' + '>';
    if (i % 5 == 0) {
        form.innerHTML += '<br>';
    }
}