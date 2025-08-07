document.getElementById('roll').addEventListener('click', () => {
    const roll = Math.floor(Math.random() * 20) + 1;
    document.getElementById('result').textContent = roll;
});
