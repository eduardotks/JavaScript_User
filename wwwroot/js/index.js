//captura todos os campos do formulário(otimiza a busca)
var fields = document.querySelectorAll("#form-user-create [name]"); //captura todos os campos que tem name
var user = {};
//-------------------------
//dataUser = dados do usuário
function addLine(dataUser)
{
    console.log("addLine", dataUser)
}
//-------------------------
document.getElementById("form-user-create").addEventListener("submit", () => {

    event.preventDefault(); //não envia mais o submit automaticamente //para o evento de submit;
    //para cada campo name executa a função
    fields.forEach(function (field, index) {

        if (field.name == "gender") {
            if (field.checked) {
                user[field.name] = field.value;
            }
            //console.log("SIM", field);
        }
        else {
            //como aqui passa todos os campos
            user[field.name] = field.value;
        }

    });

    addLine(user);

});


