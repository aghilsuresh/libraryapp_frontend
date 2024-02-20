import React, { useContext, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Col } from 'react-bootstrap';
import Projects from '../componentss/Projects';
import { addBlog } from '../services/allAPI';
import { addblogResponseContext, logoutContext } from '../Contexts/ContextShare';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
 

function UserBlog() {

  const {addBlogResponse, setAddBlogResponse}=useContext(addblogResponseContext) 

  const [blog, setBlog] = useState({

    title: "",
    author: "",
    description: "",
    blogImage: ""
  })
  console.log(blog);

  //hold the image url
  const [preview, setPreview] = useState("")

   useEffect(() => {
    
    if(blog.blogImage) {setPreview(URL.createObjectURL(blog.blogImage))
      }
   }, [blog.blogImage])

   
  console.log(preview);

  const [token, setToken] = useState("")

  useEffect(() => {
    
    if(sessionStorage.getItem("token")){
  setToken(sessionStorage.getItem("token"))
    }
    else{

      setToken("")
    }
    
  }, [])

  console.log(token);



  const handleClear=()=>{
      
    setBlog({
      title: "",
    author: "",
    description: "",
    blogImage: ""
    })

    setPreview("")

  }


   const handleAdd=async(e)=>{
    e.preventDefault()

    const{title,author,description,blogImage}=blog
    
    if(!title|| !author || !description || !blogImage){
      toast.error("please fill the form completely")
    }
    else{

      const reqBody=new FormData()
      reqBody.append('title',title)
      reqBody.append('author',author)
      reqBody.append('description',description)
      reqBody.append('blogImage',blogImage)

    
    if(token){const reqHeader={
        "Content-Type":"multipart/form-data",
         "Authorization":`Bearer ${token}`
      }


      const result= await addBlog(reqBody,reqHeader)
      console.log(result);
      if(result.status===200){
        toast.success('Story Uploaded successfully')
        handleClose()
        setAddBlogResponse()

      }
      else{
        console.log(result);
        toast.error(result.response.data)
      }

    }}

   }




  const [show, setShow] = useState(false);

  const handleClose = () =>{ setShow(false);
        handleClear()  
  }
  const handleShow = () => setShow(true);


  const [Username, setUsername] = useState("")

  useEffect(() => {

    setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username)

  }, [])

  const {logout,setLogout}=useContext(logoutContext)

  const navigate=useNavigate()

  const handleLogout=()=>{

    sessionStorage.removeItem('token')
    sessionStorage.removeItem("existingUser")
    navigate('/')
    setLogout(false)
  }



  return (




    <div style={{ backgroundColor: "white", height: "100vh" }}>
      <Navbar className="bg " style={{backgroundColor:"black"}}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://cdn2.unrealengine.com/Diesel/product/stories-untold/home/StoriesUntold_Logo_Color-1531x836-e716f6defc4db784eb856417ee1d04f5bb94edff.png"
              width="90"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            <b className='text-light'></b>
          </Navbar.Brand>
          <div >
            <Link to={'/allblog'}><button style={{ backgroundColor: "red", borderRadius: "0px", color: "white" }} className='btn'>LIBRARY</button></Link>

            <Link onClick={handleLogout}  style={{ paddingLeft: "25px", marginRight: "-8px" ,backgroundColor:"black",color:"white"}}><i class="fa-solid fa-power-off"></i></Link>

          </div>
        </Container>
      </Navbar>


      <h1 className='mt-5 ms-4 ' style={{fontWeight:"bolder"}} ><span style={{ color: "red", fontSize: "60px",fontWeight:"bolder"}}>W</span>ELCOME  <span className='ms-2' style={{ color: "black",fontWeight:"bolder" }}  > {Username.toUpperCase()} !!</span> </h1>
      <p className='ms-5 w-50 ' style={{ textAlign: "justify", fontSize: "18px" }}>Ready to share your insights?<br /> Click the "Create New Book" button and let your creativity flow. <br /> Thank you for being a valuable part of our growing community!</p>
           
         


      <div className=' me-5 ms-3 ' style={{ float: "right", marginTop: "-15px" }}>

        <button onClick={handleShow} style={{ backgroundColor: "red", borderRadius: "0px", color: "white" }} className='btn '>Create New Book</button>

      </div>


      <Col sm={12} md={12} style={{ backgroundColor: "white" }} >
        <Projects />
      </Col>








      {/* SIDE BAR */}

      <Offcanvas show={show} onHide={handleClose} sm={12} md={6} lg={4}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Book, Your Space</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

          <div className="row">
            <div className="col-md-12">
              <label>
                <input type="file" style={{ display: "none" }} /* value={blog.blogImage}  */ onChange={(e) => setBlog({ ...blog, blogImage: e.target.files[0] })} />
                <img  width={'100%'}  src={preview?preview:"https://tse4.mm.bing.net/th?id=OIP.JI838JrCb5qa_jsJUrlB2gHaEg&pid=Api&P=0&h=220"} alt="no image" />
              </label>
            </div>
          </div>
          <div className='row w-100'>

            <div className=" d-flex justify-content-center align-items-center flex-column">

              <div className="mb-3 mt-4 w-100" >
                <input type="text" className='form-control ' placeholder='Title' value={blog.title} onChange={(e) => setBlog({ ...blog, title: e.target.value })} />
              </div>

              <div className="mb-3 mt-4 w-100" >
                <input type="text" className='form-control ' placeholder='Author' value={blog.author} onChange={(e) => setBlog({ ...blog, author: e.target.value })} />
              </div>

              <div className="mb-3 w-100  " >
                <textarea type="text" className='form-control' style={{height:"90px"}} placeholder='Description' value={blog.description} onChange={(e) => setBlog({ ...blog, description: e.target.value })} />
              </div>
              <div>

                <button onClick={handleAdd} className='btn ' style={{ backgroundColor: "#ff8000", color: "white", borderRadius: "0px" }}>UPLOAD</button>

                <button onClick={handleClear} className='btn ms-5 bg-warning' style={{  color: "white", borderRadius: "0px" }}>CANCEL</button>
              </div>

            </div>
          </div>




        </Offcanvas.Body>
      </Offcanvas>



      <ToastContainer autoClose={1000} theme='colored' position='top-center' />

    </div>


  )
}

export default UserBlog