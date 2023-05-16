// This code de-obfuscates my email and displays it on screen when the button is clicked
// It's not a perfect solution, but it should stop be enough to stop email scraping
// Email encoded in base64. This might be changed in the future to prevent scraping targeting base64 strings
const email = "Y29udGFjdEBvd2Vucnlhbi51cwo=";
document.addEventListener("DOMContentLoaded", function () {
    // Get document elements
    const button = document.querySelector("#emailButton");
    const emailDiv = document.querySelector("#email");
    // Decode the email string and insert a mailto link into the DOM, then disable the button
    button.addEventListener("click", function () {
        const decodedEmail = atob(email);
        emailDiv.insertAdjacentHTML("beforeend", "<div class=\"col\"><a href=\"mailto:".concat(decodedEmail, "\"><strong>").concat(decodedEmail, "</strong></a></div>"));
        button.disabled = true;
    });
});
