import axios from "axios";
import { createContext, useEffect, useState } from "react";

const DrinksContext = createContext();

const DrinksProvider = ({children}) => {
    const [drinks,setDrinks] = useState([]);
    const [modal, setModal] = useState(false);
    const getDrinks = async (search) =>{
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search.name}&c=${search.category}`;
            const {data} = await axios(url);
            setDrinks(data.drinks);
        } catch (error) {
            console.log(error);
        }
    }

    const handleShowModal = () =>{
        setModal(!modal);
    }

    return (
        <DrinksContext.Provider value={{
            getDrinks,
            drinks,
            handleShowModal,
            modal
        }}>
            {children}
        </DrinksContext.Provider>

    );
}

export {DrinksProvider}

export default DrinksContext