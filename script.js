// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
    const newsletterForm = document.getElementById("newsletterForm");
    const emailInput = document.getElementById("emailInput");
    const formMessage = document.getElementById("formMessage");

    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function(event) {
            // Prevent the default form submission (page refresh)
            event.preventDefault();

            const emailValue = emailInput.value.trim();

            // Simple email validation check
            if (emailValue === "" || !emailValue.includes("@")) {
                formMessage.style.color = "#ef4444"; // Red error color
                formMessage.textContent = "Please enter a valid email address.";
                return;
            }

            // Success state
            formMessage.style.color = "#10b981"; // Green success color
            formMessage.textContent = "Thank you! Your 15% discount code is on its way.";
            
            // Clear the input field
            emailInput.value = "";
        });
    }
});
