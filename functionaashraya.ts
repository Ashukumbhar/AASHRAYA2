function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Display a volunteer alert
function displayMessage() {
    alert("Thank you for your interest! We will get in touch with you soon.");
}

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your message has been sent! We will get back to you soon.");
    document.getElementById("contactForm").reset();
});