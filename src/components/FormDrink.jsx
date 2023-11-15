import { Button, Form, Col, Row, Alert } from "react-bootstrap";
import useCategory from "../hooks/useCategory";
import useDrinks from "../hooks/useDrinks"
import { useState } from "react";

export const FormDrink = () => {
  const { categories } = useCategory();
  const { getDrinks } = useDrinks();
  
  const [alert , setAlert] = useState(false);
  const [search, setSearch] = useState({
    name: "",
    category: "",
  });

  const handleSubmit = e => { 
    e.preventDefault();

    if(Object.values(search).includes('')){
      setAlert('All Fields are Required.!');
      return;
    }

    setAlert(false);
    getDrinks(search)

    

  }

  return (
    <Form
    onSubmit={handleSubmit}
    >
      {alert && <Alert variant="danger" className="textr-center">{alert}</Alert> }
      <Row>
        <Col md={6}>
          <Form.Group className="mt-3">
            <Form.Label htmlFor="name">Drink Name</Form.Label>
            <Form.Control
              id="name"
              type="text"
              placeholder="Ex: Tequila, Vodka, Etc..."
              name="name"
              value={search.name}
              onChange={(e) =>
                setSearch({
                  ...search,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mt-3">
            <Form.Label htmlFor="category">Drink Category</Form.Label>
            <Form.Select
              id="category"
              name="category"
              value={search.category}
              onChange={(e) =>
                setSearch({
                  ...search,
                  [e.target.name]: e.target.value,
                })
              }
            >
              <option>-Select a Category-</option>
              {categories?.map((cat) => (
                <option key={cat.strCategory} value={cat.strCategory}>
                  {cat.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Row className="justify-content-end">
          <Col md={3}>
            <Button type="submit" variant="danger" className="text-uppercase mt-3 w-100">
              Search Drinks
            </Button>
          </Col>
        </Row>
      </Row>
    </Form>
  );
};
