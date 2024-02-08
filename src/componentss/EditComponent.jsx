import React, { useContext, useEffect, useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'; 
import { BASE_URL } from '../services/baseurl';
import { editBookApi } from '../services/allAPI';
import { editBookResponseContext } from '../Contexts/ContextShare';


function EditComponent({books}) {

  const{editBookResponse, setEditBookResponse}=useContext(editBookResponseContext)

    const [bookDetails, setBookDetails] = useState({
        id:books._id,
        title: books.title,
        author:books.author,
        description:books.description,
        blogImage:""
      })

    const [preview, setPreview] = useState("")
 
    const [show, setShow] = useState(false);

    const handleClose = () =>{ setShow(false)
      handleClose1();
           
    }
    const handleShow = () => setShow(true);
     
    console.log(books);

    useEffect(() => {
     
    if(bookDetails.blogImage){
      setPreview( URL.createObjectURL(bookDetails.blogImage))
    }
       

    }, [bookDetails.blogImage])
    

    const handleClose1=()=>{
         
      setBookDetails({
        title: books.title,
        author:books.author,
        description:books.description,
        blogImage:""
      })
      setPreview("")
    }


    const handleUpdate=async(e)=>{
      e.preventDefault()
      
      const{id,title,author,description,blogImage}=bookDetails

      if(!title || !author || !description ){
        alert('Please Fill The Form Completely')
      }
      else{
        const reqBody =new FormData()
        reqBody.append("title",title)
        reqBody.append("author",author)
        reqBody.append("description",description)
        preview?reqBody.append("blogImage",blogImage):reqBody.append("blogImage",books.blogImage)


        const token=sessionStorage.getItem("token")
      
        if(preview){
          const reqHeader={
            "Content-Type":"multipart/form-data",
            "Authorization":`Bearer ${token}`
          }
  
           const result =await editBookApi(id,reqBody,reqHeader)
           console.log(result);

           if(result.status===200){
            console.log(result.data);
            alert('Updated successfully')
            handleClose()
            setEditBookResponse(result.data)
           }
           else{
            console.log(result.response.data);
           }
  
        }else{
          const reqHeader = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
        const result = await editBookApi(id,reqBody,reqHeader)
        console.log(result);

        if(result.status===200){
          console.log(result.data);
          alert('Updated Successfully')
          handleClose()
          setEditBookResponse(result.data)
         }
         else{
          console.log(result.response.data);
         }
  
        }



      }

 
    }


  return (
    <div>
    
    <button onClick={handleShow} className='btn mt-3' style={{backgroundColor:"black", color:"white",borderRadius:"0px"}}><i class="fa-solid fa-pen-to-square"></i></button>
              
    <Offcanvas show={show} onHide={handleClose} sm={12} md={6} lg={4}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title >Edit Your Book </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

          <div className="row">
            <div className="col-md-12">
              <label>
                <input onChange={(e)=>setBookDetails({...bookDetails,blogImage:e.target.files[0]})} type="file" style={{ display: "none" }} /* value={blog.blogImage}  */ />
                <img  width={'100%'}  src={preview?preview:`${BASE_URL}/uploads/${books.blogImage}`} />
              </label>
            </div>
          </div>
          <div className='row w-100'>

            <div className=" d-flex justify-content-center align-items-center flex-column">

              <div className="mb-3 mt-4 w-100" >
                <input type="text" className='form-control ' placeholder='Title'  value={bookDetails.title} onChange={(e)=>setBookDetails({...bookDetails,title:e.target.value})} />
              </div>

              <div className="mb-3 mt-4 w-100" >
                <input type="text" className='form-control ' placeholder='Author' value={bookDetails.author} onChange={(e)=>setBookDetails({...bookDetails,author:e.target.value})} />
              </div>

              <div className="mb-3 w-100  " >
                <textarea type="text" className='form-control' style={{height:"90px"}} placeholder='Description' value={bookDetails.description} onChange={(e)=>setBookDetails({...bookDetails,description:e.target.value})} />
              </div>
              <div>

                <button onClick={handleUpdate} className='btn ' style={{ backgroundColor: "#ff8000", color: "white", borderRadius: "0px" }}>UPDATE</button>

                <button onClick={handleClose1} className='btn ms-5 bg-warning' style={{  color: "white", borderRadius: "0px" }}>CANCEL</button>
              </div>

            </div>
          </div>




        </Offcanvas.Body>
      </Offcanvas>

      
    </div>
  )
}

export default EditComponent