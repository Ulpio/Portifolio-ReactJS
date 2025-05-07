// src/pages/PlaygroundPage.jsx
import { useEffect, useState } from 'react';
import { Container, Row, Col, Tab, Nav, Card, Form, Button } from 'react-bootstrap';
import './PlaygroundPage.css';

const RegistarttDemo = () => {
  const [endpoint, setEndpoint] = useState('GET /api/v1/registros');
  const [requestBody, setRequestBody] = useState(
    JSON.stringify({
      titulo: "Novo Registro",
      descricao: "Descrição do registro",
      categoria: "documento",
      prioridade: 1
    }, null, 2)
  );
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSendRequest = () => {
    setLoading(true);
    
    // Simular tempo de resposta
    setTimeout(() => {
      const randomResponseTime = Math.floor(Math.random() * 50) + 20; // 20-70ms
      
      let responseContent = '';
      
      if (endpoint === 'GET /api/v1/registros') {
        responseContent = {
          status: '200 OK',
          time: `${randomResponseTime}ms`,
          data: {
            registros: [
              {
                id: 1,
                titulo: "Documento Principal",
                descricao: "Contrato de serviço",
                categoria: "documento",
                data_criacao: "2025-05-07T10:23:41Z",
                prioridade: 1
              },
              {
                id: 2,
                titulo: "Anexo Contratual",
                descricao: "Termos adicionais",
                categoria: "anexo",
                data_criacao: "2025-05-07T10:24:15Z",
                prioridade: 2
              }
            ],
            total: 2,
            pagina: 1,
            por_pagina: 10
          }
        };
      } else if (endpoint === 'GET /api/v1/registros/1') {
        responseContent = {
          status: '200 OK',
          time: `${randomResponseTime}ms`,
          data: {
            id: 1,
            titulo: "Documento Principal",
            descricao: "Contrato de serviço",
            categoria: "documento",
            data_criacao: "2025-05-07T10:23:41Z",
            prioridade: 1,
            meta: {
              autor: "Sistema",
              revisado: true
            }
          }
        };
      } else if (endpoint === 'POST /api/v1/registros') {
        try {
          const requestData = JSON.parse(requestBody);
          
          responseContent = {
            status: '201 Created',
            time: `${randomResponseTime}ms`,
            data: {
              id: 3,
              titulo: requestData.titulo || 'Novo Registro',
              descricao: requestData.descricao || 'Descrição do registro',
              categoria: requestData.categoria || 'documento',
              data_criacao: `2025-05-07T${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}Z`,
              prioridade: requestData.prioridade || 1
            }
          };
        } catch (error) {
          responseContent = {
            status: '400 Bad Request',
            time: `${randomResponseTime}ms`,
            error: 'JSON inválido no corpo da requisição'
          };
        }
      }
      
      setResponse(responseContent);
      setLoading(false);
    }, 800);
  };

  const showRequestBody = endpoint.includes('POST');

  return (
    <Card className="api-demo-card">
      <Card.Body>
        <Card.Title className="fw-bold mb-3">API Demo - Registartt</Card.Title>
        <p className="text-muted mb-3">
          Experimente uma versão demonstrativa da API da Registartt.
        </p>
        
        <Form.Group className="mb-3">
          <Form.Label className="fw-medium">Endpoint</Form.Label>
          <Form.Select 
            value={endpoint} 
            onChange={(e) => setEndpoint(e.target.value)}
          >
            <option value="GET /api/v1/registros">GET /api/v1/registros</option>
            <option value="GET /api/v1/registros/1">GET /api/v1/registros/1</option>
            <option value="POST /api/v1/registros">POST /api/v1/registros</option>
          </Form.Select>
        </Form.Group>
        
        {showRequestBody && (
          <Form.Group className="mb-3">
            <Form.Label className="fw-medium">Corpo da Requisição (JSON)</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={5} 
              value={requestBody}
              onChange={(e) => setRequestBody(e.target.value)}
              className="code-input"
            />
          </Form.Group>
        )}
        
        <Button 
          variant="primary" 
          onClick={handleSendRequest} 
          disabled={loading}
          className="mb-3 demo-button"
        >
          {loading ? 'Enviando...' : 'Enviar Requisição'}
        </Button>
        
        <Form.Group>
  <Form.Label className="fw-medium">Resposta</Form.Label>
  <div className="response-container">
    {response ? (
      <>
        <div className="response-status">Status: {response.status}</div>
        <div className="response-time">Tempo de resposta: {response.time}</div>
        <pre className="response-content">
          {JSON.stringify(response.data || response.error, null, 2)}
        </pre>
      </>
    ) : (
      <p className="text-muted mb-0 response-placeholder">Envie uma requisição para ver a resposta aqui.</p>
    )}
  </div>
</Form.Group>
      </Card.Body>
    </Card>
  );
};

