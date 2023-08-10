document.addEventListener("DOMContentLoaded", function() {
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const userAnswer = document.getElementById("userAnswer");
    const checkButton = document.getElementById("checkButton");
    const result = document.getElementById("result");

    function generateRandomNumbers() {
        num1.textContent = Math.floor(Math.random() * 10);
        num2.textContent = Math.floor(Math.random() * 10);
    }

    function checkAnswer() {
        const correctAnswer = parseInt(num1.textContent) + parseInt(num2.textContent);
        const userProvidedAnswer = parseInt(userAnswer.value);
        
        if (userProvidedAnswer === correctAnswer) {
            result.textContent = "Correct!";
        } else {
            result.textContent = "Incorrect. Try again.";
        }
        
        generateRandomNumbers();
        userAnswer.value = "";
    }

    generateRandomNumbers();
    checkButton.addEventListener("click", checkAnswer);
});
