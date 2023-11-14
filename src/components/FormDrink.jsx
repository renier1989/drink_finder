import {Button, Form, Col,Row} from 'react-bootstrap'

export const FormDrink = () => {
  return (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group className='mt-3'>
            <Form.Label htmlFor='name'>Drink Name</Form.Label>
            <Form.Control
              id='name'
              type='text'
              placeholder='Ex: Tequila, Vodka, Etc...'
              name='name'
            />
          </Form.Group>
        </Col>
        <Col md={6}>
        <Form.Group className='mt-3'>
            <Form.Label htmlFor='category'>Drink Category</Form.Label>
            <Form.Select
            id='category'
            >
              <option >-Select a Category-</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  )
}
