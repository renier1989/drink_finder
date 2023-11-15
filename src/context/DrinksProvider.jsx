import axios from "axios";
import { createContext, useEffect, useState } from "react";

const DrinksContext = createContext();

const DrinksProvider = ({children}) => {


    return (
        <DrinksContext.Provider value={{
            
        }}>
            {children}
        </DrinksContext.Provider>

    );
}

export {DrinksProvider}

export default DrinksContext