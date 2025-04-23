document.addEventListener("DOMContentLoaded", function () {
    const botao = document.querySelector(".botao-link");
  
    botao.addEventListener("click", function (e) {
      e.preventDefault();
  
      // Captura dos campos
      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const telefone = document.getElementById("telefone").value.trim();
      const profissao = document.getElementById("profissao").value.trim();
      const consulta = document.getElementById("consulta").value.trim();
      const objetivo = document.getElementById("objetivo").value.trim();
      const atendimento = document.getElementById("atendimento").value;
      const outro = document.getElementById("outro-atendimento").value.trim();
      const instagram = document.getElementById("instagram").value.trim();
      const mudar = document.getElementById("mudar").value;
      const disposto = document.getElementById("disposto").value;
  
      // Verificação de campos vazios
      if (
        !nome || !email || !telefone || !profissao || !consulta ||
        !objetivo || !atendimento || !instagram || !mudar || !disposto ||
        (atendimento === "outro" && !outro)
      ) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
      }
  
      // Monta mensagem (sem emojis)
      let mensagemTexto = `Olá! Me chamo *${nome}* e gostaria de iniciar um acompanhamento nutricional.\n\n`;
  
      mensagemTexto += `E-mail: ${email}\n`;
      mensagemTexto += `Telefone: ${telefone}\n`;
      mensagemTexto += `Profissão: ${profissao}\n`;
      mensagemTexto += `Já passou por nutricionista?: ${consulta}\n`;
      mensagemTexto += `Objetivo atual: ${objetivo}\n`;
      mensagemTexto += `Tipo de atendimento: ${atendimento}\n`;
  
      if (atendimento === "outro") {
        mensagemTexto += `Especificação: ${outro}\n`;
      }
  
      mensagemTexto += `Instagram: ${instagram}\n`;
      mensagemTexto += `Desejo de mudança (0 a 10): ${mudar}\n`;
      mensagemTexto += `Comprometimento para mudar (0 a 10): ${disposto}`;
  
      // Codifica a mensagem
      const mensagemCodificada = encodeURIComponent(mensagemTexto);
  
      // Número do nutricionista
      const numeroNutricionista = "5521993416066";
      const url = `https://wa.me/${numeroNutricionista}?text=${mensagemCodificada}`;
  
      // Abre o WhatsApp com a mensagem
      window.open(url, "_blank");
    });
  });