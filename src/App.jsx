import { Container } from "react-bootstrap";
import { FormDrink } from "./components/FormDrink";
function App() {
  return (
    <>
      <header className="py-5">
        <h1>Drink Finder</h1>
      </header>

      <Container className="mt-5">
        <FormDrink/>
      </Container>
    </>
  );
}

export default App;
