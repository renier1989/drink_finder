import { Container } from "react-bootstrap";
import { FormDrink } from "./components/FormDrink";
import { CategoryProvider } from "./context/CategoryProvider";
import { DrinksProvider } from "./context/DrinksProvider";
import { DrinksList } from "./components/DrinksList";
import { DrinkModal } from "./components/DrinkModal";
function App() {
  return (
    <>
      <CategoryProvider>
        <DrinksProvider>
          <header className="py-5">
            <h1>Drink Finder</h1>
          </header>

          <Container className="mt-5">
            <FormDrink />
            <DrinksList/>
            <DrinkModal/>
          </Container>
        </DrinksProvider>
      </CategoryProvider>
    </>
  );
}

export default App;
