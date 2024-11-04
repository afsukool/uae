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
        firework.style.left = `${Math.random() * window.innerWidth}px`;
        firework.style.top = `${Math.random() * window.innerHeight}px`;
        container.appendChild(firework);
        setTimeout(() => firework.remove(), 2000);
    }
}
