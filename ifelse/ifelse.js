function calculaMedia(){
    //criar as referencias com os elementos da página
    let inNome = document.getElementById("inNome");
    let inNota1 = document.getElementById("inNota1");
    let inNota2 = document.getElementById("inNota2");
    let outSituacao = document.getElementById("outSituacao");
    let outMedia = document.getElementById("outMedia");

    //obter os valores dos imputs
    const nome = inNome.value;
    const nota1 = Number(inNota1.value);
    const nota2 = Number(inNota2.value);

    //calcular média
    let media = (nota1+nota2)/2;

    outMedia.textContent = "Média das Notas: " + media;

    //criar as condições

    if(media >= 7){
        outSituacao.textContent = "Parabéns " + nome + "! Você foi aprovado(a)!"
    }else if(media >= 4){
        outSituacao.textContent = "Atenção " + nome + "! Você foi para exame!"
    }else{
        outSituacao.textContent = "Ops " + nome + "! Você foi reprovado(a)!"
        outSituacao.style.color = "red";
    }
}

document.getElementById("btResultado").addEventListener("click", calculaMedia);