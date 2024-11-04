document.getElementById('celebrateBtn').addEventListener('click', function() {
    document.getElementById('celebrateMessage').style.display = 'block';
    document.getElementById('anthemAudio').play();
    generateConfetti();
    generateFireworks();
});

// Function to generate confetti
function generateConfetti() {
    const container = document.body;
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        // Randomize the left position and top position starting from the top of the viewport
        confetti.style.left = `${Math.random() * window.innerWidth}px`;
        confetti.style.top = `0px`; // Start from the top
        // Randomize color for each confetti piece
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        container.appendChild(confetti);
        // Remove confetti after some time
        setTimeout(() => confetti.remove(), 2000);
    }
}

// Function to generate fireworks
function generateFireworks() {
    const container = document.body;
    for (let i = 0; i < 5; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        // Randomize the left position within the viewport width
        firework.style.left = `${Math.random() * window.innerWidth}px`;
        // Start the firework from a random height
        firework.style.top = `${Math.random() * (window.innerHeight / 2)}px`; // Start from the upper half
        container.appendChild(firework);
        // Remove firework after animation ends
        setTimeout(() => firework.remove(), 1000); // Match duration of the animation
    }
}

