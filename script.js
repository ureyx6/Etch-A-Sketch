const container = document.querySelector('.container');
const defaultGrid = makeGrid(32, 32);


function makeGrid(rowSize, columnSize) {
    for (i = 0; i < rowSize * columnSize; i++) {
        let tempDiv = document.createElement('div')
        container.appendChild(tempDiv).classList.add('box')
        tempSize = (500 / rowSize)
        tempDiv.style.width = tempSize + "px";
        tempDiv.style.height = tempSize + "px";
    }
}
