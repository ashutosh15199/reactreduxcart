import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import './home.css'
import { useDispatch, useSelector } from 'react-redux';
// import { Selector } from '@reduxjs/toolkit';
import { AddCarts,selectCart } from '../store/userSlice';
import './home.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';  // Import Row from Bootstrap
import Col from 'react-bootstrap/Col';  // Import Col from Bootstrap
import IMG from '../assets/images.png'
const Home = () => {
  const [data, setData] = useState({ limit: 0, products: [] });
  const carts = useSelector(selectCart);
    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  const dispatch = useDispatch();
  const totalQuantity = carts.reduce((total,item)=>total+item.quantity,0)
  return (
    <Container fluid="md">
     <div>
        <Button className='btn'>
          <img src={IMG}/>
          {totalQuantity>0 && <span className='cart-badge'>{totalQuantity}</span>}
        </Button>
      </div>
      <Row className="row-cols-1 row-cols-md-3"> {/* Define the number of columns in each row */}
        {Object.values(data.products).map((item, index) => (
          <Col key={index.id} className="mb-4"> {/* Add margin-bottom to create space between cards */}
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.thumbnail
} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.price}
                </Card.Text>
                <Button variant="primary" onClick={()=>dispatch(AddCarts(item))}>Add Cerd</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;