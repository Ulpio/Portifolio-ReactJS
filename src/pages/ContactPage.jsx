// src/pages/ContactPage.jsx
import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';

const ContactPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [validated, setValidated] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    
    if (formElement.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    
    // Aqui você implementaria a lógica para enviar o formulário
    console.log('Formulário enviado:', form);
    
    // Simular sucesso
    setShowSuccess(true);
    setForm({ name: '', email: '', message: '' });
    setValidated(false);
    
    // Esconder mensagem depois de 5 segundos
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };
  
  return (
    <section className="py-5 bg-light">
      <Container>
        <h1 className="text-center fw-bold mb-2">Entre em Contato</h1>
        <p className="text-center text-muted mb-5 mx-auto" style={{ maxWidth: '700px' }}>
          Tem alguma pergunta ou está interessado em colaborar em um projeto? Envie uma mensagem!
        </p>
        
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            {showSuccess && (
              <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                Mensagem enviada com sucesso! Entrarei em contato em breve.
              </Alert>
            )}
            
            <Card className="shadow-sm">
              <Card.Body className="p-4">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      required
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
                    />
                    <Form.Control.Feedback type="invalid">
                      Por favor, escreva uma mensagem.
                    </Form.Control.Feedback>
                  </Form.Group>
                  
                  <div className="d-grid">
                    <Button variant="primary" size="lg" type="submit">
                      Enviar Mensagem
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
            
            <div className="mt-5 text-center">
              <p className="text-muted mb-3">Ou entre em contato diretamente:</p>
              <div className="d-flex justify-content-center gap-4">
                <a href="mailto:ulpionetto0@gmail.comm" className="text-decoration-none">Email</a>
                <a href="https://linkedin.com/in/ulpionetto" target="_blank" rel="noopener noreferrer" className="text-decoration-none">LinkedIn</a>
                <a href="https://github.com/Ulpio" target="_blank" rel="noopener noreferrer" className="text-decoration-none">GitHub</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactPage;