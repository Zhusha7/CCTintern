const pointsTable = {
    1: 25,
    2: 18,
    3: 15,
    4: 12,
    5: 10,
    6: 8,
    7: 6,
    8: 4,
    9: 2,
    10: 1,
};

document.getElementById("pointsForm").addEventListener("submit", function (x) {
    x.preventDefault();

    let totalPoints = 0;

    for (let i = 1; i <= 5; i++) {
        const value = parseInt(document.getElementById(`race${i}`).value);
        if (!isNaN(value) && value >= 1 && value <= 10) {
            totalPoints += pointsTable[value] || 0;
        }
    }

    document.getElementById(
        "result"
    ).innerText = `Total Points: ${totalPoints}`;
});
