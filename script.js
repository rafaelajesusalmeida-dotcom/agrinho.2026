// -------------------------------
// Calculadora de Consumo de Água
// -------------------------------
document.getElementById("form-calculadora")
.addEventListener("submit", function(event){
    event.preventDefault();

    const atividade = document.getElementById("atividade").value;
    const litros = Number(document.getElementById("agua").value);

    if(!atividade || litros < 0 || isNaN(litros)){
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    let mensagem = "";

    if(litros <= 100){
        mensagem = `✅ Na atividade ${atividade}, o consumo foi de ${litros} litros.
        O consumo está baixo. Continue utilizando a água de forma consciente.`;
    } else if(litros <= 500){
        mensagem = `⚠️ Na atividade ${atividade}, o consumo foi de ${litros} litros.
        É possível economizar mais água utilizando técnicas sustentáveis.`;
    } else {
        mensagem = `🚨 Na atividade ${atividade}, o consumo foi de ${litros} litros.
        O consumo está alto e merece atenção.`;
    }

    mensagem += "<br><br><strong>Dica:</strong> Utilize irrigação eficiente, monitore o consumo e evite desperdícios.";

    document.getElementById("resultado").innerHTML = mensagem;
});

// -------------------------------
// Acessibilidade
// -------------------------------
let tamanhoFonte = 16;
const corpo = document.body;

document.getElementById("aumentar-fonte").addEventListener("click", () => {
    tamanhoFonte += 2;
    corpo.style.fontSize = tamanhoFonte + "px";
});

document.getElementById("diminuir-fonte").addEventListener("click", () => {
    if(tamanhoFonte > 12){
        tamanhoFonte -= 2;
        corpo.style.fontSize = tamanhoFonte + "px";
    }
});

document.getElementById("alto-contraste").addEventListener("click", () => {
    document.body.classList.toggle("contraste");
});
