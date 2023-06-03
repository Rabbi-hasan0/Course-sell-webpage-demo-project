// Get the sign-up button element
var signUpButton = document.getElementById("signUpButton");

// Add a click event listener to the sign-up button
signUpButton.addEventListener("click", function() {
  // Get the values of the name, email, and password inputs
  var name = document.getElementById("nameInput").value;
  var email = document.getElementById("emailInput").value;
  var password = document.getElementById("passwordInput").value;

  // Validate the input
  if (name.length === 0 || email.length === 0 || password.length === 0) {
    alert("Please fill in all fields.");
    return;
  }

  // Send a request to the server to sign up the user
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/sign-up", true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify({ name: name, email: email, password: password }));

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        alert("Sign-up successful!");
      } else {
        alert("Sign-up failed. Please try again later.");
      }
    }
  };
});
