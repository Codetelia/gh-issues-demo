const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value;

    if (email === "" || password === "") {
        alert("Please enter your email and password.");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    // Sample login — this is NOT real authentication.
    if (email === "user@example.com" && password === "123456") {
        alert("Login successful!");
    } else {
        alert("Invalid email or password.");
    }
});
