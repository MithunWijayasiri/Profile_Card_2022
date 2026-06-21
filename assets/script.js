// Enhanced animated background particles
document.addEventListener('DOMContentLoaded', function() {
    const circlesList = document.getElementById('circles');
    
    // Create 11 particles for the animated background
    for (let i = 0; i < 11; i++) {
        const li = document.createElement('li');
        circlesList.appendChild(li);
    }
});