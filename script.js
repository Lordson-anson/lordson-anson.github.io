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

  // GREETING
  if (input.includes("hello") || input.includes("hi")) {
    return `Hello, I am the assistant for ${PROFILE.name}. How can I assist you today?`;
  }

  // WHO ARE YOU
  if (input.includes("who") && input.includes("you")) {
    return `${PROFILE.name} is a multi-skilled professional based in ${PROFILE.location}. He works as ${PROFILE.roles.join(", ")} with ${PROFILE.experience} of experience.`;
  }

  // WHAT DO YOU DO
  if (input.includes("what") && input.includes("do")) {
    return `${PROFILE.name} specializes in ${PROFILE.roles.join(", ")}. He combines creativity, technical skills, and business understanding to deliver results.`;
  }

  // SKILLS
  if (input.includes("skill")) {
    return `Frontend: ${PROFILE.skills.frontend.join(", ")}.\nDesign: ${PROFILE.skills.design.join(", ")}.\nTools: ${PROFILE.skills.tools.join(", ")}.\nOther: ${PROFILE.skills.other.join(", ")}.`;
  }

  // PROJECTS
  if (input.includes("project") || input.includes("work")) {
    return PROFILE.projects
      .map(p => `${p.name}: ${p.logline}`)
      .join("\n\n");
  }

  // EXPERIENCE
  if (input.includes("experience")) {
    return PROFILE.workExperience
      .map(job => `${job.role} at ${job.company} (${job.period})`)
      .join("\n");
  }

  // CERTIFICATIONS
  if (input.includes("cert") || input.includes("certificate")) {
    return PROFILE.certifications.join("\n");
  }

  // ACHIEVEMENTS
  if (input.includes("achievement") || input.includes("award")) {
    return PROFILE.achievements.join("\n");
  }

  // PERSONALITY / TRAITS
  if (input.includes("personality") || input.includes("trait")) {
    return PROFILE.personality.join(", ");
  }

  // AVAILABILITY (VERY IMPORTANT FOR RECRUITERS)
  if (
    input.includes("hire") ||
    input.includes("available") ||
    input.includes("job") ||
    input.includes("freelance") ||
    input.includes("internship")
  ) {
    return `${PROFILE.availability.freelance} ${PROFILE.availability.internship} ${PROFILE.availability.fulltime} You can reach out via ${PROFILE.contact.email}`;
  }

  // CONTACT
  if (
    input.includes("contact") ||
    input.includes("email") ||
    input.includes("phone") ||
    input.includes("linkedin")
  ) {
    return `Email: ${PROFILE.contact.email}\nPhone: ${PROFILE.contact.phone}\nLinkedIn: ${PROFILE.contact.linkedin}\nInstagram: ${PROFILE.contact.instagram}`;
  }

  // LOCATION
  if (input.includes("location") || input.includes("where")) {
    return `${PROFILE.name} is based in ${PROFILE.location}.`;
  }

  // WEBSITES
  if (input.includes("website") || input.includes("portfolio")) {
    return `You can view his work here:\n${PROFILE.websites.join("\n")}`;
  }

  // DEFAULT RESPONSE (SMART REDIRECT)
  return "I can help you with skills, projects, experience, achievements, or how to hire/contact him.";
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

  const PROFILE = {
  name: "Lordson Ugonna Anson",
  location: "Lagos, Nigeria (open to relocation)",
  experience: "Over 5 years",

  roles: [
    "Script Writer",
    "Graphics Designer",
    "Content Creator",
    "Comic Book Creator",
    "Sales Executive",
    "Tutor",
    "Web Developer",
    "Project Writer",
    "Editor",
    "Proofreader",
    "Teacher"
  ],

  personality: [
    "Creative",
    "Motivated",
    "Goal-oriented",
    "Focused",
    "Clear communicator",
    "Team player",
    "Disciplined",
    "Teachable",
    "Calm"
  ],

  skills: {
    frontend: ["HTML", "CSS", "JavaScript"],
    design: ["Corel Draw", "Photoshop", "Canva"],
    tools: ["Git", "VS Code", "AI Tools", "Microsoft Office", "Final Draft"],
    other: ["Copywriting", "Branding", "Editing", "Proofreading", "Sales Closure", "Education"]
  },

  availability: {
    freelance: "Yes, I am available for freelance work.",
    internship: "Yes, I am open to internships.",
    fulltime: "Yes, I am open to full-time roles."
  },

  contact: {
    email: "lordsonanson39@gmail.com",
    phone: "+2349135806684",
    linkedin: "linkedin.com/in/lordson-anson",
    instagram: "instagram.com/raphsodycomics"
  },

  achievements: [
    "Led a team to finish best in a class project",
    "Received two letters of commendation for outstanding results in university",
    "Best graduating D.E student"
  ],

  certifications: [
    "HSE Level 1, 2 & 3 (2022)",
    "Graphics & Web Design Crash Course (2021)",
    "Data Analysis Crash Course (2021)"
  ],

  workExperience: [
    {
      role: "Sales Executive",
      company: "Emlucio Auto Engines",
      period: "June 2023 – 2025",
      details: [
        "Increased sales conversion by 40%",
        "Improved customer satisfaction by 90%",
        "Handled prospecting, negotiation, and closing deals"
      ]
    },
    {
      role: "Scriptwriter / Content Creator",
      company: "Self-employed",
      period: "June 2025 – Present",
      details: [
        "Developed 6 feature-length scripts",
        "Created strong narrative-driven content"
      ]
    },
    {
      role: "AI Creator / Developer",
      company: "Self-employed",
      period: "Dec 2025 – Present",
      details: [
        "Built websites using AI tools",
        "Improved workflow using automation",
        "Created AI visuals for digital media"
      ]
    },
    {
      role: "Tutor",
      company: "Analytical Haven",
      period: "March 2026 – Present",
      details: [
        "Taught learners aged 20–50+",
        "Delivered structured and clear lessons"
      ]
    },
    {
      role: "Educator",
      company: "Holy Trinity College",
      period: "April 2022 – May 2024",
      details: [
        "Taught Biology",
        "Simplified complex concepts",
        "Improved student performance"
      ]
    }
  ],

  projects: [
    {
      name: "Kidnapped",
      logline: "A bus hijacking forces a man into a deadly battle against organ traffickers and corruption."
    },
    {
      name: "Project Z",
      logline: "A zombie apocalypse grants a man powers as he seeks revenge against a secret organization."
    },
    {
      name: "Bloodlines",
      logline: "A cartel enforcer and a boss’s daughter fight betrayal and deadly enemies."
    },
    {
      name: "Sector 8",
      logline: "A soldier leads a mission into an alien mothership to save humanity."
    },
    {
      name: "Fire Fist",
      logline: "An exiled warrior returns to reclaim honor and protect those he loves."
    },
    {
      name: "Amazing Grace",
      logline: "A broken man finds redemption through faith after a life of crime."
    },
    {
      name: "Blade of Balance",
      logline: "A princess with divine power must restore balance to the world."
    }
  ],

  websites: [
    "raphsodycomics.github.io",
    "lordson-anson.github.io"
  ]
};
