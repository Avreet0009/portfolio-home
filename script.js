document.addEventListener("DOMContentLoaded", function () {
    /// theme toggle logic
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    /// check saved theme preference
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "☀️";
    }
    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            toggleButton.textContent = "☀️"
        }
        else {
            localStorage.setItem("theme", "light");
            toggleButton.textContent = "🌙";
        }
    });
    /// EmailJS Integration for Contact Form
    emailjs.init("O0_yLglKyCVw2HBhY"); // Replace with your EmailJS User ID
    document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault();
    
        emailjs.send("contact_Form", "template_1", {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
            date: new Date().toLocaleString() // Optional: Adds submission date
        }).then(response => {
            alert("Message sent successfully!");
            document.getElementById("contactForm").reset();
        }).catch(error => {
            alert("Failed to send message. Please try again.");
            console.error("EmailJS Error:", error);
        });
    });
    
});