<<<<<<< HEAD
let lightbulb = document.querySelector("#bulb")

if (document.querySelector("#on").checked === true || document.querySelector("#isOn").checked === true ||  document.querySelector("#isOn").checked === true) {
    lightbulb.src = "./imgs/żarufka2.jpg"
} else {
    lightbulb.src = "./imgs/żarufka.jpg"
}

document.querySelector("#turnOn").addEventListener('click', function (){
    lightbulb.src = "./imgs/żarufka2.jpg"
    document.querySelector("#on").checked = true
    document.querySelector("#off").checked = false
    document.querySelector("#isOn").checked = true
})

document.querySelector("#turnOff").addEventListener('click', function (){
    lightbulb.src = "./imgs/żarufka.jpg"
    document.querySelector("#off").checked = true
    document.querySelector("#on").checked = false
    document.querySelector("#isOn").checked = false
})

document.querySelector("#on").addEventListener('click', function(){
    lightbulb.src = "./imgs/żarufka2.jpg"
    document.querySelector("#off").checked = false
    document.querySelector("#isOn").checked = true
})

document.querySelector("#off").addEventListener('click', function(){
    lightbulb.src = "./imgs/żarufka.jpg"
    document.querySelector("#on").checked = false
    document.querySelector("#isOn").checked = false
})

document.querySelector("#isOn").addEventListener('click', function(){
    if(document.querySelector("#isOn").checked === true) {
        lightbulb.src = "./imgs/żarufka2.jpg"
        document.querySelector("#on").checked = true
        document.querySelector("#off").checked = false
    } else {
        lightbulb.src = "./imgs/żarufka.jpg"
        document.querySelector("#on").checked = false
        document.querySelector("#off").checked = true
    }
})
=======
const checkboxes = document.querySelectorAll('.checkbox');
const checkedPairs = new Map();

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            if (checkedPairs.has(checkbox.value)) {
                const otherCheckbox = checkedPairs.get(checkbox.value);
                otherCheckbox.checked = false;
            }
    
            checkedPairs.set(checkbox.value, checkbox);
        } else {
            checkedPairs.delete(checkbox.value);
        }

        if (checkedPairs.size > 2) {
            const firstUnchecked = checkedPairs.entries().next().value[1];
            firstUnchecked.checked = false;
            checkedPairs.delete(firstUnchecked.value);
        }
    });
});
>>>>>>> 947940da6bda94571126d82cfade112df25da92f
