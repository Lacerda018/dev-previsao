// ------ variáveis -----

/*let abacate = "deu bom"

console.log(abacate)

function mario() {
    console.log("Estou dentro  da função")
}

mario() // chamando a função */






// ------ variáveis -----

let chave = "bf61423ff0c2b567c07bb73499a94b55"






// --------- funções -------

function colocarNaTela(dados){
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name //innerHTML == troca o texto no html
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" 
        + dados.weather[0].icon 
        + ".png"
}

// async == utilizado quando se vai um servidor web.
async function buscarCidade(cidade){
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" 
        + cidade 
        + "&appid=" 
        + chave
        + "&lang=pt_br"
        +"&units=metric")
        .then( resposta => resposta.json())
        
        colocarNaTela(dados)
    //console.log(dados)
}

function cliqueiNoBotao(){
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}