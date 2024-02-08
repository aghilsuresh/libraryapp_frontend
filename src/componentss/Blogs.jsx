import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';
import { BASE_URL } from '../services/baseurl';

function Blogs({blog}) { 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
   
      
      <div className='' >
        
          <div className='row   '>
             <Card  className='mb-5 p-2 ms-5 me-4 shadow border-2' onClick={handleShow} style={{ width: '22rem',height:"27rem" }}>
          <Card.Img variant="top" style={{height:"300px"}} src={blog?`${BASE_URL}/uploads/${blog.blogImage}`:null} />
          <Card.Body>
            <Card.Title style={{fontWeight:"bold"}}> Title : {blog.title.toUpperCase()} </Card.Title>
            <Card.Title>Author : {blog.author} </Card.Title>
           
          
          </Card.Body>
        </Card>

        

        
          </div>
      
  
      
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> <img width={'130'} src="https://cdn2.unrealengine.com/Diesel/product/stories-untold/home/StoriesUntold_Logo_Color-1531x836-e716f6defc4db784eb856417ee1d04f5bb94edff.png" alt="" /> </Modal.Title>
          </Modal.Header>
          <Modal.Body>
             
              <Row>
                 <Col md={12}>
                  <img style={{width:"100%",height:"250px"}} src={blog?`${BASE_URL}/uploads/${blog.blogImage}`:null} alt="" />
                 </Col> 
    
                <Col md={12} style={{marginTop:"15px"}} >
                  <h3 style={{fontWeight:"bold"}} >Title : {blog.title.toUpperCase()} </h3>
                  <h3 style={{fontWeight:"bold",marginTop:"15px",marginBottom:"10px"}} >Author : {blog.author} </h3>
                  <h6 style={{fontWeight:"bold"}} >About :</h6>
                  <p style={{ overflowWrap: "break-word" }} > {blog.description} </p>
                 </Col>
              </Row>
             
                 
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
           
          </Modal.Footer>
        </Modal>
      </div>
   
  )
}

export default Blogs