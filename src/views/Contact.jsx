import { Container, Form, Button } from "react-bootstrap";

export default () => {
  return (
    <Container className="text-center pt-5">
      <p className="fs-1 mb-2 fw-bold">Cuéntanos, ¿en qué te podemos ayudar?</p>
      <Form>
        <Form.Group className="mb-3" controlId="form-input">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="tucorreo@ejemplo.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="form-textarea">
          <Form.Label>Déjanos aquí tu duda, opinión o comentario</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="danger">Enviar</Button>
      </Form>
    </Container>
  );
};
