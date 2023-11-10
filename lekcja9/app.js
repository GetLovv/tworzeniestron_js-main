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