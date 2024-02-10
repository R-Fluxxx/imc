// src/App.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setImc(imcCalculado.toFixed(2));

    if (imcCalculado < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imcCalculado >= 18.5 && imcCalculado < 24.9) {
      setClassificacao('Peso normal');
    } else if (imcCalculado >= 24.9 && imcCalculado < 29.9) {
      setClassificacao('Sobrepeso');
    } else if (imcCalculado >= 29.9 && imcCalculado < 34.9) {
      setClassificacao('Obesidade grau I');
    } else if (imcCalculado >= 34.9 && imcCalculado < 39.9) {
      setClassificacao('Obesidade grau II');
    } else {
      setClassificacao('Obesidade grau III');
    }
  };

  return (
    <div className="App">
      <Container>
        <h1 className="my-4">Calculadora de IMC</h1>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form>
              <Form.Group controlId="altura">
                <Form.Label>Altura (cm)</Form.Label>
                <Form.Control
                  type="number"
                  value={altura}
                  onChange={(e) => setAltura(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="peso">
                <Form.Label>Peso (kg)</Form.Label>
                <Form.Control
                  type="number"
                  value={peso}
                  onChange={(e) => setPeso(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={calcularIMC}>
                Calcular
              </Button>
            </Form>
          </Col>
        </Row>
        {imc && (
          <Row className="justify-content-center mt-4">
            <Col md={6}>
              <Table striped bordered>
                <thead>
                  <tr>
                    <th>IMC</th>
                    <th>Classificação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{imc}</td>
                    <td>{classificacao}</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default App;
