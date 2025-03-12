document.addEventListener('DOMContentLoaded', function() {
    const circlesList = document.getElementById('circles');
    for (let i = 0; i < 11; i++) {
        const li = document.createElement('li');
        circlesList.appendChild(li);
    }
});