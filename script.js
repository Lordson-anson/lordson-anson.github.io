const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;

    // Close all other sections
    document.querySelectorAll(".content").forEach((item) => {
      if (item !== content) {
        item.style.display = "none";
      }
    });

    // Toggle current section
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});

// FAQ DATA
const faq = [
  { question: "hello", answer: "Hi there! How can I help you?" },
  { question: "who are you", answer: "I am Lordson's chatbot assistant." },
  { question: "what do you do", answer: "I answer predefined questions." },
  { question: "skills", answer: "Sales, AI, Scriptwriting, Web Development, Teaching." },
  { question: "contact", answer: "Scroll down to the contact section to reach me." }
];

// SEND MESSAGE
function sendMessage() {
  let input = document.getElementById("user-input");
  let text = input.value.toLowerCase().trim();

  if (!text) return;

  displayMessage(text, "user");

  let response = getResponse(text);

  setTimeout(() => {
    displayMessage(response, "bot");
  }, 400);

  input.value = "";
}

// DISPLAY MESSAGE
function displayMessage(text, sender) {
  let chatBox = document.getElementById("chat-box");

  let msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.innerText = text;

  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// RESPONSE LOGIC
function getResponse(text) {
  for (let i = 0; i < faq.length; i++) {
    if (text.includes(faq[i].question)) {
      return faq[i].answer;
    }
  }
  return "I don't have an answer for that yet.";
}

// ENTER KEY SUPPORT
document.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
