function fazerlogin(){
    let nome = document.getElementById('nome').value
    let senha = document.getElementById('senha').value
    let mensagem = document.getElementById('mensagem')

    //testando o usuário senha
    if(nome === 'rogerioceni' && senha === '123'){
        mensagem.textContent = 'Acesso Permitido!'
       setTimeout(() => {
         window.location.href = "protegida.html"
       }, 3000);
        
    }else{
        mensagem.textContent = 'Acesso Negado!' 
    }
    
}