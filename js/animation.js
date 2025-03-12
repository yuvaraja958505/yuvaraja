// Function to handle scroll-based animation
function handleScrollAnimation() {
    const animatedElements = document.querySelectorAll('.animated-element , .service-item' );

    animatedElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Check if the element is within the viewport
        if (elementPosition < windowHeight - 100) {
            element.classList.add('visible'); // Add 'visible' class when in view
        }
    });
}

// Trigger the animation on scroll
window.addEventListener('scroll', handleScrollAnimation);

// Trigger the animation on page load
handleScrollAnimation();




