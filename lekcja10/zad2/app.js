var x = parseInt(prompt("Podaj dolny zakres", "1"));
var y = parseInt(prompt("Podaj górny zakres", "100"));
var numbers = [];
for (var i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * (y - x + 1)) + x);
}
var minNum = Math.min(...numbers);
var maxNum = Math.max(...numbers);

var table = document.getElementById("myTable");
var row1 = table.insertRow(0);
var cell1 = row1.insertCell(0);
cell1.colSpan = "10";
cell1.innerHTML = "Dziesięć losowych liczb całkowitych z przedziału od " + x + " do " + y;

var row2 = table.insertRow(1);
for (var i = 0; i < 10; i++) {
    var cell2 = row2.insertCell(i);
    cell2.innerHTML = numbers[i];
}

var row3 = table.insertRow(2);
var cell3 = row3.insertCell(0);
cell3.colSpan = "10";
cell3.innerHTML = "Najmniejsza liczba: " + minNum;

var row4 = table.insertRow(3);
var cell4 = row4.insertCell(0);
cell4.colSpan = "10";
cell4.innerHTML = "Największa liczba: " + maxNum;