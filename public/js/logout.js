// LOGOUT
// Send POST request to API endpoint
const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  // if successful, redirect to the homepage?*******? page
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

// When click on 'logout', run the logout function
document.querySelector("#logout").addEventListener("click", logout);
