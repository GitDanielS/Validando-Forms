function cadastrar() {
    let aviso = document.getElementById("aviso")
    let inputNome = document.getElementById("nome")
    let inputEmail = document.getElementById("email")
    let inputSenha = document.getElementById("senha")

    // Validando os campos vazios
    if(inputNome.value.trim() !== "" && inputEmail.value.trim() !== "" && inputSenha.value.trim() !== ""){
        // Resetando as cores padrão das bordas
        inputSenha.style.borderColor = ""
        inputEmail.style.borderColor = ""
        inputNome.style.borderColor = ""

        // Removendo uma classe tailwind, para aparecer a mensagem de aviso
        aviso.classList.remove("invisible")
    }else{
        if(inputNome.value.trim() === ""){
            // Adicionando uma class tailwind para deixar o aviso invisivel
            aviso.classList.add("invisible")

            inputEmail.style.borderColor = ""
            inputSenha.style.borderColor = ""

            //Melhorando a experiência do usuario 
            inputNome.style.borderColor = "red"
            inputNome.placeholder = "* campo obrigatório"
        }
        else if(inputEmail.value.trim() === ""){
            // Adicionando uma class tailwind para deixar o aviso invisivel
            aviso.classList.add("invisible")

            inputSenha.style.borderColor = ""
            inputNome.style.borderColor = ""

            //Melhorando a experiência do usuario 
            inputEmail.style.borderColor = "red"
            inputEmail.placeholder = "* campo obrigatório"
        }
        else if(inputSenha.value.trim() === ""){
            // Adicionando uma class tailwind para deixar o aviso invisivel
            aviso.classList.add("invisible")
            
            inputEmail.style.borderColor = ""
            inputNome.style.borderColor = ""

            //Melhorando a experiência do usuario 
            inputSenha.style.borderColor = "red"
            inputSenha.placeholder = "* campo obrigatório"
        }
    }

}