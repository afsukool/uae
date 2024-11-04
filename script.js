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

// Function to generate fireworks that burst into particles
function generateFireworks() {
    const container = document.body;
    for (let i = 0; i < 5; i++) {
        // Create the firework div that will "burst"
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = `${Math.random() * window.innerWidth}px`;
        firework.style.top = `${Math.random() * (window.innerHeight / 2)}px`;
        container.appendChild(firework);

        // Trigger the burst after a brief delay
        setTimeout(() => {
            firework.remove();
            createParticles(firework.style.left, firework.style.top);
        }, 800); // Match the time to the burst point
    }
}

// Function to create particles that scatter
function createParticles(x, y) {
    const container = document.body;
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = x;
        particle.style.top = y;
        particle.style.setProperty('--dx', Math.cos((2 * Math.PI * i) / 30)); // Spread particles evenly in a circle
        particle.style.setProperty('--dy', Math.sin((2 * Math.PI * i) / 30));
        particle.style.setProperty('--hue', Math.random()); // Random color
        container.appendChild(particle);

        // Remove particle after animation ends
        setTimeout(() => particle.remove(), 1500);
    }
}
