document.addEventListener("DOMContentLoaded", () => {
    // 1. Tell the CSS that JavaScript is working and animations can be enabled
    document.body.classList.add("js-loaded");

    // 2. Newsletter Form Validation & Success Message
    const newsletterForm = document.getElementById("newsletterForm");
    const emailInput = document.getElementById("emailInput");
    const formMessage = document.getElementById("formMessage");

    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const emailValue = emailInput.value.trim();

            if (emailValue === "" || !emailValue.includes("@")) {
                formMessage.style.color = "#ef4444";
                formMessage.textContent = "Please enter a valid email address.";
                return;
            }

            formMessage.style.color = "#10b981";
            formMessage.textContent = "Thank you! Your 15% discount code is on its way.";
            emailInput.value = "";
        });
    }

    // 3. Scroll Animation Trigger (Fade-in on scroll)
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach(el => observer.observe(el));
});
