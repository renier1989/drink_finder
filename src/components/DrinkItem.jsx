import { Button, Card, Col } from "react-bootstrap";
import useDrinks from "../hooks/useDrinks";

export const DrinkItem = ({ drink }) => {
  const { handleShowModal,handleSetDrinkId } = useDrinks();
  return (
    <Col md={2} lg={3}>
      <Card className="mb-4">
        <Card.Img
          variant="top"
          src={drink.strDrinkThumb}
          alt={`Img ${drink.strDrink}`}
        />
        <Card.Body>
          <Card.Title>{drink.strDrink}</Card.Title>
          <Button
            onClick={() => {
              handleShowModal()
              handleSetDrinkId(drink.idDrink)
            }}
            variant="danger"
            className="w-100 text-uppercase"
          >
            Recipe
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
