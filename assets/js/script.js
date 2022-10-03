const containerElements = document.querySelectorAll(".container");
const draggableElements = document.querySelectorAll(".draggable");

draggableElements.forEach(elem => {
   elem.addEventListener("dragstart", dragStart);
   elem.addEventListener("ondrag", onDrag);
   elem.addEventListener("ondragend", onDragEnd);
});

containerElements.forEach(elem => {
  elem.addEventListener("ondragenter", onDragEnter);
  elem.addEventListener("ondragover", onDragOver);
  elem.addEventListener("ondragleave", onDragLeave);
  elem.addEventListener("ondrop", onDrop);
});

function dragStart(event) {
  event.dataTransfer.setData("text", event.target.color);
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  event.preventDefault();
  const draggableElementsData = event.dataTransfer.getData("text");
}
