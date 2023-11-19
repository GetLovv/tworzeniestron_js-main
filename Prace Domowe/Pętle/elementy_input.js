  var form = document.getElementById('myForm');

  for (var i = 1; i <= 100; i++) {
    var input = document.createElement('input');
    input.type = 'text';

    var id = (i < 10) ? 'input_0' + i : 'input_' + i;
    input.id = id;
    input.name = 'input_' + i;
    input.placeholder = 'Element numer ' + i;
    input.style.margin = '10px';
    input.style.boxShadow = '5px 5px 5px lightblue';
    form.appendChild(input);

    if (i % 5 === 0) {
      form.appendChild(document.createElement('br'));
    }
  }