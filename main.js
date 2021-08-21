
function consultaCep() {

    let meuCep = document.getElementById("cep").value;

    $(".barra-progresso").show();
    let url = "https://viacep.com.br/ws/" + meuCep + "/json/";

    $.ajax({
        url: url,
        type: "GET",
        success: function (response) {
            console.log(response);

            $("#localidade").html(response.localidade);
            $("#bairro").html(response.bairro);
            $("#uf").html(response.uf);
            $("#logradouro").html(response.logradouro);

            $("#titulo_cep").html("CEP " + response.cep);

            $(".cep").show();
            $(".barra-progresso").hide();
        }

    })

}

$(function () {
    $(".cep").hide();
    $(".barra-progresso").hide();
})
//retorn response
// cep: "01001-000",
// logradouro: "Praça da Sé",
// complemento: "lado ímpar",
// bairro: "Sé",
// localidade: "São Paulo",
// uf: "SP",
// ibge: "3550308",
// gia: "1004",
// ddd: "11",
// siafi: "7107",