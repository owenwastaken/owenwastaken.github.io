// JS Code that rotates the gradient on the content box on the front page
document.addEventListener("DOMContentLoaded", function () {
    const mainBox = document.querySelector("#rotating-gradient");
    let angle = 0;
    // Rotate the gradient 1 degree every 100ms
    setInterval(function () {
        const gradient = "linear-gradient(".concat(angle, "deg, #1E1F46, #404040)");
        mainBox.style["background"] = gradient;
        angle += 1;
        if (angle >= 360) {
            angle = 0;
        }
    }, 100);
});
