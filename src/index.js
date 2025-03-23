document.addEventListener("DOMContentLoaded", function () {
    const userInput = document.getElementById("user-input");
    const startBtn = document.getElementById("start-btn");
    const counterValue = document.getElementById("counter-value");

    startBtn.addEventListener("click", function () {
        let targetValue = parseInt(userInput.value);

        if (isNaN(targetValue) || targetValue < 1 || targetValue > 9999) {
            alert("Please enter a valid number between 1 and 9999.");
            return;
        }

        counterValue.textContent = "0";  // Reset counter to 0
        let count = 1;

        let interval = setInterval(() => {
            counterValue.textContent = count;
            if (count >= targetValue) {
                clearInterval(interval);
            }
            count++;
        }, 500); // Adjust speed by changing the interval time (500ms = half a second)
    });
});
