const API = "http://localhost:3000";

async function carregar() {
  const res = await fetch(API + '/carros');
  const dados = await res.json();

  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  dados.forEach((carro, index) => {
    lista.innerHTML += `
      <tr>
        <td>${carro.nome}</td>
        <td>${carro.marca}</td>
        <td>${carro.ano}</td>
        <td>R$ ${carro.preco}</td>
        <td>
          <button onclick="remover(${index})">Excluir</button>
        </td>
      </tr>
    `;
  });
}

async function adicionar() {
  const nome = document.getElementById("nome").value;
  const marca = document.getElementById("marca").value;
  const ano = document.getElementById("ano").value;
  const preco = document.getElementById("preco").value;

  await fetch(API + '/carros' , {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nome, marca, ano, preco }),
  });

  carregar();
}

async function remover(index) {
  await fetch(`${API}/${index}`, {
    method: "DELETE",
  });

  carregar();
}

carregar();