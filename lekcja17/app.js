function zapodaj(value) {
    document.getElementById('kombinacje_alpejskie').value += value;
}

function wybuchnij() {
    document.getElementById('kombinacje_alpejskie').value = '';
    document.getElementById('wynikmalegoazjaty').value = '';
}

function malyazjata() {
    var displayValue = document.getElementById('kombinacje_alpejskie').value;
    if (displayValue) {
        try {
            var wynikmalegoazjaty = eval(displayValue);
            document.getElementById('wynikmalegoazjaty').value = wynikmalegoazjaty;
        } catch (error) {
            document.getElementById('wynikmalegoazjaty').value = 'Error';
        }
    }
}