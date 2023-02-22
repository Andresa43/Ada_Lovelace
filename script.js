document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)


function validaFormulario() {
    if (document.getElementById("nome-usuario").Value != "" && document.getElementById("email-usuario").value != "" && document.getElementById("telefone").value != "") {
        alert("Protinho! Você receberá as novidades no email")
    } else {
        alert("Por favor, preencha os campos nome e email")
    }
}

