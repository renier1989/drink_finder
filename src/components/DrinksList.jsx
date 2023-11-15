import { Row } from "react-bootstrap"
import useDrinks from "../hooks/useDrinks"
import { DrinkItem } from "./DrinkItem"
import { Loading } from "./Loading"

export const DrinksList = () => {
    const {drinks,loadingDrinks} = useDrinks()
  return (
    <>
    {
      loadingDrinks ?
      <Loading/> 
      :
    <Row className="mt-4 mb-5" >
        {drinks?.map(drink =>(
            <DrinkItem
            
                key={drink.idDrink}
                drink={drink}
            />
        ))}
    </Row>
    }
    </>
  )
}
