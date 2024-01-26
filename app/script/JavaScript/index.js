"use strict";
const input_dia = document.getElementById("dia");
const input_mes = document.getElementById("mes");
const input_ano = document.getElementById("ano");
const resultados = document.getElementById("msg-result");
const btn_submit = document.getElementById("submit-btn");
const carregaLista = (dias_idade, meses_idade, anos_idade) => {
    resultados.innerHTML = "";
    let item = document.createElement("div");
    item.classList.add("msg-container");
    item.innerHTML = `
  <section class="msg-moths"><p class="text">${dias_idade}</p> days</section>
  <section class="msg-moths"><p class="text">${meses_idade}</p> months</section>
  <section class="msg-days"><p class="text">${anos_idade}</p> years</section>`;
    resultados.appendChild(item);
};
btn_submit.addEventListener("click", () => {
    const dia = parseInt(input_dia.value, 10);
    const mes = parseInt(input_mes.value, 10);
    const ano = parseInt(input_ano.value, 10);
    const date = new Date();
    const anoAtual = date.getFullYear();
    const mesAtual = date.getMonth() + 1;
    const diaAtual = date.getDate();
    const dias_idade = diaAtual - dia;
    const meses_idade = mesAtual - mes;
    const anos_idade = anoAtual - ano;
    if (isNaN(dias_idade) || isNaN(meses_idade) || isNaN(anos_idade)) {
        alert("Preencha todos os campos com valores válidos");
        return;
    }
    carregaLista(dias_idade, meses_idade, anos_idade);
});
