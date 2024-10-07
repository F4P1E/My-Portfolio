// script.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    alert('Thank you for your message!'); // Alert the user
    this.reset(); // Reset the form fields
});
