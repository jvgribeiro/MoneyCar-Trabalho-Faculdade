document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  fetch(`http://localhost:3000/info_carros/${id}`)
    .then((res) => res.json())
    .then((detalhes) => {
      document.title = `Veja os detalhes do ${detalhes.nome}`;
      document.getElementById("marca").innerText = detalhes.marca;
      document.getElementById("nome").innerText = detalhes.nome;
      document.getElementById("motor").innerText = detalhes.motor;
      document.getElementById("ano_carro").innerText = detalhes.ano_carro;
      document.getElementById("km_rodados").innerText = detalhes.km_rodados;
      document.getElementById("cambio").innerText = detalhes.cambio;
      document.getElementById("combustivel").innerText = detalhes.combustivel;
      document.getElementById("cor").innerText = detalhes.cor;
      document.getElementById("troca").innerText = detalhes.troca;
      document.getElementById("preco").innerText = detalhes.preco;
      document.getElementById("foto_1").src = detalhes.foto_1;
      document.getElementById("foto_2").src = detalhes.foto_2;
      document.getElementById("foto_3").src = detalhes.foto_3;
      document.getElementById("foto_4").src = detalhes.foto_4;
      document.getElementById("foto_5").src = detalhes.foto_5;
    })
    .catch((error) => {
      console.error("Erro ao carregar os detalhes do carro:", error);
      alert("Carro não encontrado!");
    });

  // COMENTÁRIOS POR CARRO 
  const form = document.getElementById("comentarioForm");
  const lista = document.getElementById("listaComentarios");

  if (form && lista && id) {
    const storageKey = `comentarios_carro_${id}`;
    let comentarios = JSON.parse(localStorage.getItem(storageKey)) || [];

    function salvarLocalStorage() {
      localStorage.setItem(storageKey, JSON.stringify(comentarios));
    }

    function gerarEstrelas(qtd) {
      return "⭐".repeat(qtd);
    }

    function atualizarLista() {
      lista.innerHTML = "";
      comentarios.forEach((comentario) => {
        const li = document.createElement("li");
        li.className = "list-group-item";

        li.innerHTML = `
          <strong>${comentario.nome}</strong> - ${gerarEstrelas(comentario.avaliacao)}<br>
          <span>${comentario.texto}</span>
          <div class="mt-2">
            <button class="btn btn-sm btn-secondary me-2" onclick="editarComentario(${comentario.id})">Editar</button>
            <button class="btn btn-sm btn-danger" onclick="removerComentario(${comentario.id})">Excluir</button>
          </div>
        `;
        lista.appendChild(li);
      });
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nome = document.getElementById("nomeUsuario").value;
      const texto = document.getElementById("comentarioTexto").value;
      const avaliacao = parseInt(document.getElementById("avaliacao").value);

      const novoComentario = {
        id: Date.now(),
        nome,
        texto,
        avaliacao
      };

      comentarios.push(novoComentario);
      salvarLocalStorage();
      atualizarLista();
      form.reset();
    });

    window.removerComentario = function (idComentario) {
      comentarios = comentarios.filter(c => c.id !== idComentario);
      salvarLocalStorage();
      atualizarLista();
    };

    window.editarComentario = function (idComentario) {
      const comentario = comentarios.find(c => c.id === idComentario);
      if (comentario) {
        const novoTexto = prompt("Edite seu comentário:", comentario.texto);
        const novaAvaliacao = prompt("Edite sua nota (1 a 5):", comentario.avaliacao);
        if (novoTexto !== null && novaAvaliacao !== null && novaAvaliacao >= 1 && novaAvaliacao <= 5) {
          comentario.texto = novoTexto;
          comentario.avaliacao = parseInt(novaAvaliacao);
          salvarLocalStorage();
          atualizarLista();
        }
      }
    };

    atualizarLista();
  }
});
