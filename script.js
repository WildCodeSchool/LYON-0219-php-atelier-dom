let fontSize = 14;

function addRow() {
	let ul = document.getElementById('list');
	let li = document.createElement('li');
	li.textContent = "Une nouvelle ligne " + (ul.children.length + 1);

	ul.appendChild(li);
}

function deleteRow() {
	let ul = document.getElementById('list');
  ul.removeChild(ul.lastElementChild);
}

function deleteLine(element) {
  let ul = document.getElementById('list');
  ul.removeChild(element.parentElement);
}

function increaseFont() {
  let ul = document.getElementById('list');
  fontSize++;
  ul.style.fontSize = fontSize + "px";
}

function decreaseFont() {
  let ul = document.getElementById('list');
  fontSize--;
  ul.style.fontSize = fontSize + "px";
}