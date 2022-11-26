const Game = require('./game')
import { rotateEl } from "./dragDrop"

function initAudioBtn() {
  const btn = document.querySelector(".header-audio-btn");

  btn.addEventListener("click", () => {
    btn.classList.toggle("off");
  });
}

function startNewGame() {
  const game = new Game()
  // display players empty board and fleet and btns
  const rightDiv = document.querySelector('.main-right')
  displayStartScreen()
  displayEmptyBoard(rightDiv, game.player.board)
  rotateEl()
}

function displayEmptyBoard(parentDiv, board) {
  const boardDiv = document.createElement('div')
  boardDiv.className = 'board'

  for (let y = 0; y < board.length; y++) {
    const row = board[y];
    for (let x = 0; x < row.length; x++) {
      const boardCell = document.createElement('div')
      boardCell.className = 'board-cell'
      boardCell.dataset.coords = `${y},${x}`
      boardDiv.appendChild(boardCell)
    }
  }
  parentDiv.appendChild(boardDiv)
}

function displayStartScreen() {
  const leftDiv = document.querySelector('.main-left')
  const screenHtml = `<p class="instruction">Position your ships by dragging them on board <span class="arrow">&#x2192</span></p>
  <button class="ship-rotate btn">Rotate ships <i class="fa-solid fa-rotate-left"></i></button>
  <div class="ships">
    <div class="ship carrier" draggable="true" ></div>
    <div class="ship submarine" draggable="true"></div>
    <div class="ship battleship" draggable="true"></div>
    <div class="ship battleship" draggable="true"></div>
    <div class="ship patrol" draggable="true"></div>
    <div class="ship patrol" draggable="true"></div>
  </div>
  <button class="random-ships btn">Place ships randomly <i class="fa-solid fa-dice"></i></button>
    <select class="btn" name="difficulty" id="difficulty">
      <option value="easy">Easy</option>
      <option value="hard">Hard</option>
    </select>
    <button class="game-start btn">START <i class="fa-solid fa-play"></i></button>`
  leftDiv.innerHTML = screenHtml

  initStartScreenBtns()
}

function initStartScreenBtns() {
  const rotateBtn = document.querySelector('.ship-rotate')
  const ships = document.querySelector('.ships')
  rotateBtn.addEventListener('click', () => {
    ships.classList.toggle('rotate')
  })
}

export {initAudioBtn, startNewGame};
