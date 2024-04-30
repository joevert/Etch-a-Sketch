const linhaBotao = document.querySelector('.linhaBotao');

const botaoGrade = document.createElement('button');

botaoGrade.textContent = 'Clique para alterar a quantidade de quadrados';


linhaBotao.appendChild(botaoGrade);



function criarLinha(numQuadrados) {
    const grade = document.querySelector('.grade');
    for (let i = 0; i < numQuadrados; i++) {
        const square = document.createElement("div");

        square.classList.add('square');
        grade.appendChild(square);
    }
    
}

function criarGrade (numQuadrados) {
    for (i = 0; i < numQuadrados; i++) {
        criarLinha(numQuadrados);
    }
}

criarGrade(16);


const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'red';
    });
    
    square.addEventListener('mouseout', () => {
        square.style.backgroundColor = '';
    })

})

botaoGrade.addEventListener('click', () => {
    do {
        const numQuadrados = parseInt(prompt('digte qtd quadrados, max 100'));
    } while(numQuadrados.isNaN || numQuadrados < 1 || numQuadrados > 100);
    criarGrade(numQuadrados);  
});