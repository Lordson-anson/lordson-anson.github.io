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

// // ===== CHATBOT (FIXED VERSION) =====

// FAQ DATA
const faq = [
  { question: "hello", answer: "Hi there! How can I help you?" },
  { question: "who are you", answer: "I am Lordson's chatbot assistant." },
  { question: "what do you do", answer: "I answer predefined questions." },
  { question: "skills", answer: "I have skills in Sales, AI, Scriptwriting, Web Development, and Teaching." },
  { question: "contact", answer: "Scroll down to the contact section to reach me." }
];

// MAKE FUNCTION GLOBAL (THIS IS THE FIX)
window.sendMessage = function () {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  if (!input || !chatBox) {
    console.log("Chatbot elements not found");
    return;
  }

  let text = input.value.trim().toLowerCase();
  if (text === "") return;

  addMessage(text, "user");

  let response = getResponse(text);

  setTimeout(() => {
    addMessage(response, "bot");
  }, 300);

  input.value = "";
};

// ADD MESSAGE
function addMessage(text, sender) {
  const chatBox = document.getElementById("chat-box");

  let msg = document.createElement("div");
  msg.className = "message " + sender;
  msg.textContent = text;

  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// RESPONSE LOGIC
function getResponse(input) {
  input = input.toLowerCase();

  for (let i = 0; i < faq.length; i++) {
    if (input.includes(faq[i].question)) {
      return faq[i].answer;
    }
  }

  return "Sorry, I don't understand that yet.";
}

// ENTER KEY SUPPORT (ROBUST)
document.addEventListener("DOMContentLoaded", function () {
  const chatBox = document.getElementById("chat-box");
if (chatBox) {
  let welcome = document.createElement("div");
  welcome.className = "message bot";
  welcome.textContent = "Hi! You can ask me about my skills, experience, or contact info.";
  chatBox.appendChild(welcome);
                                   }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const active = document.activeElement;
      if (active && active.id === "user-input") {
        e.preventDefault();
        window.sendMessage();
      }
    }
  });
});
