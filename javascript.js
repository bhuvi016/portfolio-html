// ===== Dark Mode Toggle =====
const toggleBtn = document.getElementById("darkToggle");

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  // Save preference
  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark-mode")
  );
}

// Load dark mode preference
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
}

toggleBtn.addEventListener("click", toggleDarkMode);

// ===== Show / Hide Section =====
function toggleAbout() {
  const about = document.getElementById("about");
  about.style.display =
    about.style.display === "none" ? "block" : "none";
}

// ===== Form Validation =====
function validateForm(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const error = document.getElementById("error");
  const success = document.getElementById("success");

  error.textContent = "";
  success.textContent = "";

  if (!email.includes("@")) {
    error.textContent = "Please enter a valid email address";
    return;
  }

  if (message.length < 10) {
    error.textContent = "Message must be at least 10 characters";
    return;
  }

  success.textContent = "Message sent successfully!";
}