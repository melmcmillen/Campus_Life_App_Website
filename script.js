// Toggle the "..." dropdown menu on the Home page
const moreBtn = document.getElementById("moreBtn");
const moreLinks = document.getElementById("moreLinks");

if (moreBtn && moreLinks) {
  moreBtn.addEventListener("click", () => {
    moreLinks.classList.toggle("d-none");
  });
}

// Connect the home screen pinned buttons to opportunities.html and help.html
const navButtons = document.querySelectorAll(".nav-btn");
navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetPage = btn.getAttribute("data-target");
    if (targetPage) {
      window.location.href = targetPage;
    }
  });
});

// Fill in today's date in the cafeteria table
const dateCells = document.querySelectorAll(".date-cell");
dateCells.forEach((cell) => {
  cell.textContent = new Date().toLocaleDateString();
});

// Filter professor/internship cards on opportunities.html
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

if (searchBtn && searchInput) {
  searchBtn.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll(".prof-card");

    cards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? "" : "none";
    });
  });
}

// Placeholder API function for Google Calendar & AI
async function fetchPlaceholderAPI(endpoint) {
  const API_KEY = "YOUR_API_KEY_HERE";
  console.log("Calling API endpoint:", endpoint, "with key:", API_KEY);
}

const syncBtn = document.getElementById("syncBtn");
if (syncBtn) {
  syncBtn.addEventListener("click", () => {
    fetchPlaceholderAPI("https://www.googleapis.com/calendar/v3/calendars/primary/events");
    syncBtn.textContent = "Calendar Synced!";
  });
}

// Toggle bottom "+ AI" bar and handle questions
const aiToggle = document.getElementById("aiToggle");
const aiBox = document.getElementById("aiBox");
const aiSend = document.getElementById("aiSend");
const aiInput = document.getElementById("aiInput");
const aiOutput = document.getElementById("aiOutput");

if (aiToggle && aiBox) {
  aiToggle.addEventListener("click", () => {
    aiBox.classList.toggle("d-none");
  });
}

if (aiSend && aiInput && aiOutput) {
  aiSend.addEventListener("click", () => {
    const question = aiInput.value.trim();
    if (!question) return;

    fetchPlaceholderAPI("https://api.openai.com/v1/chat/completions");
    aiOutput.textContent = `AI Response (Placeholder): You asked "${question}".`;
    aiInput.value = "";
  });
}