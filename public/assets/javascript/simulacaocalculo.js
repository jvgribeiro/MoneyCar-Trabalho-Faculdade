const sliderPrazo = document.getElementById('juros');
const inputPrazo = document.getElementById('prazoAtual');
const taxaExibida = document.getElementById('taxaJuros');

function taxaPorPrazo(prazo) {
  if (prazo <= 12) return 0.012;
  if (prazo <= 24) return 0.014;
  if (prazo <= 36) return 0.016;
  if (prazo <= 48) return 0.0175;
  return 0.018;
}

function atualizarTaxa() {
  let prazo = parseInt(sliderPrazo.value);
  taxaExibida.textContent = (taxaPorPrazo(prazo) * 100).toFixed(2) + '% a.m';
}

sliderPrazo.addEventListener('input', () => {
  inputPrazo.value = sliderPrazo.value; // atualiza o número quando mexe na barra
  atualizarTaxa();
});

inputPrazo.addEventListener('input', () => {
  let valor = parseInt(inputPrazo.value);
  // garante que o valor fique entre 12 e 60
  if (valor < 12) valor = 12;
  if (valor > 60) valor = 60;
  inputPrazo.value = valor;
  sliderPrazo.value = valor; // atualiza a barra quando mexe no número
  atualizarTaxa();
});

// Inicializa a taxa no carregamento da página
atualizarTaxa();


