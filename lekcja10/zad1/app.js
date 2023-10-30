	var liczba = prompt("Podaj dowolną liczbę rzeczywistą:");
	document.getElementById("header").innerHTML = liczba;

	var abs = Math.abs(liczba);
	var ceil = Math.ceil(liczba);
	var floor = Math.floor(liczba);
	var max = Math.max(liczba, -100);
	var min = Math.min(liczba, -100);
	var pow = Math.pow(liczba, 2);
	var round = Math.round(liczba);
	var sqrt = Math.sqrt(liczba);

	document.write("<p>abs(" + liczba + ") = " + abs + " - zwraca wartość bezwzględną liczby.</p>");
	document.write("<p>ceil(" + liczba + ") = " + ceil + " - zwraca najmniejszą liczbę całkowitą większą lub równą danej liczbie.</p>");
	document.write("<p>floor(" + liczba + ") = " + floor + " - zwraca największą liczbę całkowitą mniejszą lub równą danej liczbie.</p>");
	document.write("<p>max(" + liczba + ", -100) = " + max + " - zwraca większą spośród dwóch liczb.</p>");
	document.write("<p>min(" + liczba + ", -100) = " + min + " - zwraca mniejszą spośród dwóch liczb.</p>");
	document.write("<p>pow(" + liczba + ", 2) = " + pow + " - zwraca wartość podniesioną do kwadratu.</p>");
	document.write("<p>round(" + liczba + ") = " + round + " - zwraca wartość zaokrągloną do najbliższej liczby całkowitej.</p>");
	document.write("<p>sqrt(" + liczba + ") = " + sqrt.toFixed(2) + " - zwraca pierwiastek kwadratowy danej liczby.</p>");

	function refreshPage() {
	    location.reload();
	}

	document.write("<button onclick='refreshPage()'>Odśwież stronę</button>");