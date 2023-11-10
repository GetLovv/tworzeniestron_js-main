var month = Math.floor(Math.random() * 15) + 1;

document.write('<h1>' + month + '</h1>');
const refreshButton = document.createElement("button");
refreshButton.innerHTML = "Odśwież stronę";
refreshButton.onclick = function() {
  location.reload();
};
document.body.appendChild(refreshButton);

switch(month) {
    case 1:
    case 2:
    case 3:
        document.write('<h3>I kwartał</h3>');
        break;
    case 4:
    case 5:
    case 6:
        document.write('<h3>II kwartał</h3>');
        break;
    case 7:
    case 8:
    case 9:
        document.write('<h3>III kwartał</h3>');
        break;
    case 10:
    case 11:
    case 12:
        document.write('<h3>IV kwartał</h3>');
        break;
    default:
        document.write('<h3>Błędny numer miesiąca</h3>');
}
