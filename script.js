document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // You can add more interactive elements here later, such as:
    // - Animations on scroll (e.g., using Intersection Observer)
    // - Form validations
    // - Dynamic content loading
    // - Hamburger menu for mobile navigation (if implementing)
});
