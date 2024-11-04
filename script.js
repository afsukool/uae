document.getElementById('celebrateBtn').addEventListener('click', function() {
    // Display the celebration message
    const message = document.getElementById('celebrateMessage');
    message.style.display = 'block';

    // Play the national anthem
    const anthemAudio = document.getElementById('anthemAudio');
    if (anthemAudio) {
        anthemAudio.play();
    }

    // Generate celebration effects
    generateConfetti();
    generateCrackers();
    generateFlowers();
});

// Function to generate confetti scattered across the screen
function generateConfetti() {
    const container = document.body;
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * window.innerWidth}px`;
        confetti.style.top = `${Math.random() * window.innerHeight}px`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        container.appendChild(confetti);

        // Remove the confetti after animation ends
        setTimeout(() => confetti.remove(), 2000);
    }
}

// Function to generate cracker bursts scattered across the screen
function generateCrackers() {
    const container = document.body;
    for (let i = 0; i < 20; i++) {
        const cracker = document.createElement('div');
        cracker.classList.add('cracker');
        cracker.style.left = `${Math.random() * window.innerWidth}px`;
        cracker.style.top = `${Math.random() * window.innerHeight}px`;
        container.appendChild(cracker);

        // Remove the cracker after animation ends
        setTimeout(() => cracker.remove(), 1500);
    }
}

// Function to generate flower petals scattered across the screen
function generateFlowers() {
    const container = document.body;
    for (let i = 0; i < 20; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = `${Math.random() * window.innerWidth}px`;
        flower.style.top = `${Math.random() * window.innerHeight}px`;
        container.appendChild(flower);

        // Remove the flower after animation ends
        setTimeout(() => flower.remove(), 3000);
    }
}
