function mudarTexto(){
    
    let nome =document.getElementById("nome").value;
    document.getElementById("message").innerText = "Olá " + nome;
}

function mudarEstilo(){
    const p = document.getElementById("message");
    const b = document.body;

    p.style.color = "#4169E1";
    p.style.fontSize = "32px";
    b.style.backgroundColor = "#6495ED"
}

