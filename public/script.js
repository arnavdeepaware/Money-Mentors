let questionsAsked = 0;
let userScore = 0;
let questions = [];
let options = [];
let answerKey = [];
let explanations = [];

// Fetch function to load data from local JSON file
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Access the arrays from the JSON data
        questions = data.questions; 
        options = data.options;
        answerKey = data.answer_key;
        explanations = data.explanations;

        // Initialize the first question once data is loaded
        loadQuestion();
    })
    .catch(error => console.error('Error fetching the JSON data:', error));

// Function to load a question
function loadQuestion() {
    if (questionsAsked < questions.length) {
        document.querySelector('.question').innerText = questions[questionsAsked];
        const choices = document.querySelectorAll('.choice');

        // Load answer options
        choices.forEach((choice, index) => {
            choice.innerText = options[questionsAsked][index];
            choice.onclick = () => checkAnswer(index);
        });

        // Update progress bar
        const progressPercentage = ((questionsAsked + 1) / questions.length) * 100;
        document.querySelector('.progress').style.width = progressPercentage + '%';
    } else {
        endQuiz();
    }
}

function checkAnswer(selectedIndex) {
    const correctIndex = answerKey[questionsAsked]; // Get the correct answer index from the JSON
    const choices = document.querySelectorAll('.choice');

    // Reset previous styles
    choices.forEach(choice => {
        choice.classList.remove('correct', 'wrong');
    });

    // Apply the feedback style
    if (selectedIndex === correctIndex) {
        choices[selectedIndex].classList.add('correct');
        userScore++;
    } else {
        choices[selectedIndex].classList.add('wrong');
        choices[correctIndex].classList.add('correct'); // Highlight the correct answer
    }
}

function endQuiz() {
    document.querySelector('.question').innerText = `Lesson Finished! Your score: ${userScore} out of ${questions.length}`;
    document.querySelector('.choices').style.display = 'none'; // Hide choices
    document.getElementById('next-btn').style.display = 'none'; // Hide next button
}

// Add event listeners for buttons
document.getElementById('home-btn').onclick = function() {
    window.location.href = 'index.html'; // Redirect to homepage
};

document.getElementById('next-btn').onclick = function() {
    // Reset styles for all choices
    const choices = document.querySelectorAll('.choice');
    choices.forEach(choice => {
        choice.classList.remove('correct', 'wrong'); // Remove feedback styles
    });

    questionsAsked++;
    if (questionsAsked < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
};
