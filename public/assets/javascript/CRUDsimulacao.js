document.addEventListener('DOMContentLoaded', function () {
  const selectModelo = document.getElementById('selectModelo');
  const inputValor = document.getElementById('inputValor');
  const inputEntrada = document.getElementById('inputEntrada');
  const inputPrazo = document.getElementById('inputPrazo');
  const inputJuros = document.getElementById('inputJuros');
  const inputId = document.getElementById('inputId');
  const form = document.getElementById('form-simulacao');
  const tbody = document.getElementById('table-simulacoes');

  const urlSimulacoes = 'http://localhost:3000/simulacoes';
  const urlCarros = 'http://localhost:3000/info_carros';

  function calcularJuros(prazo) {
    prazo = parseInt(prazo) || 0;
    if (prazo <= 12) return 1.2;
    if (prazo <= 24) return 1.4;
    if (prazo <= 36) return 1.6;
    if (prazo <= 48) return 1.75;
    return 1.8;
  }

  inputPrazo.addEventListener('input', function () {
    inputJuros.value = calcularJuros(this.value);
  });

  function carregarModelos() {
    fetch(urlCarros)
      .then(res => res.json())
      .then(carros => {
        selectModelo.innerHTML = '<option value="">-- Selecione um modelo --</option>';
        carros.forEach(carro => {
          const option = document.createElement('option');
          option.value = carro.id;
          option.textContent = carro.nome;
          selectModelo.appendChild(option);
        });
      });
  }

  selectModelo.addEventListener('change', function () {
    if (!this.value) {
      inputValor.value = '';
      return;
    }

    fetch(`${urlCarros}/${this.value}`)
      .then(res => res.json())
      .then(carro => {
        inputValor.value = carro.preco;
      });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const usuarioLogado = JSON.parse(sessionStorage.getItem("usuarioLogado"));
    if (!usuarioLogado) {
      alert("Você precisa estar logado para editar uma simulação.");
      return;
    }

    const modeloId = selectModelo.value;
    const modeloNome = selectModelo.options[selectModelo.selectedIndex].text;
    const valorVeiculo = inputValor.value;
    const entrada = inputEntrada.value;
    const prazo = inputPrazo.value;
    const juros = calcularJuros(prazo);
    inputJuros.value = juros;

    if (!modeloId || !valorVeiculo || !entrada || !prazo) {
      alert('Preencha todos os campos!');
      return;
    }

    // Envia o id_usuario do usuário logado no PUT também para manter associação
    const simulacao = {
      modeloId,
      modeloNome,
      id_usuario: usuarioLogado.id,
      valorVeiculo,
      entrada,
      prazo: Number(prazo),
      juros: Number(juros)
    };

    const url = inputId.value ? `${urlSimulacoes}/${inputId.value}` : urlSimulacoes;
    const method = inputId.value ? 'PUT' : 'POST';

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(simulacao)
    })
      .then(() => {
        carregarSimulacoes();
        form.reset();
      })
      .catch(() => alert('Erro ao salvar'));
  });

  function formatarValor(valor) {
    if (typeof valor !== 'string') valor = String(valor);
    const numero = parseInt(valor.replace(/\D/g, '')) || 0;
    return 'R$ ' + numero.toLocaleString('pt-BR');
  }

  function carregarSimulacoes() {
    const usuarioLogado = JSON.parse(sessionStorage.getItem("usuarioLogado"));
    if (!usuarioLogado) {
      alert("Você precisa estar logado para ver suas simulações.");
      return;
    }

    fetch(urlSimulacoes)
      .then(res => res.json())
      .then(simulacoes => {
        tbody.innerHTML = '';

        // Mostrar só as simulações do usuário logado
        const simulacoesDoUsuario = simulacoes.filter(sim => sim.id_usuario === usuarioLogado.id);

        simulacoesDoUsuario.forEach(sim => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td>${sim.id}</td>
            <td>${sim.modeloNome}</td>
            <td>${formatarValor(sim.valorVeiculo)}</td>
            <td>${formatarValor(sim.entrada)}</td>
            <td>${sim.prazo} meses</td>
            <td>${sim.juros}%</td>
            <td>
              <button onclick="editarSimulacao('${sim.id}')" class="btn btn-sm btn-primary">Editar</button>
              <button onclick="excluirSimulacao('${sim.id}')" class="btn btn-sm btn-danger">Excluir</button>
              <a href="pagamento.html">
                <button type="button" class="btn btn-sm btn-success">Ir para Pagamento</button>
              </a>
            </td>
          `;
          tbody.appendChild(tr);
        });
      });
  }

  window.editarSimulacao = function (id) {
    fetch(`${urlSimulacoes}/${id}`)
      .then(res => res.json())
      .then(sim => {
        selectModelo.value = sim.modeloId;
        inputValor.value = sim.valorVeiculo;
        inputEntrada.value = sim.entrada;
        inputPrazo.value = sim.prazo;
        inputJuros.value = sim.juros;
        inputId.value = sim.id;
      });
  };

  window.excluirSimulacao = function (id) {
    if (confirm('Tem certeza que deseja excluir?')) {
      fetch(`${urlSimulacoes}/${id}`, { method: 'DELETE' })
        .then(() => carregarSimulacoes())
        .catch(() => alert('Erro ao excluir'));
    }
  };

  carregarModelos();
  carregarSimulacoes();
});
