const prompts = [
    "ik schaam mij", "het spijt me", "ik hou een notitie bij", "ik wou jullie er niet in mee trekken", "Ik ben sober",
    "ik had u nooit mee in de auto mogen nemen", "ik zoek hulp", "was nooit men bedoeling", "kheb echt niks gepakt", "da jullie na mijn thuis moesten komen",
    "ik laat me opneme als dees nie werkt", "ik ben aant afbouwen", "jullie zijn de enige die ik heb", "ik doe dit voor jullie", "ik heb zoveel aan jullie",
    "de dokter heeft dit gezegd", "geef me nog een kans", "da was nooit men bedoeling", "kwil nie da jullie mij onder invloed zien", "ik hou heel veel van jullie",
    "jullie hebbe zoveel voor mij gedaan", "Ik doe da nie alleen voor mij maar vrienden en familie", "gaat nooit meer gebeuren", "when?"
];

function buildBingoBoard() {
    const board = document.getElementById("bingo-board");
    board.innerHTML = "";

    const shuffledPrompts = prompts.sort(() => Math.random() - 0.5);

    let counter = 0;
    for (let i = 0; i < 25; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        if (i === 12) {
            cell.textContent = "Free Space";
            cell.classList.add("free");
            cell.classList.add("crossed");
        } else {
            cell.textContent = shuffledPrompts[counter];
            counter++;
        }

        cell.addEventListener("click", () => {
            cell.classList.toggle("crossed");
        });

        board.appendChild(cell);
    }
}

document.addEventListener("DOMContentLoaded", buildBingoBoard);
