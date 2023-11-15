import { Container } from "react-bootstrap";
import { FormDrink } from "./components/FormDrink";
import { CategoryProvider } from "./context/CategoryProvider";
import { DrinksProvider } from "./context/DrinksProvider";
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
          </Container>
        </DrinksProvider>
      </CategoryProvider>
    </>
  );
}

export default App;
