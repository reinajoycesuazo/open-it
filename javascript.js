// Event listener for Yes button
document.getElementById("yesBtn").addEventListener("click", () => {
    window.location.href = "yes.html"; // Redirect to yes.html
});

// Event listener for No button (it moves randomly and redirects)
document.getElementById("noBtn").addEventListener("mouseover", () => {
    const noBtn = document.getElementById("noBtn");

    // Get the dimensions of the viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate random positions for the button within the viewport
    const randomTop = Math.random() * (viewportHeight - noBtn.offsetHeight);
    const randomLeft = Math.random() * (viewportWidth - noBtn.offsetWidth);

    // Apply the new position to the button
    noBtn.style.position = "absolute";
    noBtn.style.top = randomTop + "px";
    noBtn.style.left = randomLeft + "px";
});

// Redirect to a random page if the "No" button is clicked
document.getElementById("noBtn").addEventListener("click", () => {
    const pages = ["nu_1.html", "nu_2.html", "nu_3.html"];
    const randomPage = pages[Math.floor(Math.random() * pages.length)];
    window.location.href = randomPage;
});

