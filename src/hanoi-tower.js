module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const turns = 2 ** disksNumber - 1;
    const sec = turns / (turnsSpeed / 3600);
    return { turns, sec };
}
