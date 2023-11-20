document.addEventListener('DOMContentLoaded', (event) => {
    const hoursRange = document.getElementById('hours_range');
    const minutesRange = document.getElementById('minutes_range');
    const hoursOutput = document.getElementById('hours_output');
    const minutesOutput = document.getElementById('minutes_output');
    const angleOutput = document.getElementById('angle');
    const hoursHand = document.getElementById('hour');
    const minuteHand = document.getElementById('minute');

    function updateClockAndAngle() {
        const hours = parseInt(hoursRange.value);
        const minutes = parseInt(minutesRange.value);

        const hoursAngle = (hours * 30) + (minutes * 0.5);
        const minutesAngle = minutes * 6;
        const angle = Math.abs(hoursAngle - minutesAngle);

        hoursHand.style.transform = `rotate(${hoursAngle}deg)`;
        minuteHand.style.transform = `rotate(${minutesAngle}deg)`;

        hoursOutput.textContent = hours;
        minutesOutput.textContent = minutes;
        angleOutput.textContent = `${angle}°`;
    }

    hoursRange.addEventListener('input', updateClockAndAngle);
    minutesRange.addEventListener('input', updateClockAndAngle);

    updateClockAndAngle();
});