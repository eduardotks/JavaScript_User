//captura todos os campos do formulário(otimiza a busca)
var fields = document.querySelectorAll("#form-user-create [name]"); //captura todos os campos que tem name
var user = {};
//-------------------------
//dataUser = dados do usuário
function addLine(dataUser) {

    console.log(dataUser);

    var tr = document.createElement("tr");
    tr.innerHTML =
        `

        <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
        <td>${dataUser.name}</td>
        <td>${dataUser.email}</td>
        <td>${dataUser.admin}</td>
        <td>${dataUser.birth}</td>
        <td>
            <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
            <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
        </td>

    `;

    document.getElementById("table-users").appendChild(tr); //acrescenta linha dentro da tabela usando o ID da tabela.

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

    //
    var objectUser = new User(
        user.name,
        user.gender,
        user.birth,
        user.country,
        user.email,
        user.password,
        user.photo,
        user.admin
        );

    //addLine(user); //passando json
    addLine(objectUser); //passando objeto

});


