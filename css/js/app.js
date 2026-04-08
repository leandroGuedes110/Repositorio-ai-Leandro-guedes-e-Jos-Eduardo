function adicionarProduto(nome, preco) {
  const item = document.createElement("li");
  
  item.textContent = `${nome} - R$ ${preco}`;
  
  const lista = document.getElementById("lista-produtos");
  
  lista.appendChild(item);
}

adicionarProduto("COMPUTADOR", 100.90);
