let boxes = document.querySelectorAll(".box");
let restart = document.getElementById("restart");
let msg = document.querySelector(".msg");
let msgcontainer = document.querySelector(".msg-container");
let newbtn = document.querySelector(".new-btn");

let turnO = true;

const winnerpatttern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 4, 6],
  [0, 4, 8],
  [2, 5, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turnO) {
      box.innerText = "0";
      turnO = false;
    } else {
      box.innerText = "x";
      turnO = true;
    }
    box.disabled = true;

    checkwinner();
  });
});

const checkwinner = () => {
  for (let pattern of winnerpatttern) {
    let pos1Value = boxes[pattern[0]].innerText;
    let pos2Value = boxes[pattern[1]].innerText;
    let pos3Value = boxes[pattern[2]].innerText;

    if (pos1Value != "" && pos2Value != "" && pos3Value != "") {
      if (pos1Value === pos2Value && pos2Value === pos3Value) {
        console.log("winner", pos1Value);
        showWinner(pos1Value);
      }
    }
  }
};
const disabledboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
  msg.innerText = `Winner is ${winner}`;
  msgcontainer.classList.remove("msg-container");
  disabledboxes();
};

const reset = () => {
  turnO = true;
  enableboxes();
  msgcontainer.classList.add("msg-container");
};

newbtn.addEventListener("click", reset);
restart.addEventListener("click", reset);
