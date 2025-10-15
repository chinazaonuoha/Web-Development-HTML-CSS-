document.getElementById("articleSignupForm").addEventListener("submit", (e) => {
  e.preventDefault(); // stop reload
  // do simple validation
  alert("Account created successfully!");
  window.location.href = "success.html";
});