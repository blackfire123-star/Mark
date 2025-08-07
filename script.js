document.getElementById('roll').addEventListener('click', () => {
    const roll = Math.floor(Math.random() * 20) + 1;
    document.getElementById('result').textContent = roll;
});

document.getElementById('create-character').addEventListener('click', () => {
    const race = prompt('Выберите расу (например, человек, эльф, дворф):');
    if (race === null) return;

    const charClass = prompt('Выберите класс (например, воин, маг, плут):');
    if (charClass === null) return;

    const strength = prompt('Сила (1-20):');
    if (strength === null) return;

    const dexterity = prompt('Ловкость (1-20):');
    if (dexterity === null) return;

    const intelligence = prompt('Интеллект (1-20):');
    if (intelligence === null) return;

    const confirmation = confirm(`Создать персонажа ${race} ${charClass}?`);
    const output = document.getElementById('character-output');
    if (!confirmation) {
        output.textContent = 'Создание отменено.';
        return;
    }

    const characterText = `Раса: ${race}\nКласс: ${charClass}\nСила: ${strength}\nЛовкость: ${dexterity}\nИнтеллект: ${intelligence}`;
    output.textContent = characterText;
});
