// src/pages/ContactPage.jsx
import { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card, Spinner } from 'react-bootstrap';
import emailService from '../services/emailService';
import { useTheme } from '../context/ThemeContext';
import './ContactPage.css';

const ContactPage = () => {
  const { darkMode } = useTheme();
  const formRef = useRef();
  
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [validated, setValidated] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    
    // Validar o formulário
    if (formElement.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    
    // Começar processo de envio
    setIsSubmitting(true);
    setShowError(false);
    setShowSuccess(false);
    
    try {
      // Enviar o email usando o serviço
      const result = await emailService.sendEmail(form);
      
      if (result.success) {
        // Mostrar mensagem de sucesso
        setShowSuccess(true);
        // Limpar o formulário
        setForm({ name: '', email: '', message: '' });
        setValidated(false);
        // Esconder mensagem depois de 6 segundos
        setTimeout(() => {
          setShowSuccess(false);
        }, 6000);
      } else {
        // Mostrar mensagem de erro
        setErrorMessage(result.message);
        setShowError(true);
      }
    } catch (error) {
      // Tratar erros inesperados
      console.error("Erro ao enviar formulário:", error);
      setErrorMessage("Ocorreu um erro inesperado. Por favor, tente novamente.");
      setShowError(true);
    } finally {
      // Finalizar processo de envio
      setIsSubmitting(false);
    }
  };
  
  return (
    <section className={`py-5 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
      <Container>
        <h1 className="text-center fw-bold mb-2">Entre em Contato</h1>
        <p className={`text-center ${darkMode ? 'text-light opacity-75' : 'text-muted'} mb-5 mx-auto`} style={{ maxWidth: '700px' }}>
          Tem alguma pergunta ou está interessado em colaborar em um projeto? Envie uma mensagem!
        </p>
        
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            {showSuccess && (
              <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                <Alert.Heading>Mensagem enviada!</Alert.Heading>
                <p>Sua mensagem foi enviada com sucesso! Entrarei em contato em breve.</p>
              </Alert>
            )}
            
            {showError && (
              <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
                <Alert.Heading>Erro ao enviar</Alert.Heading>
                <p>{errorMessage}</p>
              </Alert>
            )}
            
            <Card className="contact-form-card">
              <Card.Body className="p-4">
                <Form 
                  ref={formRef}
                  noValidate 
                  validated={validated} 
                  onSubmit={handleSubmit}
                >
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      required
                      disabled={isSubmitting}
                    />
                    <Form.Control.Feedback type="invalid">
                      Por favor, informe seu nome.
                    </Form.Control.Feedback>
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu.email@exemplo.com"
                      required
                      disabled={isSubmitting}
                    />
                    <Form.Control.Feedback type="invalid">
                      Por favor, informe um email válido.
                    </Form.Control.Feedback>
                  </Form.Group>
                  
                  <Form.Group className="mb-4" controlId="message">
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Sua mensagem"
                      required
                      disabled={isSubmitting}
                    />
                    <Form.Control.Feedback type="invalid">
                      Por favor, escreva uma mensagem.
                    </Form.Control.Feedback>
                  </Form.Group>
                  
                  <div className="d-grid">
                    <Button 
                      variant="primary" 
                      size="lg" 
                      type="submit"
                      disabled={isSubmitting}
                      className="contact-button"
                    >
                      {isSubmitting ? (
                        <>
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            className="me-2"
                          />
                          Enviando...
                        </>
                      ) : (
                        'Enviar Mensagem'
                      )}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
            
            <div className="mt-5 text-center">
              <p className={`${darkMode ? 'text-light opacity-75' : 'text-muted'} mb-3`}>
                Ou entre em contato diretamente:
              </p>
              <div className="contact-social-links">
                <a 
                  href="mailto:ulpionetto0@gmail.com" 
                  className="contact-social-link"
                  aria-label="Email"
                >
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Email
                </a>
                <a 
                  href="https://linkedin.com/in/ulpionetto" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-social-link"
                  aria-label="LinkedIn"
                >
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/Ulpio" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-social-link"
                  aria-label="GitHub"
                >
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactPage;