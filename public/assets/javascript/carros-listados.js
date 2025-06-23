document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("carros-container");
  let carros = JSON.parse(localStorage.getItem("carros")) || [];

  function renderizarCarros() {
    container.innerHTML = "";

    carros.forEach((carro) => {
      const card = document.createElement("div");
      card.className = "col-md-4 mb-4";
      card.innerHTML = `
                <div class="card">
                    <img src="${carro.foto_1}" class="card-img-top" alt="${carro.nome}">
                    <div class="card-body">
                        <h5 class="card-title">${carro.marca} - ${carro.nome}</h5>
                        <p class="card-text">
                            <strong>Motor:</strong> ${carro.motor}<br>
                            <strong>Ano:</strong> ${carro.ano_carro}<br>
                            <strong>KM:</strong> ${carro.km_rodados}<br>
                            <strong>Câmbio:</strong> ${carro.cambio}<br>
                            <strong>Combustível:</strong> ${carro.combustivel}<br>
                            <strong>Troca:</strong> ${carro.troca}<br>
                            <strong>Preço:</strong> ${carro.preco}
                        </p>
                        <button class="btn btn-primary btn-editar" data-id="${carro.id}"><i class="fas fa-pen"></i></button>
                        <button class="btn btn-danger btn-deletar" data-id="${carro.id}"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            `;
      container.appendChild(card);
    });

    adicionarEventos();
  }

  function adicionarEventos() {
    const botoesEditar = document.querySelectorAll(".btn-editar");
    const botoesDeletar = document.querySelectorAll(".btn-deletar");

    botoesEditar.forEach((btn) => {
      btn.addEventListener("click", () => editarCarro(btn.dataset.id));
    });

    botoesDeletar.forEach((btn) => {
      btn.addEventListener("click", () => deletarCarro(btn.dataset.id));
    });
  }

  function editarCarro(id) {
    const carro = carros.find((c) => c.id === id);
    const novosDados = {
      marca: prompt("Marca:", carro.marca) || carro.marca,
      nome: prompt("Nome:", carro.nome) || carro.nome,
      motor: prompt("Motor:", carro.motor) || carro.motor,
      ano_carro: prompt("Ano do carro:", carro.ano_carro) || carro.ano_carro,
      km_rodados: prompt("KM rodados:", carro.km_rodados) || carro.km_rodados,
      cambio: prompt("Câmbio:", carro.cambio) || carro.cambio,
      combustivel:
        prompt("Combustível:", carro.combustivel) || carro.combustivel,
      troca: prompt("Troca? (Sim/Não):", carro.troca) || carro.troca,
      preco: prompt("Preço:", carro.preco) || carro.preco,
      foto_1: prompt("Foto 1 (URL):", carro.foto_1) || carro.foto_1,
    };

    Object.assign(carro, novosDados);

    localStorage.setItem("carros", JSON.stringify(carros));
    renderizarCarros();
  }

  function deletarCarro(id) {
    if (confirm("Tem certeza que deseja excluir este carro?")) {
      carros = carros.filter((c) => c.id !== id);
      localStorage.setItem("carros", JSON.stringify(carros));
      renderizarCarros();
    }
  }

  renderizarCarros();
});