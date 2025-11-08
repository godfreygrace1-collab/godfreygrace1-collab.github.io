document.addEventListener("DOMContentLoaded", () => {
  // optional greeting
 const greeting = document.getElementById("greeting");
if (greeting) {
  greeting.style.textAlign = "center";
  greeting.style.marginTop = "50px";
  let username = window.prompt("What is your name?", "Grace");
  if (!username) username = "Friend";
  greeting.textContent = "Welcome to my website, " + username + "!";
}

  function attachToggle(btnId, panelId) {
    const btn = document.getElementById(btnId);
    const panel = document.getElementById(panelId);
    if (!btn || !panel) return;
    btn.addEventListener("click", () => {
      const isHidden = panel.classList.toggle("hidden");
      btn.setAttribute("aria-expanded", String(!isHidden));
    });
  }

  function attachHeartToggle(imgId, storyId) {
    const img = document.getElementById(imgId);
    const story = document.getElementById(storyId);
    if (!img || !story) return;
    img.addEventListener("click", () => {
      const nowHidden = story.classList.toggle("hidden");
      img.setAttribute("aria-expanded", String(!nowHidden));
    });
  }

  // Correct targets
  attachToggle("eraToggle", "eraIntro");
  attachHeartToggle("heart1", "heart1-story");
  attachHeartToggle("heart2", "heart2-story");
  attachHeartToggle("heart3", "heart3-story");

  // Work Experience toggle
  const section = document.getElementById("experience");
  const button = document.querySelector(".toggle-btn");
  if (section && button) {
    button.addEventListener("click", () => {
      const isHidden = section.classList.toggle("hidden");
      button.textContent = isHidden ? "Show Work Experience" : "Hide Work Experience";
    });
  }
});