const ImpulsaDemo = () => {
  const [endpoint, setEndpoint] = useState('GET /api/v1/negocios');
  const [requestBody, setRequestBody] = useState(
    JSON.stringify({
      nome: "Meu Negócio",
      segmento: "Tecnologia",
      descricao: "Empresa de software",
      localizacao: {
        cidade: "Maceió",
        estado: "AL"
      },
      contato: {
        email: "contato@meunegocio.com",
        telefone: "(82) 91234-5678"
      }
    }, null, 2)
  );
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSendRequest = () => {
    setLoading(true);
    
    // Simular tempo de resposta
    setTimeout(() => {
      const randomResponseTime = Math.floor(Math.random() * 50) + 20; // 20-70ms
      
      let responseContent = '';
      
      if (endpoint === 'GET /api/v1/negocios') {
        responseContent = {
          status: '200 OK',
          time: `${randomResponseTime}ms`,
          data: {
            negocios: [
              {
                id: "60f8a9b3e6b1f2c5d4a3b2a1",
                nome: "Tech Solutions",
                segmento: "Tecnologia",
                descricao: "Empresa de desenvolvimento de software",
                localizacao: {
                  cidade: "São Paulo",
                  estado: "SP"
                },
                metricas: {
                  engajamento: 87,
                  crescimento: 4.2
                }
              },
              {
                id: "60f8a9c7e6b1f2c5d4a3b2a2",
                nome: "Eco Sustentável",
                segmento: "Sustentabilidade",
                descricao: "Consultoria em sustentabilidade empresarial",
                localizacao: {
                  cidade: "Rio de Janeiro",
                  estado: "RJ"
                },
                metricas: {
                  engajamento: 92,
                  crescimento: 3.8
                }
              }
            ],
            total: 2,
            pagina: 1,
            por_pagina: 10
          }
        };
      } else if (endpoint === 'GET /api/v1/negocios/1/metricas') {
        responseContent = {
          status: '200 OK',
          time: `${randomResponseTime}ms`,
          data: {
            negocio_id: "60f8a9b3e6b1f2c5d4a3b2a1",
            nome: "Tech Solutions",
            metricas: {
              engajamento: 87,
              crescimento: 4.2,
              conversao: 3.7,
              retencao: 92.5,
              historico: [
                {
                  mes: "Janeiro",
                  engajamento: 82,
                  crescimento: 3.8
                },
                {
                  mes: "Fevereiro",
                  engajamento: 84,
                  crescimento: 3.9
                },
                {
                  mes: "Março",
                  engajamento: 85,
                  crescimento: 4.0
                },
                {
                  mes: "Abril",
                  engajamento: 87,
                  crescimento: 4.2
                }
              ]
            }
          }
        };
      } else if (endpoint === 'POST /api/v1/negocios') {
        try {
          const requestData = JSON.parse(requestBody);
          
          responseContent = {
            status: '201 Created',
            time: `${randomResponseTime}ms`,
            data: {
              id: "60f8a9d9e6b1f2c5d4a3b2a3",
              nome: requestData.nome || 'Meu Negócio',
              segmento: requestData.segmento || 'Tecnologia',
              descricao: requestData.descricao || 'Empresa de software',
              localizacao: {
                cidade: requestData.localizacao?.cidade || 'Maceió',
                estado: requestData.localizacao?.estado || 'AL'
              },
              contato: {
                email: requestData.contato?.email || 'contato@meunegocio.com',
                telefone: requestData.contato?.telefone || '(82) 91234-5678'
              },
              data_criacao: `2025-05-07T${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}Z`,
              metricas: {
                engajamento: 0,
                crescimento: 0
              }
            }
          };
        } catch (error) {
          responseContent = {
            status: '400 Bad Request',
            time: `${randomResponseTime}ms`,
            error: 'JSON inválido no corpo da requisição'
          };
        }
      }
      
      setResponse(responseContent);
      setLoading(false);
    }, 800);
  };

  const showRequestBody = endpoint.includes('POST');

  return (
    <Card className="api-demo-card">
      <Card.Body>
        <Card.Title className="fw-bold mb-3">API Demo - Impulsa Brasil</Card.Title>
        <p className="text-muted mb-3">
          Experimente uma versão demonstrativa da API do Impulsa Brasil.
        </p>
        
        <Form.Group className="mb-3">
          <Form.Label className="fw-medium">Endpoint</Form.Label>
          <Form.Select 
            value={endpoint} 
            onChange={(e) => setEndpoint(e.target.value)}
          >
            <option value="GET /api/v1/negocios">GET /api/v1/negocios</option>
            <option value="GET /api/v1/negocios/1/metricas">GET /api/v1/negocios/1/metricas</option>
            <option value="POST /api/v1/negocios">POST /api/v1/negocios</option>
          </Form.Select>
        </Form.Group>
        
        {showRequestBody && (
          <Form.Group className="mb-3">
            <Form.Label className="fw-medium">Corpo da Requisição (JSON)</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={5} 
              value={requestBody}
              onChange={(e) => setRequestBody(e.target.value)}
              className="code-input"
            />
          </Form.Group>
        )}
        
        <Button 
          variant="primary" 
          onClick={handleSendRequest} 
          disabled={loading}
          className="mb-3 demo-button"
        >
          {loading ? 'Enviando...' : 'Enviar Requisição'}
        </Button>
        
        <Form.Group>
          <Form.Label className="fw-medium">Resposta</Form.Label>
          <div className="response-container">
            {response ? (
              <pre className="mb-0 response-content">
                {`Status: ${response.status}
Tempo de resposta: ${response.time}

${JSON.stringify(response.data || response.error, null, 2)}`}
              </pre>
            ) : (
              <p className="text-muted mb-0 response-placeholder">Envie uma requisição para ver a resposta aqui.</p>
            )}
          </div>
        </Form.Group>
      </Card.Body>
    </Card>
  );
};

