import axios from "axios";
import { createContext, useEffect, useState } from "react";

const DrinksContext = createContext();

const DrinksProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [modal, setModal] = useState(false);
  const [drinkId, setDrinkId] = useState(null);
  const [recipe,setRecipe] = useState({})
  const [loadingDrinks, setLoadingDrinks] = useState(false)
  const [loadingRecipes, setLoadingRecipes] = useState(false)

  useEffect(() => {
    if (!drinkId) return;

    
    const getDrinkRecipe = async () => {
        setLoadingRecipes(true);
      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
        const { data } = await axios(url);
        setRecipe(data.drinks[0]);
      } catch (error) {
        console.log(error);
      }finally{
        setLoadingRecipes(false)
    }
    };
    getDrinkRecipe();
  }, [drinkId]);

  const getDrinks = async (search) => {
      try {
        setLoadingDrinks(true)
          const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search.name}&c=${search.category}`;
          console.log(url);
      const { data } = await axios(url);
      setDrinks(data.drinks);
    } catch (error) {
      console.log(error);
    }finally{
        setLoadingDrinks(false)
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
        recipe,
        loadingDrinks,
        loadingRecipes,
      }}
    >
      {children}
    </DrinksContext.Provider>
  );
};

export { DrinksProvider };

export default DrinksContext;
