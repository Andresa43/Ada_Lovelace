document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

var nome = document.getElementById("nome-usuario").Value
var email = document.getElementById("email-usuario").value 
var telefone = document.getElementById("telefone").value

function validaFormulario() {
    if ( nome != "" && email != "" &&  telefone != "") {
        alert("Protinho! Você receberá as novidades no email")
    } else {
        alert("Por favor, preencha os campos nome e email")
    }
}

