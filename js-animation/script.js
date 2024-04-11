const block = document.getElementById('block');
const moveButton = document.getElementById('moveButton');

let isMoved = false;

moveButton.addEventListener('click', () => {
    if (!isMoved) {
        block.style.transform = 'translateX(300px)';
        isMoved = true;
    }
    else {
        block.style.transform = 'translateX(0)';
        isMoved = false;
  }
});
