let questions;

async function loadQuestions() {
    try {
        const response = await fetch('https://qiming86.github.io/questions.json');
        questions = await response.json();
    } catch (error) {
        console.error('Error loading questions:', error);
        document.getElementById('error').textContent = 'Error loading questions. Please try again later.'; // Display error message
    }
}

function loadRandomQuestion() {
    if (Array.isArray(questions) && questions.length > 0) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        const randomQuestion = questions[randomIndex];
        document.getElementById('question').textContent = randomQuestion.question;
        document.getElementById('image').src = 'https://qiming86.github.io/' + randomQuestion.imageURL;
    } else {
        console.error('No questions loaded or invalid data format.');
        document.getElementById('error').textContent = 'No questions available. Please try again later.'; // Display error message
    }
}

function checkGuess(isCorrect) {
    if (Array.isArray(questions) && questions.length > 0) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        const randomQuestion = questions[randomIndex];

        if (isCorrect === (randomQuestion.question.toLowerCase().includes('yes'))) {
            document.getElementById('result').textContent = 'Correct!';
        } else {
            document.getElementById('result').textContent = 'Incorrect!';
        }

        loadRandomQuestion();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadQuestions();
    loadRandomQuestion();
});
