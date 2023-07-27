const container = document.querySelector('.container');
let defaultGrid = makeGrid(16, 16);
const box = document.querySelectorAll('.box');
const csButton = document.querySelector('.cs-button')


function makeGrid(rowSize, columnSize) {
    for (i = 0; i < rowSize * columnSize; i++) {
        let tempDiv = document.createElement('div')
        container.appendChild(tempDiv).classList.add('box')
        tempSize = (500 / rowSize)
        tempDiv.style.width = tempSize + "px";
        tempDiv.style.height = tempSize + "px";
    }
}

box.forEach(everyBox => {
    everyBox.addEventListener('mouseenter', function () {
        everyBox.classList.add('Hover')
        everyBox.classList.add('Black')
    })
    everyBox.addEventListener('mouseleave', function (){
        everyBox.classList.remove('Hover')
    })
});

csButton.addEventListener('click', () => {
  tempGridSize =  prompt("Please Pick a New Size")
 parsedGridSize = parseInt(tempGridSize);
 while (container.firstChild) {
    container.removeChild(container.firstChild);
 }
makeGrid(parsedGridSize, parsedGridSize);
})


