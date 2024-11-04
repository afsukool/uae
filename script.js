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
        confetti.style.left = `${Math.random() * window.innerWidth}px`;
        confetti.style.top = `${Math.random() * window.innerHeight}px`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        container.appendChild(confetti);
        setTimeout(() => confetti.remove(), 2000);
    }
}

// Function to generate fireworks
function generateFireworks() {
    const container = document.body;
    for (let i = 0; i < 5; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        // Position firework at the bottom of the viewport
        firework.style.left = `${Math.random() * window.innerWidth}px`;
        firework.style.top = `60vh`; // Start from 60% of viewport height
        container.appendChild(firework);
        // Remove firework after the animation duration
        setTimeout(() => firework.remove(), 2000);
    }
}
