// Pre-written questions and answers
const faq = [
    {
        question: "hello",
        answer: "Hi there! How can I assist you today?"
    },
    {
        question: "who are you",
        answer: "I am a chatbot built by Lordson Anson."
    },
    {
        question: "what do you do",
        answer: "I answer questions based on predefined responses."
    },
    {
        question: "what is your portfolio",
        answer: "You can explore my creator's portfolio on this website."
    },
    {
        question: "thank you",
        answer: "You're welcome!"
    }
];

// Send message
function sendMessage() {
    let input = document.getElementById("user-input");
    let userText = input.value.toLowerCase().trim();

    if (userText === "") return;

    displayMessage(userText, "user");

    let response = getBotResponse(userText);

    setTimeout(() => {
        displayMessage(response, "bot");
    }, 500);

    input.value = "";
}

// Display messages
function displayMessage(text, sender) {
    let chatBox = document.getElementById("chat-box");

    let message = document.createElement("div");
    message.classList.add("message", sender);
    message.innerText = text;

    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Logic to match questions
function getBotResponse(userText) {
    for (let i = 0; i < faq.length; i++) {
        if (userText.includes(faq[i].question)) {
            return faq[i].answer;
        }
    }

    return "Sorry, I don't understand that yet.";
}

// Press Enter to send
document.getElementById("user-input")
.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});
