import axios from "axios";
import { createContext, useEffect, useState } from "react";

const DrinksContext = createContext();

const DrinksProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [modal, setModal] = useState(false);
  const [drinkId, setDrinkId] = useState(null);
  const [recipe,setRecipe] = useState({})

  useEffect(() => {
    if (!drinkId) return;

    const getDrinkRecipe = async () => {
      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
        const { data } = await axios(url);
        setRecipe(data.drinks[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getDrinkRecipe();
  }, [drinkId]);

  const getDrinks = async (search) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search.name}&c=${search.category}`;
      const { data } = await axios(url);
      setDrinks(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowModal = () => {
    setModal(!modal);
  };

  const handleSetDrinkId = (id) => {
    setDrinkId(id);
  };

  return (
    <DrinksContext.Provider
      value={{
        getDrinks,
        drinks,
        handleShowModal,
        modal,
        handleSetDrinkId,
        recipe
      }}
    >
      {children}
    </DrinksContext.Provider>
  );
};

export { DrinksProvider };

export default DrinksContext;
