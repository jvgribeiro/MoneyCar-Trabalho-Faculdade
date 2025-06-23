document.getElementById("carForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const carro = {
    id: document.getElementById("id").value,
    marca: document.getElementById("marca").value,
    nome: document.getElementById("nome").value,
    motor: document.getElementById("motor").value,
    ano_carro: document.getElementById("ano_carro").value,
    km_rodados: document.getElementById("km_rodados").value,
    cambio: document.getElementById("cambio").value,
    combustivel: document.getElementById("combustivel").value,
    troca: document.getElementById("troca").value,
    preco: document.getElementById("preco").value,
    foto_1: document.getElementById("foto_1").value,
    foto_2: document.getElementById("foto_2").value,
    foto_3: document.getElementById("foto_3").value,
    foto_4: document.getElementById("foto_4").value,
    foto_5: document.getElementById("foto_5").value,
  };

  let carros = JSON.parse(localStorage.getItem("carros")) || [];

  const carroExistente = carros.find((c) => c.id === carro.id);
  if (carroExistente) {
    alert("ID já cadastrado. Utilize outro ID.");
    return;
  }

  carros.push(carro);
  localStorage.setItem("carros", JSON.stringify(carros));

  alert("Carro cadastrado com sucesso!");
  document.getElementById("carForm").reset();
});