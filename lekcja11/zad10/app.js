function doklejtekst(ranga, buttonId) {
    var Fortinajt = document.getElementById("zdanie");
    Fortinajt.innerHTML = Fortinajt.innerHTML + " " + ranga + ",";
    document.getElementById(buttonId).disabled = true;
  }