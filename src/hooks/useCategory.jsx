import { useContext } from "react";
import CategoryContext from "../context/CategoryProvider";

const useCategory = () =>{
    return useContext(CategoryContext);
}

export default useCategory;