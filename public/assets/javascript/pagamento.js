const form = document.getElementById('formPagamento');
const tabela = document.querySelector('#tabelaPagamentos tbody');
let editandoId = null;

const carregarPagamentos = async () => {
    try {
        const res = await fetch('http://localhost:3000/pagamentos');
        const dados = await res.json();
        tabela.innerHTML = '';

        dados.forEach(p => {
            const linha = document.createElement('tr');
            linha.innerHTML = `
                <td>${p.id}</td>
                <td>${p.id_cliente}</td>
                <td>${p.id_financiamento}</td>
                <td>${p.valor_total}</td>
                <td>${p.valor_parcela}</td>
                <td>${p.total_parcela}</td>
                <td>${p.nr_parcela}</td>
                <td>${p.data}</td>
                <td>${p.forma}</td>
                <td>${p.status}</td>
                <td class="d-flex gap-1 flex-wrap">
                    <button class="btn btn-sm btn-warning" onclick='editar(${JSON.stringify(p)})'>Editar</button>
                    <button class="btn btn-sm btn-danger" onclick="excluir(${p.id})">Excluir</button>
                    <button class="btn btn-sm btn-primary" onclick='gerarContrato(${JSON.stringify(p)})'>Gerar Contrato</button>
                </td>
            `;
            tabela.appendChild(linha);
        });
    } catch (error) {
        console.error('Erro ao carregar pagamentos:', error);
    }
};

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const dados = {
        id_cliente: form.id_cliente.value,
        id_financiamento: form.id_financiamento.value,
        valor_total: form.valor_total.value,
        valor_parcela: form.valor_parcela.value,
        total_parcela: Number(form.total_parcela.value),
        nr_parcela: Number(form.nr_parcela.value),
        data: form.data.value,
        forma: form.forma.value,
        status: form.status.value,
    };

    if (editandoId) {
        await fetch(`http://localhost:3000/pagamentos/${editandoId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados),
        });
        editandoId = null;
    } else {
        await fetch('http://localhost:3000/pagamentos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados),
        });
    }

    form.reset();
    carregarPagamentos();
});

async function excluir(id) {
    await fetch(`http://localhost:3000/pagamentos/${id}`, {
        method: 'DELETE'
    });
    carregarPagamentos();
}

function editar(p) {
    form.id_cliente.value = p.id_cliente;
    form.id_financiamento.value = p.id_financiamento;
    form.valor_total.value = p.valor_total;
    form.valor_parcela.value = p.valor_parcela;
    form.total_parcela.value = p.total_parcela;
    form.nr_parcela.value = p.nr_parcela;
    form.data.value = p.data;
    form.forma.value = p.forma;
    form.status.value = p.status;
    editandoId = p.id;
}

function gerarContrato(p) {
    localStorage.setItem('pagamentoSelecionado', JSON.stringify(p));
    window.location.href = 'contrato.html';
}

carregarPagamentos();
