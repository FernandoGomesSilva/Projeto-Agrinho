const caixaPrincipal = document.querySelector (".caixa-principal");
const caixaPerguntas = document.querySelector (".caixa-perguntas");
const caixaAlternativas = document.querySelector (".caixa-alternativa");
const caixaResultados = document.querySelector (".texto-resultado");
const imagemPergunta = document.querySelector (".imagem-pergunta");

const perguntas = [
    {
        enunciado:"Qual evento anual no Paraná é conhecido por celebrar a cultura do campo e atrair tanto moradores da cidade quanto do interior?",
        imagem: "img/5.jpg",
        alternativas: [
            {
                texto: "Exposição Agropecuária e Industrial de Londrina (ExpoLondrina)",
                afirmacao: "Correto"
            },
            {
                texto: "Carnaval de Curitiba",
                afirmacao:"Incorreto"
            }
        ]
    },
    {
        enunciado:"Um dos principais benefícios da conexão entre o campo e a cidade no Paraná é:",
        imagem: "img/3.jpg",
        alternativas: [
            {
                texto: "Fornecimento de alimentos frescos e diversificados para a população urbana.",
                afirmacao: "Correto"
            },
            {
                texto: "Aumento da poluição sonora nos centros urbanos.",
                afirmacao:"Incorreto"
            }
        ]
    },
    {
        enunciado:"Qual das seguintes atividades representa uma forma de turismo que fortalece a ligação entre o campo e a cidade no Paraná?",
        imagem: "img/2.jpg",
        alternativas: [
            {
                texto: "Visitas a propriedades rurais que oferecem experiências de agroturismo.",
                afirmacao: "Correto"
            },
            {
                texto: "Construção de mais shoppings centers nas capitais.",
                afirmacao:"Incorreto"
            }
        ]
    },
    {
        enunciado:"Um aspecto cultural frequentemente compartilhado e valorizado tanto no campo quanto na cidade do Paraná é:",
        imagem: "img/1.jpg",
        alternativas: [
            {
                texto: "A rica tradição da culinária paranaense, com ingredientes locais.",
                afirmacao: "Correto"
            },
            {
                texto: "A prática do bungee jumping em áreas urbanas.",
                afirmacao:"Incorreto"
            }
        ]
    },
    {
        enunciado:"Qual desafio pode ser atenuado pela maior integração entre as áreas rurais e urbanas do Paraná?",
        imagem: "img/4.jpg",
        alternativas: [
            {
                texto: "O êxodo rural e o despovoamento de pequenas cidades do interior.",
                afirmacao: "Correto"
            },
            {
                texto: "A dificuldade de acesso à internet de alta velocidade nos grandes centros.",
                afirmacao:"Incorreto"
            }
        ]
    },
]