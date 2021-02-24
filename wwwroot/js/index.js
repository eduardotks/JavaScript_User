//captura todos os campos do formulário(otimiza a busca)
var fields = document.querySelectorAll("#form-user-create [name]"); //captura todos os campos que tem name

//para cada campo name executa a função
fields.forEach(function(field, index){

    if(field.name == "gender")
    {
        if(field.checked){
            console.log("SIM", gender);
        }
        //console.log("SIM", field);
    }
    else{
        console.log("NAO");
    }

});