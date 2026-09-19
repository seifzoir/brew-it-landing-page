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
            // Scroll Animation Observer
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1 // Triggers when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    // Select all elements with the animation class
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach(el => observer.observe(el));
});
            
            // Clear the input field
            emailInput.value = "";
        });
    }
});
