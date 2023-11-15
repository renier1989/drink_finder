import { Image, Modal } from "react-bootstrap";
import useDrinks from "../hooks/useDrinks";

export const DrinkModal = () => {
  const { modal, handleShowModal, recipe, loadingRecipes } = useDrinks();
  console.log(recipe);
  const showIngredients = () => {
    let ingredients = [];

    for (let i = 1; i < 16; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingredients.push(
          <li>
            {recipe[`strIngredient${i}`]} {recipe[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredients;
  };
  return (
    !loadingRecipes && (
      <Modal show={modal} onHide={handleShowModal}>
        <Image src={recipe.strDrinkThumb} alt={`image ${recipe.strDrink}`} />
        <Modal.Title className="mx-3">
          <h2>{recipe.strDrink}</h2>
        </Modal.Title>
        <Modal.Body>
          <h4>Instructions</h4>
          {recipe.strInstructions}
          <h4>Ingredients</h4>
          {showIngredients()}
        </Modal.Body>
      </Modal>
    )
  );
};
