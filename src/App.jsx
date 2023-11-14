import { Container } from "react-bootstrap";
import { FormDrink } from "./components/FormDrink";
import { CategoryProvider } from "./context/CategoryProvider";
function App() {
  return (
    <>
      <CategoryProvider>
        <header className="py-5">
          <h1>Drink Finder</h1>
        </header>

        <Container className="mt-5">
          <FormDrink />
        </Container>
      </CategoryProvider>
    </>
  );
}

export default App;
