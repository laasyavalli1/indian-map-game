const states = document.querySelectorAll(".state");
const question = document.getElementById("question");
const message = document.getElementById("message");
const nextBtn = document.getElementById("next");

let stateNames = [];
let currentState = "";

states.forEach(state => {
    stateNames.push(state.dataset.name);
});

function pickRandomState() {
    currentState = stateNames[Math.floor(Math.random() * stateNames.length)];
    question.innerText = "Click on: " + currentState;
    message.innerText = "";
}

states.forEach(state => {
    state.addEventListener("click", function () {
        if (state.classList.contains("correct")) return;

        if (state.dataset.name === currentState) {
            state.classList.add("correct");
            message.innerText = "Correct!";
        } else {
            state.classList.add("wrong");
            message.innerText = "Wrong! Try again";

            setTimeout(() => {
                state.classList.remove("wrong");
            }, 800);
        }
    });
});

nextBtn.addEventListener("click", pickRandomState);

pickRandomState();

