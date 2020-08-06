var tabela = document.querySelector("#tabela-pacientes");  //realiza a ação de 2 cliques pra remover um paciente
tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
});