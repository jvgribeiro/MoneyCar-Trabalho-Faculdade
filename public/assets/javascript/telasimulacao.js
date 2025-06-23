document.addEventListener('DOMContentLoaded', () => {
  const selectModelo = document.getElementById('modelo');
  const inputValorVeiculo = document.getElementById('valorVeiculo');
  const btn = document.getElementById('btn_continuar');

  function carregarModelos() {
    fetch('http://localhost:3000/info_carros')
      .then(res => res.json())
      .then(lista => {
        selectModelo.innerHTML = '<option value="">-- Selecione um modelo --</option>';
        lista.forEach(carro => {
          const option = document.createElement('option');
          option.value = carro.id;
          option.textContent = carro.nome;
          selectModelo.appendChild(option);
        });
      })
      .catch(err => console.error('Erro ao carregar modelos:', err));
  }

  selectModelo.addEventListener('change', () => {
    const idSelecionado = selectModelo.value;

    if (!idSelecionado) {
      inputValorVeiculo.value = '';
      return;
    }

    fetch(`http://localhost:3000/info_carros/${idSelecionado}`)
      .then(res => res.json())
      .then(carro => {
        inputValorVeiculo.value = carro.preco;
      })
      .catch(err => {
        console.error('Erro ao buscar o carro:', err);
        inputValorVeiculo.value = '';
      });
  });

  function limparMoeda(valor) {
    return parseFloat(valor.replace(/[R$\s.]/g, '').replace(',', '.'));
  }

  function calcularJuros(prazo) {
    if (prazo <= 12) return 1.2;
    if (prazo <= 24) return 1.4;
    if (prazo <= 36) return 1.6;
    if (prazo <= 48) return 1.75;
    return 1.8;
  }

  btn.addEventListener('click', async (e) => {
    e.preventDefault();

    // Pega o usuário logado do sessionStorage
    const usuarioLogado = JSON.parse(sessionStorage.getItem("usuarioLogado"));
    if (!usuarioLogado) {
      alert("Você precisa estar logado para fazer uma simulação.");
      return;
    }

    const modeloId = selectModelo.value;

    if (!modeloId) {
      alert('Selecione um modelo.');
      return;
    }

    try {
      const resposta = await fetch(`http://localhost:3000/info_carros/${modeloId}`);
      const carro = await resposta.json();

      if (!carro || !carro.nome) {
        alert('Modelo inválido.');
        return;
      }

      const valorBruto = inputValorVeiculo.value;
      const entradaBruta = document.getElementById('entrada').value;
      const prazo = parseInt(document.getElementById('prazoAtual').value);
      const juros = calcularJuros(prazo);

      if (!valorBruto || !entradaBruta || !prazo || isNaN(juros)) {
        alert('Preencha todos os campos corretamente.');
        return;
      }

      const valorVeiculo = limparMoeda(valorBruto);
      const entrada = limparMoeda(entradaBruta);

      // Objeto simulacao com id_usuario do usuário logado
      const simulacao = {
        modeloId: modeloId,
        modeloNome: carro.nome,
        id_usuario: usuarioLogado.id,
        valorVeiculo: valorVeiculo,
        entrada: entrada,
        prazo,
        juros
      };

      await fetch("http://localhost:3000/simulacoes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(simulacao)
      });

      window.location.href = "CRUDsimulacao.html";
    } catch (erro) {
      console.error("Erro ao salvar simulação:", erro);
      alert("Erro ao salvar. Verifique se o servidor JSON Server está rodando.");
    }
  });

  carregarModelos();
});
