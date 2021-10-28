import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Pasta, Comment } from "../type/Pasta";
interface Props {
  selectedPasta: Pasta | null;
}
const DishComments = ({ selectedPasta }: Props) => (
  <Container>
    <Row className="justify-content-center mt-3">
      <Col xs={12} md={6}>
        <ListGroup>
          {selectedPasta ? (
            selectedPasta.comments.map((c: Comment) => (
              <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
            ))
          ) : (
            <p>Click on a dish to read its comments</p>
          )}
        </ListGroup>
      </Col>
    </Row>
  </Container>
);

export default DishComments;
