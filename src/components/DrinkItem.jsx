import { Button, Card } from "react-bootstrap"

export const DrinkItem = ({drink}) => {
    console.log(drink);
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={drink.strDrinkThumb} />
        <Card.Body>
            <Card.Title>{drink.strDrink}</Card.Title>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
  )
}
