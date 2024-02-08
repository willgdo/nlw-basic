const perguntas = [
	{
		pergunta:
			"Qual é o nome do primeiro avião fabricado pelos irmãos Wright em 1903?",
		opcoes: ["Flyer I", "Kitty Hawk", "Flyer III", "Wright Flyer"],
		correta: 3
	},
	{
		pergunta: "Qual destes não é um tipo de aeronave?",
		opcoes: ["Boeing 747", "Airbus A380", "Canadair CRJ200", "Honda Civic"],
		correta: 3
	},
	{
		pergunta:
			"Qual é o nome dado à altitude máxima que uma aeronave pode atingir?",
		opcoes: [
			"Teto de serviço",
			"Teto operacional",
			"Teto de voo",
			"Teto de emergência"
		],
		correta: 1
	},
	{
		pergunta: "Qual país possui a maior frota de aeronaves comerciais?",
		opcoes: ["Estados Unidos", "China", "Brasil", "Rússia"],
		correta: 1
	},
	{
		pergunta:
			"Qual destes é considerado o avião comercial mais vendido da história?",
		opcoes: [
			"Airbus A320",
			"Boeing 737",
			"Embraer E190",
			"McDonnell Douglas MD-80"
		],
		correta: 2
	},
	{
		pergunta:
			"Qual é o nome do fenômeno que ocorre quando um avião atravessa uma nuvem e deixa um rastro visível atrás de si?",
		opcoes: [
			"Vaporização",
			"Condensação",
			"Rastro de combustão",
			"Descompressão"
		],
		correta: 2
	},
	{
		pergunta:
			"Qual é o nome do principal instrumento de navegação utilizado por pilotos para determinar a direção e a posição da aeronave?",
		opcoes: ["GPS", "Radar", "VOR", "Altimetro"],
		correta: 3
	},
	{
		pergunta:
			"Qual é o nome do processo que garante a manutenção da pressão dentro da cabine de uma aeronave?",
		opcoes: ["Pressurização", "Ventilação", "Purificação", "Estabilização"],
		correta: 1
	},
	{
		pergunta:
			"Qual é o órgão responsável por regulamentar a aviação civil internacional?",
		opcoes: [
			"FAA (Federal Aviation Administration)",
			"IATA (International Air Transport Association)",
			"ICAO (International Civil Aviation Organization)",
			"EASA (European Aviation Safety Agency)"
		],
		correta: 3
	},
	{
		pergunta:
			"Qual é o nome do movimento horizontal de uma aeronave ao redor do seu eixo longitudinal?",
		opcoes: ["Guinada", "Rolagem", "Arfagem", "Tangagem"],
		correta: 2
	}
];

const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector("#acertos span");

for (const item of perguntas) {
	const quizItem = template.content.cloneNode(true);
	quizItem.querySelector("h3").textContent = item.pergunta;

	for (let resposta of item.opcoes) {
		const dt = quizItem.querySelector("dl dt").cloneNode(true);
		dt.querySelector("span").textContent = resposta;
		dt
			.querySelector("input")
			.setAttribute("name", "pergunta-" + perguntas.indexOf(item));
		dt.querySelector("input").value = item.opcoes.indexOf(resposta);
		dt.querySelector("input").onchange = (event) => {
			const estaCorreta = event.target.value == item.correta;

			corretas.delete(item);
			if (estaCorreta) {
				corretas.add(item);
			}

			mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;
		};

		quizItem.querySelector("dl").appendChild(dt);
	}

	quizItem.querySelector("dl dt").remove();

	quiz.appendChild(quizItem);
}
