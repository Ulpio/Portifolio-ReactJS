// src/services/emailService.js
import emailjs from '@emailjs/browser';

// Inicializa o EmailJS com sua chave pública
// Você precisa se cadastrar em https://www.emailjs.com/ e obter suas próprias chaves
emailjs.init("XKmJF5CNapaaOfMFL");

const emailService = {
  /**
   * Envia um email usando o serviço EmailJS
   * @param {Object} formData - Os dados do formulário (nome, email, mensagem)
   * @returns {Promise} - Uma promessa que resolve quando o email é enviado
   */
  sendEmail: async (formData) => {
    try {
      console.log(formData)
      const response = await emailjs.send(
        "service_nkmydwu", // ID do serviço no EmailJS (e.g., gmail, outlook, etc)
        "template_xuxdqys", // ID do template criado no EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Ulpio Netto", // Seu nome como destinatário
        } 
      );
      console.log(response)
      
      return {
        success: true,
        message: "Mensagem enviada com sucesso!",
        response
      };
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      return {
        success: false,
        message: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.",
        error
      };
    }
  }
};

export default emailService;