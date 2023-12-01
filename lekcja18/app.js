const zwierzyniec = ['Szczerbatek', 'Biała Furia', 'Wichura', 'Sztukamięs', 'Czaszkochrup', 'Chmuroskok.'];
let listonosz = document.getElementById("listonosz");

function cyferkowo() {
    listonosz.innerHTML = "";
    for (let i = 0; i < zwierzyniec.length; i++) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(zwierzyniec[i]));
        li.type = "1";
        listonosz.appendChild(li);
    }
}

function abecadlo() {
    listonosz.innerHTML = "";
    let i = 1;
    for (let zwierzontko of zwierzyniec) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(zwierzontko));
        li.type = "a";
        listonosz.appendChild(li);
    }
}

function ImperiumRzymskie() {
    listonosz.innerHTML = "";
    zwierzyniec.forEach(function(zwierzontko, index) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(zwierzontko));
        li.type = "I";
        listonosz.appendChild(li);
    });
}