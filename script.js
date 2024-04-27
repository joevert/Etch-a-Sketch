const linhaBotao = document.querySelector('.linhaBotao');

const botaoGrade = document.createElement('button');

botaoGrade.textContent = 'Clique para alterar a quantidade de quadrados';


linhaBotao.appendChild(botaoGrade);



function criarLinha() {
    const grade = document.querySelector('.grade');
    for (let i = 0; i < 16; i++) {
        const square = document.createElement("div");

        square.classList.add('square');
        grade.appendChild(square);
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