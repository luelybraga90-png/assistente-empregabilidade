function analisarCurriculo() {

    let texto = document.getElementById("curriculo").value;
    let resultado = document.getElementById("resultado");

    if(texto.length < 100){
        resultado.innerHTML =
        "<strong>Atenção:</strong> Seu currículo parece muito curto. Adicione mais informações sobre formação, experiências e habilidades.";
    }
    else{
        resultado.innerHTML =
        "<strong>Análise concluída!</strong><br><br>" +
        "✔️ Currículo possui boa quantidade de informações.<br>" +
        "✔️ Verifique ortografia.<br>" +
        "✔️ Destaque suas competências técnicas.<br>" +
        "✔️ Adicione cursos e certificações relevantes.";
    }
}

function avaliarResposta(){

    let resposta = document.getElementById("resposta").value;
    let feedback = document.getElementById("feedback");

    if(resposta.length < 50){
        feedback.innerHTML =
        "Sua resposta está muito curta. Tente detalhar mais sua experiência e objetivos profissionais.";
    }
    else{
        feedback.innerHTML =
        "Ótima resposta! Você demonstrou comunicação e clareza. Continue praticando para melhorar ainda mais sua entrevista.";
    }
}