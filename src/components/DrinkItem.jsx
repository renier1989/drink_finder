import { Button, Card, Col } from "react-bootstrap";

export const DrinkItem = ({ drink }) => {
  console.log(drink);
  return (
    <Col md={2} lg={3}>
      <Card className="mb-4">
        <Card.Img variant="top" src={drink.strDrinkThumb} alt={`Img ${drink.strDrink}`} />
        <Card.Body>
          <Card.Title>{drink.strDrink}</Card.Title>
        <Button variant="danger" className="w-100 text-uppercase">Recipe</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
