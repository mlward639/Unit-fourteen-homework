// LOGIN
const loginFormHandler = async () => {
  // Collect the values from the login form
  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  console.log("TESSSSTTTT", username, password);
  // Once enter login info, send POST request to the API endpoint
  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    // if successful, redirect to the 'Dashboard' page
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

// clicking the submit button of the login form triggers the loginFormHandler function
// document
//   .querySelector(".login-form")
//   .addEventListener("submit", loginFormHandler);

// SIGNUP
const signupFormHandler = async () => {
  // Collect values from the sign up form
  const username = document.querySelector("#username-signUp").value.trim();
  const password = document.querySelector("#password-signUp").value.trim();
  // If username and password entered, send a POST request to the API endpoint
  if (username && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    // If successful, redirect the browser to the ' Dashboard' page
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

// clicking the submit button of the sign up form triggers the signupFormHandler function
// document
//   .querySelector(".sign-up-form")
//   .addEventListener("submit", signupFormHandler);
