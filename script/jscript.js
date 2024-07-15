document.addEventListener("DOMContentLoaded", function() {
    const scrollTopButton = document.getElementById("scrollTopButton");

    // Show or hide the button based on scroll position
    window.addEventListener("scroll", function() {
        if (window.scrollY > 100) {
            scrollTopButton.style.display = "block";
        } else {
            scrollTopButton.style.display = "none";
        }
    });

    // Scroll to the top smoothly when the button is clicked
    scrollTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});