let listaAmigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo").value.trim();
    
    if (inputAmigo === "") {
        alert("ingrese un nombre valido");
    } else {
        listaAmigos.push(inputAmigo);
        console.log(listaAmigos);
        limpiarCaja();
        mostrarLista();
    }
}
function limpiarCaja() {
    document.getElementById("amigo").value = "";
}

// Función para mostrar la lista en la página
function mostrarLista() {
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = ""; // Limpiar contenido previo

    listaAmigos.forEach(amigo => {
        let li = document.createElement("li"); // Crear un nuevo elemento de lista
        li.textContent = amigo; // Asignar el texto
        listaHTML.appendChild(li); // Agregarlo al contenedor
    });
}
//sortear amigo secreto //
function sortearAmigo(){
  let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
  let amigoSecreto = listaAmigos[indiceAleatorio];
  console.log(amigoSecreto);

  let textoAmigoSecreto = document.getElementById("resultado")
  textoAmigoSecreto.innerHTML = `Tu amigo secreto es: ${amigoSecreto}`; 
}
