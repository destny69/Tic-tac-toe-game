let boxes = document.querySelectorAll(".box");
let restart = document.querySelector("#restart");
let newbtn = document.querySelector("#new");
let msg = document.getElementById("msg");
let msgContainer = document.getElementById("msg-container");

let turnO = true;

const winningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O"
            turnO = false
        }
        else {
            box.innerText = "X"
            turnO = true
        }
        box.disabled = true;
        isWinner();
    });
});


const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const isWinner = () => {
    for (patterns of winningPatterns) {
        let position1 = boxes[patterns[0]].innerText
        let position2 = boxes[patterns[1]].innerText
        let position3 = boxes[patterns[2]].innerText

        if (position1 != "" && position2 != "" && position3 != "") {
            if (position1 == position2 && position1 == position3) {
                disableBoxes();
                msg.innerText=`Congratulations,Winner is player ${position1}`;
                msgContainer.classList.remove("hide");
            }
        }
    }
}

const restartGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

restart.addEventListener("click", restartGame)
newbtn.addEventListener("click", restartGame)