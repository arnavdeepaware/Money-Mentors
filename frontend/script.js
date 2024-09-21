// Questions array
const questions = [
    "What lowers your credit score?",
    "What is the main purpose of a credit score?",
    "How often should you check your credit report?",
    "What is considered a good credit score?",
    "What is the impact of missed payments?",
    "What is a credit utilization ratio?",
    "What factors affect credit scores?",
    "What is a hard inquiry?",
    "How can you improve your credit score?",
    "What is the difference between a credit report and a credit score?"
];

// Answers array
const answers = [
    ["A. Location", "B. Short credit history", "C. No college degree", "D. Smoking", 1], // Answer key: 1 (B)
    ["To determine creditworthiness", "To calculate loan interest", "To track spending habits", "To manage investments", 0], // Answer key: 0 (To determine creditworthiness)
    ["Once a year", "Once a month", "Every six months", "Whenever you apply for a loan", 0], // Answer key: 0 (Once a year)
    ["300-579", "580-669", "670-739", "740-850", 2], // Answer key: 2 (670-739)
    ["No impact", "Minor negative impact", "Major negative impact", "Completely ruins credit", 2], // Answer key: 2 (Major negative impact)
    ["The amount of credit used", "The total debt owed", "The length of credit history", "The number of accounts", 0], // Answer key: 0 (The amount of credit used)
    ["Payment history", "Credit mix", "Length of credit history", "All of the above", 3], // Answer key: 3 (All of the above)
    ["An inquiry that affects credit score", "A review of creditworthiness", "A loan application", "A credit report", 0], // Answer key: 0 (An inquiry that affects credit score)
    ["By paying bills on time", "By opening more accounts", "By getting credit cards", "By borrowing more money", 0], // Answer key: 0 (By paying bills on time)
    ["A detailed financial history", "A numerical representation of credit risk", "A list of all loans", "A summary of savings", 1] // Answer key: 1 (A numerical representation of credit risk)
];

let questionsAsked = 0;
let userScore = 0;



// Function to load a question
function loadQuestion() {
    if (questionsAsked < questions.length) {
        document.querySelector('.question').innerText = questions[questionsAsked];
        const choices = document.querySelectorAll('.choice');

        // Load answer options
        choices.forEach((choice, index) => {
            choice.innerText = answers[questionsAsked][index];
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
    const correctIndex = answers[questionsAsked][4]; // Get the correct answer index
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

// Function to end the quiz
function endQuiz() {
    document.querySelector('.question').innerText = `Lesson Finished! Your score: ${userScore} out of ${questions.length}`;
    document.querySelector('.choices').style.display = 'none'; // Hide choices
    document.getElementById('next-btn').style.display = 'none'; // Hide next button
}

// Add event listeners for buttons
document.getElementById('home-btn').onclick = function() {
    window.location.href = '../frontend/homepage/homepage.html'; // Redirect to homepage
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


// Initialize the first question
loadQuestion();
