const linhaBotao = document.querySelector('.linhaBotao');

const botaoGrade = document.createElement('button');

botaoGrade.textContent = 'Clique para alterar a quantidade de quadrados';

linhaBotao.appendChild(botaoGrade);

//seleciona div onde os quadrados ficarao
const grade = document.querySelector('.grade');


function criarLinha(numQuadrados) {
    
    const gradeWidth = numQuadrados*50;
    const gradeHeight = numQuadrados*50;
    grade.style.height = `${gradeHeight}px`;
    grade.style.width = `${gradeWidth}px`;
    const novaLinha = document.createElement("div");
    for (let i = 0; i < numQuadrados; i++) {
        const square = document.createElement("div");
        square.classList.add('square');
        novaLinha.appendChild(square);
    }
    grade.appendChild(novaLinha);
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
    let numQuadrados;
    do {
        numQuadrados = parseInt(prompt('digte qtd quadrados, max 100'));
    } while(isNaN(numQuadrados) || numQuadrados < 1 || numQuadrados > 100);
    criarGrade(numQuadrados);  
});