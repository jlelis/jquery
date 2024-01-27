
function consultaCep() {

    const meuCep = document.getElementById("cep").value;
    if (meuCep.length > 8) {
        alert(meuCep);

        $(".barra-progresso").show();
        const url = "https://viacep.com.br/ws/" + meuCep + "/json/";

        $.ajax({
            url: url,
            type: "GET",
            dataType: "json",
            success: function (response) {   

                 

                if (response.erro!== undefined) {

                    alert("CEP inválido ou não encontrado");
                    $(".barra-progresso").hide();
                    $(".cep").show();
                }else{
                    $("#localidade").html(response.localidade);
                    $("#bairro").html(response.bairro);
                    $("#uf").html(response.uf);
                    $("#logradouro").html(response.logradouro);

                    $("#titulo_cep").html("CEP " + response.cep);

                    $(".cep").show();
                    $(".barra-progresso").hide();
                }
            }

        });
    }
    else {
        alert("Formato de CEP inválido.");

    }

}

$(function () {
    $("#cep").mask("99999-999");
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