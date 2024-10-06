// Define levels, study points, and questions
const levels = [
    {
        title: "Level 2:Exoplanets classification.",
        studyPoints: [
           "Exoplanets can be classified as terrestrial (rocky) or gas giants.",
            "Super-Earths are larger than Earth but smaller than Neptune.",
            "Hot Jupiters are gas giants that orbit very close to their stars",
            "Ice giants like Neptune and Uranus have icy compositions.",
            "Some exoplanets have been discovered in the habitable zone of their stars."
        ],
        questions: [
            {
              question: "What is a terrestrial exoplanet?",
              options: ["A gas giant", "A rocky planet", "An icy planet", "A planet with rings"],
              answer: 1
            },
            {
              question: "What is a Super-Earth?",
              options: ["A planet smaller than Earth", "A planet larger than Earth but smaller than Neptune", "A planet the same size as Earth", "A gas giant"],
              answer: 1
            },
            {
              question: "What characterizes Hot Jupiters?",
              options: ["They are icy.", "They orbit very far from their stars.", "They orbit very close to their stars.", "They are rocky planets."],
              answer: 2
            },
            {
              question: "Ice giants like Neptune and Uranus are primarily composed of:",
              options: ["Metal", "Rock", "Ice", "Gas"],
              answer: 2
            },
            {
              question: "What is the habitable zone?",
              options: ["A region too close to a star", "A zone where life cannot exist", "A region around a star where conditions may be right for life", "A zone of gas giants"],
              answer: 2
            }
          ]
          
    }
];

// Initialize variables
let currentLevel = 0;
let currentQuestion = 0;
let score = 0;

// Start game button event listener
document.getElementById("start-button").addEventListener("click", startGame);

// Start game function
function startGame() {
    document.getElementById("start-button").style.display = "none";
    document.getElementById("level-container").style.display = "block";
    showStudyMode();
}

// Show study mode function
function showStudyMode() {
    document.getElementById("study-mode").style.display = "block";
    document.getElementById("quiz-mode").style.display = "none";
    document.getElementById("level-title").innerHTML = levels[currentLevel].title;
    const studyPoints = document.getElementById("study-points");
    studyPoints.innerHTML = "";
    levels[currentLevel].studyPoints.forEach(point => {
        const li = document.createElement("li");
        li.innerHTML = point;
        studyPoints.appendChild(li);
    });
    document.getElementById("quiz-button").addEventListener("click", showQuizMode);
}

// Show quiz mode function
function showQuizMode() {
    document.getElementById("study-mode").style.display = "none";
    document.getElementById("quiz-mode").style.display = "block";
    showQuestion();
}

// Show question function
function showQuestion() {
    const question = document.getElementById("question");
    const options = document.getElementById("options");
    question.innerHTML = levels[currentLevel].questions[currentQuestion].question;
    options.innerHTML = "";
    levels[currentLevel].questions[currentQuestion].options.forEach((option, index) => {
        const li = document.createElement("li");
        li.innerHTML = option;
        li.addEventListener("click", () => {
            checkAnswer(index);
        });
        options.appendChild(li);
    });
}

// Check answer function
function checkAnswer(answer) {
    if (answer === levels[currentLevel].questions[currentQuestion].answer) {
        score++;
        document.getElementById("result").innerHTML = "Correct!";
    } else {
        document.getElementById("result").innerHTML = "Incorrect.";
    }
    currentQuestion++;
    if (currentQuestion >= levels[currentLevel].questions.length) {
        endLevel();
    } else {
        showQuestion();
    }
}

// End level function
function endLevel() {
    document.getElementById("quiz-mode").style.display = "none";
    document.getElementById("end-button-container").style.display = "block";
    document.getElementById("score-container").style.display = "block";
    document.getElementById("score").innerHTML = `Level ${currentLevel + 1} Score: ${score}/${levels[currentLevel].questions.length}`;
    document.getElementById("end-button").addEventListener("click", nextLevel);
}

// Next level function
function nextLevel() {
    currentLevel++;
    currentQuestion = 0;
    score = 0;
    if (currentLevel >= levels.length) {
        alert("Congratulations, you've completed all levels!");
    } else {
        document.getElementById("end-button-container").style.display = "none";
        document.getElementById("score-container").style.display = "none";
        showStudyMode();
    }
}
