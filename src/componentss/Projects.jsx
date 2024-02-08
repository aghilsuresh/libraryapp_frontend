import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { BASE_URL } from '../services/baseurl';
import { useEffect } from 'react';
import { deleteBookApi, userBlogApi } from '../services/allAPI';
import { addblogResponseContext, editBookResponseContext } from '../Contexts/ContextShare';
import EditComponent from './EditComponent';


function Projects() {
          
    const{addBlogResponse, setAddBlogResponse}=useContext(addblogResponseContext)

    const{editBookResponse, setEditBookResponse}
=useContext(editBookResponseContext)
    const [userBlog, setUserBlog] = useState([])


    const getUserBlog = async () => {

        const token = sessionStorage.getItem("token")

        const reqHeader = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }

        const result = await userBlogApi(reqHeader)
        console.log(result.data);
        setUserBlog(result.data)


    }

    useEffect(() => {

        getUserBlog()

    }, [addBlogResponse,editBookResponse])


    const [selectedItem, setSelectedItem] = useState(null);


    const handleShow = (item) => {
        setSelectedItem(item);
        setShow(true);
    };



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
  

    const handleDelete=async(id)=>{

        const token=sessionStorage.getItem("token")

        const reqHeader = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
        
        const result= await deleteBookApi(id,reqHeader)
        console.log(result);
        if(result.status===200){
            getUserBlog()
        }
        else{
            alert(result.response.data)
        }

    }


    return (
        <div>



            <div className="card shadow p-5 ms-4 me-4 mb-5 mt-5 " style={{backgroundColor:"black"}}>

                <div className="img text-center">
                   <img width={"30%"} src="https://images.launchbox-app.com/f8934107-1130-4b7e-8580-cb7c4b584455.png" alt="" />
                </div>

                <div className="mt-5 row  ">

                    {userBlog?.length > 0 ?
                        userBlog?.map((item) => (<Card className='mb-5 p-2  me-5  shadow border-2' style={{ width: '19rem', height: "auto" }}>
                            <Card.Img onClick={() => handleShow(item)}variant="top" style={{ height: "300px"  }} src={userBlog ? `${BASE_URL}/uploads/${item.blogImage}` : null} />
                            <Card.Body >
                                <Card.Title> <span style={{fontWeight:"bold"}}>Title :</span> {item.title} </Card.Title>
                                <Card.Title><span style={{fontWeight:"bold"}}>Author :</span> {item.author.toUpperCase()}  </Card.Title>

                              <div className='d-flex ms- mt-2'>
                                    <EditComponent books={item} />
    
                                    <button   onClick={()=>handleDelete(item._id)}   className='btn mt-3 ms-3' style={{backgroundColor:"red",color:"white",borderRadius:"0px"}}><i class="fa-solid fa-trash"></i></button>
                              </div>

                            </Card.Body>
                            

                        </Card>
                        ))
                        
                        : <p>No Books Uploaded Yet !!</p>}


                </div>


                <Modal  show={show} onHide={handleClose}>
                    <Modal.Header  closeButton>
                        <Modal.Title > <img width={"130"}  src="https://cdn2.unrealengine.com/Diesel/product/stories-untold/home/StoriesUntold_Logo_Color-1531x836-e716f6defc4db784eb856417ee1d04f5bb94edff.png" alt="" /> </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col md={12}>
                                <img style={{ width: "100%", height: "250px" }} src={`${BASE_URL}/uploads/${selectedItem?.blogImage}`} alt="" />
                            </Col>

                            <Col md={12} style={{ marginTop: "19px"}} >
                                <h4 style={{fontWeight:"bold"}}>Title : {selectedItem?.title}  </h4>
                        
                                <h4 style={{fontWeight:"bold"}}>Author :{selectedItem?.author} </h4>
                                <br />
                                
                                <h6 style={{fontWeight:"bold"}}>About :  </h6>
                                <p style={{ overflowWrap: "break-word" }} >  {selectedItem?.description} </p>
                            </Col>
                        </Row>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='danger' onClick={handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>




            </div>





        </div>
    )
}

export default Projects