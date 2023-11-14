import { Button, Form, Col, Row } from "react-bootstrap";
import useCategory from "../hooks/useCategory";

export const FormDrink = () => {
  const { categories } = useCategory();
  return (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group className="mt-3">
            <Form.Label htmlFor="name">Drink Name</Form.Label>
            <Form.Control
              id="name"
              type="text"
              placeholder="Ex: Tequila, Vodka, Etc..."
              name="name"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mt-3">
            <Form.Label htmlFor="category">Drink Category</Form.Label>
            <Form.Select id="category">
              <option>-Select a Category-</option>
              {categories?.map((cat) => (
                <option key={cat.strCategory} value={cat.strCategory}>
                  {cat.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      <Row className="justify-content-end">
        <Col md={3}>
        <Button variant="danger" className="text-uppercase mt-3 w-100">Search Drinks</Button>
        </Col>
      </Row>
      </Row>
    </Form>
  );
};
