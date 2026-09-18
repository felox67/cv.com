// ===============================
// GreenAuth Extra - Frontend JS
// ===============================

// IMPORTANT:
// Replace this with your deployed Google Apps Script Web App URL.
const API_URL = "https://script.google.com/macros/s/AKfycbzcjF69KosHqoQ0EOTQZbgPMWZGHcXCgdUL7Qr8YeCibFwgNHz19ob7p0yU1VT9rNAw/exec";


// -------------------------------
// Switch between Login / Signup
// -------------------------------

function showSignup() {
    document.getElementById("loginSection").classList.remove("active");
    document.getElementById("signupSection").classList.add("active");
}

function showLogin() {
    document.getElementById("signupSection").classList.remove("active");
    document.getElementById("loginSection").classList.add("active");
}


// -------------------------------
// Show / Hide Password
// -------------------------------

function togglePassword(inputId, button) {
    const input = document.getElementById(inputId);

    if (input.type === "password") {
        input.type = "text";

        const icon = button.querySelector(".material-icons");

        if (icon) {
            icon.textContent = "visibility_off";
        }
    } else {
        input.type = "password";

        const icon = button.querySelector(".material-icons");

        if (icon) {
            icon.textContent = "visibility";
        }
    }
}


// -------------------------------
// LOGIN
// -------------------------------

document.getElementById("loginForm").addEventListener("submit", async function (event) {

    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    if (!email || !password) {
        alert("Please enter your email and password.");
        return;
    }

    const button = this.querySelector(".primary-btn");

    button.disabled = true;
    button.textContent = "Logging in...";

    try {

        const response = await fetch(API_URL, {
            method: "POST",
            body: JSON.stringify({
                action: "login",
                email: email,
                password: password
            })
        });

        const result = await response.json();

        if (result.success) {

            // Store basic session information
            localStorage.setItem("greenAuthUser", JSON.stringify(result.user));

            alert("Login successful!");

            // Change this to your dashboard page
            window.location.href = "dashboard.html";

        } else {

            alert(result.message || "Invalid email or password.");

        }

    } catch (error) {

        console.error(error);

        alert("Unable to connect to the server. Please check your internet connection.");

    } finally {

        button.disabled = false;
        button.textContent = "Log in";
    }
});


// -------------------------------
// SIGN UP
// -------------------------------

document.getElementById("signupForm").addEventListener("submit", async function (event) {

    event.preventDefault();

    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validate passwords
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    const button = this.querySelector(".primary-btn");

    button.disabled = true;
    button.textContent = "Creating account...";

    try {

        const response = await fetch(API_URL, {
            method: "POST",
            body: JSON.stringify({
                action: "signup",
                name: name,
                email: email,
                password: password
            })
        });

        const result = await response.json();

        if (result.success) {

            alert("Account created successfully!");

            // Clear form
            document.getElementById("signupForm").reset();

            // Return to login
            showLogin();

            // Put email into login form
            document.getElementById("loginEmail").value = email;

        } else {

            alert(result.message || "Unable to create account.");

        }

    } catch (error) {

        console.error(error);

        alert("Unable to connect to the server. Please check your internet connection.");

    } finally {

        button.disabled = false;
        button.textContent = "Create account";
    }
});


// -------------------------------
// Google Login
// -------------------------------

function googleLogin() {

    alert(
        "Google login requires Google OAuth configuration. " +
        "Your current Google Apps Script backend handles email/password authentication."
    );

}


// -------------------------------
// Check if user is logged in
// -------------------------------

function getCurrentUser() {

    const user = localStorage.getItem("greenAuthUser");

    if (!user) {
        return null;
    }

    try {
        return JSON.parse(user);
    } catch (error) {
        return null;
    }
}


// -------------------------------
// Logout
// -------------------------------

function logout() {

    localStorage.removeItem("greenAuthUser");

    window.location.href = "login.html";
}