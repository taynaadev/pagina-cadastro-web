function cadastrar() {
    let nome = document.getElementById("nome").value;

    let lista = document.getElementById("lista");
    let item = document.createElement("li");

    item.textContent = nome;
    lista.appendChild(item);
}
