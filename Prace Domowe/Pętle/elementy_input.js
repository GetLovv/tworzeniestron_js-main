  var form = document.getElementById('Form');

  for (var i = 1; i <= 100; i++) {
    var input = document.createElement('input');
    input.type = 'text';

    var id = (i < 5) ? 'inputson' + i : 'inputek' + i;
    input.id = id;
    input.name = 'inputek' + i;
    input.placeholder = 'Element numer ' + i;
    input.style.margin = '10px';
    input.style.boxShadow = '5px 5px 5px lightblue';
    form.appendChild(input);

    if (i % 5 === 0) {
      form.appendChild(document.createElement('br'));
    }
  }