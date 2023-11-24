var czyfry =  document.getElementById("czyfry");
for (let i = 101; i < 1000; i++) {
    let str = i.toString();
    if (str[0] === str[2]) {
        console.log(str);
        czyfry.innerText = str
    }
}

    
