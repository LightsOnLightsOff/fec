import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Button, Carousel,Card } from 'react-bootstrap'

function App (props) {
  axios
    .get('https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products', {
      params: { page: 5, count: 2 },
      headers: {
        Authorization: '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'
      }
    })
    .then(res => {
      console.log('this is the response', res.data)
    })

  return (
    <div>
      <Carousel>
        <Carousel.Item style={{  backgroundColor : "green"}}>
          {/* <img
            className='d-block w-100'
            src='https://img.freepik.com/free-photo/smooth-green-background_53876-108464.jpg'
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
          <Card style={{ width: '18rem'}} >
            <Card.Img variant='top' src='holder.js/100px180' />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src='holder.js/100px180' />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://img.freepik.com/free-photo/smooth-green-background_53876-108464.jpg'
            alt='Second slide'
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://img.freepik.com/free-photo/smooth-green-background_53876-108464.jpg'
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
