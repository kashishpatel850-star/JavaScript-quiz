const quizData = [
    {
        question: "Which is the largest continent in the world?",
        options: ["Asia", "Africa", "Europe", "Australia"],
        answer: "Asia"
    },
    {
        question: "Who wrote the national anthem of India?",
        options: ["Mahatma Gandhi", "Bankim Chandra Chatterjee", "Rabindranath Tagore", "Subhash Chandra Bose"],
        answer: "Rabindranath Tagore"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Mercury"],
        answer: "Mars"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yen", "Dollar", "Yuan", "Rupee"],
        answer: "Yen"
    },
    {
        question: "Which is the longest river in India?",
        options: ["Ganga", "Yamuna", "Godavari", "Brahmaputra"],
        answer: "Ganga"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const submitBtn = document.getElementById("submitBtn");
const resultEl = document.getElementById("result");

function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.innerText = q.question;

    optionsEl.innerHTML = "";
    q.options.forEach(option => {
        const div = document.createElement("div");
        div.innerHTML = `<input type="radio" name="option" value="${option}"> ${option}`;
        optionsEl.appendChild(div);
    });
}

submitBtn.addEventListener("click", () => {
    const selected = document.querySelector('input[name="option"]:checked');
    if(selected) {
        if(selected.value === quizData[currentQuestion].answer) {
            score++;
        }
        currentQuestion++;
        if(currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            questionEl.style.display = "none";
            optionsEl.style.display = "none";
            submitBtn.style.display = "none";
            resultEl.innerText = `Quiz Completed! Your Score: ${score} / ${quizData.length}`;
        }
    } else {
        alert("Please select an answer!");
    }
});

loadQuestion();
