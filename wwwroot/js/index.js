//alert("Hello Word!");

var nome = document.querySelector("#exampleInputName");

nome.value = "TESTANDO";
nome.style.color = "blue";

var gender = document.querySelectorAll("#form-user-create [name=gender]:checked") //para gênero é assim que escolhe o valor selecionado. 

gender.value;
var birth = document.querySelector("#exampleInputBirth"); //para nascimento
birth.value;
var country = document.querySelector("#exampleInputCountry"); //para país
country.value;
var email = document.querySelector("#exampleInputEmail"); //para email
email.value;
var password = document.querySelector("#exampleInputPassword"); //para senha
password.value;
var photo = document.querySelector("#exampleInputFile"); //para arquivo
photo.value;
var admin = document.querySelector("#exampleInputAdmin"); //para admin
admin.value;



var fields = document.querySelectorAll("#form-user-create [name]"); //captura todos os campos que tem name

//para cada campo name executa a função
fields.forEach(function(field, index){

    console.log(field.id, field.name, field.value, field.checked, field.index);


});