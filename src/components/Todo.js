import { 
  Button,
  Form, 
  Row, 
  Col, 
  Container,
} from 'react-bootstrap';
// import React, { useState } from 'react';
// import './App.css';


function Todo() {
  
 return (
    <header className = "Todo-header" >
      <Container>
        <Row>
          <Col>
            <h1>TODO</h1>
              <input type="text" className = "Todo-task" placeholder="Add new task"></input>{' '}
              <Button variant="outline-dark" size="sm">ADD</Button>
          </Col>
        </Row>
      </Container>
    </header>
 );
}    
export default Todo;