const pagamento = JSON.parse(localStorage.getItem("pagamentoSelecionado"));

if (pagamento) {
  document.getElementById("contrato_id_cliente").textContent =
    pagamento.id_cliente;
  document.getElementById("contrato_id_financiamento").textContent =
    pagamento.id_financiamento;
  document.getElementById("contrato_valor_total").textContent =
    pagamento.valor_total;
  document.getElementById("contrato_valor_parcela").textContent =
    pagamento.valor_parcela;
  document.getElementById("contrato_total_parcela").textContent =
    pagamento.total_parcela;
  document.getElementById("contrato_nr_parcela").textContent =
    pagamento.nr_parcela;
  document.getElementById("contrato_data").textContent = pagamento.data;
  document.getElementById("contrato_forma").textContent = pagamento.forma;
  document.getElementById("contrato_status").textContent = pagamento.status;
} else {
  alert("Nenhum dado de pagamento encontrado.");
  window.location.href = "pagamento.html";
}

function carregarContrato() {
  const contratoSalvo =
    JSON.parse(localStorage.getItem("contrato")) || pagamento;

  document.getElementById("contrato_id_cliente").textContent =
    contratoSalvo.id_cliente;
  document.getElementById("contrato_id_financiamento").textContent =
    contratoSalvo.id_financiamento;
  document.getElementById("contrato_valor_total").textContent =
    contratoSalvo.valor_total;
  document.getElementById("contrato_valor_parcela").textContent =
    contratoSalvo.valor_parcela;
  document.getElementById("contrato_total_parcela").textContent =
    contratoSalvo.total_parcela;
  document.getElementById("contrato_nr_parcela").textContent =
    contratoSalvo.nr_parcela;
  document.getElementById("contrato_data").textContent = contratoSalvo.data;
  document.getElementById("contrato_forma").textContent = contratoSalvo.forma;
  document.getElementById("contrato_status").textContent = contratoSalvo.status;
  document.getElementById("contrato_assinatura").textContent =
    contratoSalvo.assinatura || "Não assinou";
}

document.getElementById("btnSalvarAssinatura").addEventListener("click", () => {
  const assinatura = document.getElementById("input_assinatura").value.trim();

  if (assinatura === "") {
    alert("Por favor, digite sua assinatura.");
    return;
  }

  const contrato = {
    id_cliente: document.getElementById("contrato_id_cliente").textContent,
    id_financiamento: document.getElementById("contrato_id_financiamento")
      .textContent,
    valor_total: document.getElementById("contrato_valor_total").textContent,
    valor_parcela: document.getElementById("contrato_valor_parcela")
      .textContent,
    total_parcela: document.getElementById("contrato_total_parcela")
      .textContent,
    nr_parcela: document.getElementById("contrato_nr_parcela").textContent,
    data: document.getElementById("contrato_data").textContent,
    forma: document.getElementById("contrato_forma").textContent,
    status: document.getElementById("contrato_status").textContent,
    assinatura: assinatura,
  };

  localStorage.setItem("contrato", JSON.stringify(contrato));

  alert("Assinatura salva com sucesso!");
  carregarContrato();
});

document.getElementById("btnEditarContrato").addEventListener("click", () => {
  const contrato = {
    id_cliente:
      prompt(
        "ID do Cliente:",
        document.getElementById("contrato_id_cliente").textContent
      ) || document.getElementById("contrato_id_cliente").textContent,
    id_financiamento:
      prompt(
        "ID do Financiamento:",
        document.getElementById("contrato_id_financiamento").textContent
      ) || document.getElementById("contrato_id_financiamento").textContent,
    valor_total:
      prompt(
        "Valor Total:",
        document.getElementById("contrato_valor_total").textContent
      ) || document.getElementById("contrato_valor_total").textContent,
    valor_parcela:
      prompt(
        "Valor da Parcela:",
        document.getElementById("contrato_valor_parcela").textContent
      ) || document.getElementById("contrato_valor_parcela").textContent,
    total_parcela:
      prompt(
        "Total de Parcelas:",
        document.getElementById("contrato_total_parcela").textContent
      ) || document.getElementById("contrato_total_parcela").textContent,
    nr_parcela:
      prompt(
        "Número da Parcela:",
        document.getElementById("contrato_nr_parcela").textContent
      ) || document.getElementById("contrato_nr_parcela").textContent,
    data:
      prompt(
        "Data do Pagamento:",
        document.getElementById("contrato_data").textContent
      ) || document.getElementById("contrato_data").textContent,
    forma:
      prompt(
        "Forma de Pagamento:",
        document.getElementById("contrato_forma").textContent
      ) || document.getElementById("contrato_forma").textContent,
    status:
      prompt(
        "Status:",
        document.getElementById("contrato_status").textContent
      ) || document.getElementById("contrato_status").textContent,
    assinatura: document.getElementById("contrato_assinatura").textContent,
  };

  localStorage.setItem("contrato", JSON.stringify(contrato));
  alert("Contrato atualizado com sucesso!");
  carregarContrato();
});

document.getElementById("btnExcluirContrato").addEventListener("click", () => {
  const confirmar = confirm("Tem certeza que deseja excluir este contrato?");
  if (confirmar) {
    localStorage.removeItem("contrato");
    alert("Contrato excluído com sucesso.");
    window.location.href = "pagamento.html";
  }
});
