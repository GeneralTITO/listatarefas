const listaTarefas = [
  {
    titulo: "asd1",
    tipo: "urgente",
  },
  {
    titulo: "asd2",
    tipo: "normal",
  },
  {
    titulo: "asd3",
    tipo: "deBoa",
  },
  {
    titulo: "asdF",
    tipo: undefined,
  },
];
tagUl = document.querySelector("ul");
function listarTarefas(lista, referenciaHTML) {
  referenciaHTML.innerHTML = "";
  for (let i of lista) {
    let tagLi = document.createElement("li");
    tagLi.innerHTML = `
      <div class="card">
        <div><span class="ponto ${i.tipo}"></span>
              <span>${i.titulo}</span>
        </div>
        <button class='excluir'>excluir</button>
      </div>`;
    referenciaHTML.append(tagLi);
  }

  //     tagLi.innerHTML = `<li>
  //     <div class="card">
  //     <div>
  //     <span class="ponto ${x}"></span>
  //     <span>${titulo.value}</span>
  //     </div>
  //     <button class='excluir'>excluir</button>
  //     </div>
  //     </li>`;
}
listarTarefas(listaTarefas, tagUl);

function addTarefas() {
  let nome = document.querySelector("#name");
  let prazo = document.querySelector("#type");

  if (nome.value.length > 0) {
    let novaTarefa = {
      titulo: nome.value,
      tipo: prazo.value,
    };
    listaTarefas.push(novaTarefa);
  }
  listarTarefas(listaTarefas, tagUl);
}
const buttonAdd = document.querySelector("#bAdd");
const buttonExc = document.querySelectorAll(".excluir");
document.addEventListener("click", function (e) {
  if (e.target.id === buttonAdd.id) {
    addTarefas();
    listarTarefas(listaTarefas, tagUl);
  }
  if (e.target.className === "excluir") {
    let liR = e.target.closest("li");
    for (x of listaTarefas) {
      if (liR.innerText.includes(x.titulo)) {
        let h = listaTarefas.indexOf(x);
        listaTarefas.splice(h, 1);
      }
    }
    liR.remove();
  }
});
