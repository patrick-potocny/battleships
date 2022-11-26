// when elements are rotated rotate them on dragStart
// when dragging get leftHeight middle position and check if ship fits
//   and highlight board pos where ship starts  otherwise put it back

import newIconPath from "../assets/images/Submarine.png";

function rotateEl() {
  const ships = document.getElementsByClassName("ships")[0];
  const ship = document.getElementsByClassName("ship")[0];
  ship.addEventListener("dragstart", (event) => {
    const rotated = ships.classList.contains("rotate");
    if (rotated) {
      event.setDragImage(ships, 1, 30);
      console.log(event.dataTransfer);
    }
  });
}

export { rotateEl };
