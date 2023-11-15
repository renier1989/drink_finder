import { Row } from "react-bootstrap"
import useDrinks from "../hooks/useDrinks"
import { DrinkItem } from "./DrinkItem"

export const DrinksList = () => {
    const {drinks} = useDrinks()
  return (
    <Row>
        {drinks?.map(drink =>(
            <DrinkItem
                key={drink.idDrink}
                drink={drink}
            />
        ))}
    </Row>
  )
}
