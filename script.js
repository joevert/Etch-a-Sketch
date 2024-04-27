

function criarLinha() {
    const container = document.querySelector('.container');
    for (let i = 0; i < 16; i++) {
        const square = document.createElement("div");
        square.classList.add('square');
        container.appendChild(square);
    }
    
}

function criarGrade () {
    for (i = 0; i < 16; i++) {
        criarLinha();
    }
}

criarGrade();


const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'red';
    });
    
    square.addEventListener('mouseout', () => {
        square.style.backgroundColor = '';
    })

})