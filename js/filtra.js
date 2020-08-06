var campoFiltro = document.querySelector("#filtrar-tabela"); 

campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){                                      //add a classe inivisivel
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");

            if(expressao.test(nome)){                              //add e remove a classe inivisel de acordo com
                paciente.classList.remove("invisivel");            //o que foi digitado com a expressao regular
            }else{
                paciente.classList.add("invisivel");
            }
        }
    }else{
        for(var i = 0; i < pacientes.length; i++){                 //remove a classe invisivel
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});