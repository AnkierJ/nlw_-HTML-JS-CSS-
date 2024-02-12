const perguntas = [
    {
        pergunta: "Qual é o nome do desenvolvedor do Counter Strike 2?",
        respostas: [
            "Valve Corporation",
            "Electronic Arts",
            "Ubisoft",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a data de lançamento oficial do Counter Strike 2?",
        respostas: [
            "2010",
            "2015",
            "2020",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o principal objetivo no modo de jogo 'Defuse' do Counter Strike 2?",
        respostas: [
            "Proteger o refém",
            "Desarmar a bomba",
            "Capturar a bandeira",
        ],
        correta: 1
    },
    {
        pergunta: "Quantos modos de jogo o Counter Strike 2 oferece?",
        respostas: [
            "3",
            "5",
            "7",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o mapa mais famoso do Counter Strike 2?",
        respostas: [
            "Dust II",
            "Mirage",
            "Inferno",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a arma mais cara no Counter Strike 2?",
        respostas: [
            "AK-47",
            "AWP",
            "M4A4",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o nome do personagem mais icônico do Counter Strike 2?",
        respostas: [
            "John 'Soap' MacTavish",
            "Agent 47",
            "Yuri 'The Arm' Ivankov",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o requisito mínimo de RAM para jogar o Counter Strike 2?",
        respostas: [
            "4 GB",
            "8 GB",
            "16 GB",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o sistema operacional suportado pelo Counter Strike 2?",
        respostas: [
            "Windows",
            "macOS",
            "Linux",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o motor gráfico usado para desenvolver o Counter Strike 2?",
        respostas: [
            "Source Engine",
            "Unreal Engine",
            "Unity Engine",
        ],
        correta: 0
    }
];

const quiz = document.querySelector("#quiz")
const template = document.querySelector('template')
const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name','pergunta-'+perguntas.indexOf(item))
        dt.querySelector('input').setAttribute('value', item.respostas.indexOf(resposta))
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem) 
}