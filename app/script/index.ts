/* Pegando inputs */
const input_dia = document.getElementById("dia") as HTMLInputElement;
const input_mes = document.getElementById("mes") as HTMLInputElement;
const input_ano = document.getElementById("ano") as HTMLInputElement;
/* Pegando campo onde será colocado os resultados*/
const resultados = document.getElementById("msg-result") as HTMLDivElement;
/* Pegando submit */
const btn_submit = document.getElementById("submit-btn") as HTMLButtonElement;

/* Enum que cria os elementos e atribui o tipo number para eles  */
/* Cria uma função que cria o elemento HTML e insere ele */
const carregaLista = (
  dias_idade: number,
  meses_idade: number,
  anos_idade: number
) => {
  resultados.innerHTML = "";

  let item = document.createElement("div");
  item.classList.add("msg-container");

  item.innerHTML = `
  <section class="msg-moths"><p class="text">${dias_idade}</p> days</section>
  <section class="msg-moths"><p class="text">${meses_idade}</p> months</section>
  <section class="msg-days"><p class="text">${anos_idade}</p> years</section>`;
  resultados.appendChild(item);
};

/* ArrowFunction para carregar os resultados */
/* Adicionando evento aos inputs */
btn_submit.addEventListener("click", () => {
  /* Troca o valor de variável de HTML par number */
  /* parseInt função para transformar o valor */
  const dia = parseInt(input_dia.value, 10);
  const mes = parseInt(input_mes.value, 10);
  const ano = parseInt(input_ano.value, 10);

  /* Pegando data atual */
  const date = new Date();
  const anoAtual = date.getFullYear();
  const mesAtual = date.getMonth() + 1;
  const diaAtual = date.getDate();

  /* Calculando idade */
  /* Subtrai o valor do dia, mes e ano atual pelo valor convertido pelo parseInt */
  const dias_idade = diaAtual - dia;
  const meses_idade = mesAtual - mes;
  const anos_idade = anoAtual - ano;

  /* Caso valores vazios aparecer erro */
  /* isNaN = Is not a number */
  if (isNaN(dias_idade) || isNaN(meses_idade) || isNaN(anos_idade)) {
    alert("Preencha todos os campos com valores válidos");
    return;
  }

  /* Chamando a função para carregar os resultados */
  /* Passa os parâmetros que o enum pede */
  carregaLista(dias_idade, meses_idade, anos_idade);
});