const PlaygroundPage = () => {
  const [activeTab, setActiveTab] = useState('registartt');
  
  useEffect(() => {
    // Verificar se há um hash na URL e definir a tab ativa
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      if (hash === 'demo-registartt') {
        setActiveTab('registartt');
      } else if (hash === 'demo-impulsa') {
        setActiveTab('impulsa');
      }
    }
    
    // Rolar para o topo quando a página carregar
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="playground-section py-5">
      <Container>
        <h1 className="text-center fw-bold mb-2">APIs Interativas</h1>
        <p className="text-center text-muted mb-5 mx-auto" style={{ maxWidth: '700px' }}>
          Experimente demonstrações interativas das APIs que desenvolvi usando Go, PostgreSQL e MongoDB.
        </p>
        
        <Tab.Container activeKey={activeTab} onSelect={setActiveTab}>
          <Row className="mb-4">
            <Col>
              <Nav variant="tabs" className="api-tabs flex-row justify-content-center">
                <Nav.Item>
                  <Nav.Link eventKey="registartt">API Registartt</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="impulsa">API Impulsa Brasil</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
          
          <Row>
            <Col>
              <Tab.Content>
                <Tab.Pane eventKey="registartt">
                  <RegistarttDemo />
                </Tab.Pane>
                <Tab.Pane eventKey="impulsa">
                  <ImpulsaDemo />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </section>
  );
};

export default PlaygroundPage;