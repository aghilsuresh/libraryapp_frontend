import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Blogs from '../componentss/Blogs';
import { Link } from 'react-router-dom';
import { allBlogApi } from '../services/allAPI';

function AllBlog() {


  const [searchKey, setSearchKey] = useState("")
  console.log(searchKey);


  const [allBlog, setAllBlog] = useState([])


  const getAllBlog = async () => {

    if (sessionStorage.getItem("token")) {

      const token = sessionStorage.getItem("token")

      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }

      const result = await allBlogApi(searchKey, reqHeader)
      console.log(result.data);

      setAllBlog(result.data)
    }



  }

  useEffect(() => {

    getAllBlog()

  }, [searchKey])

  return (
    <div className='row bg-light ' style={{ backgroundColor: "white", height: "auto" }} >

      <Navbar className="bg  " style={{ height: "60px", backgroundColor: "black" }}>
        <Container  >
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://cdn2.unrealengine.com/Diesel/product/stories-untold/home/StoriesUntold_Logo_Color-1531x836-e716f6defc4db784eb856417ee1d04f5bb94edff.png"
              width="90"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            <b className='text-light'>  </b>
          </Navbar.Brand>



          <Link to={'/userblog'}><button style={{ backgroundColor: "red", color: "white", borderRadius: "0px", margin: "0px", }} className='btn mt-1 me-5 '>MY LIBRARY</button></Link>

        </Container>


      </Navbar>







      <div className='row bg-light m-0' style={{ height: "100vh" }}>
        <div className="heading text-center text-dark ">

          <img width={'35%'} src="https://images.launchbox-app.com/f8934107-1130-4b7e-8580-cb7c4b584455.png" alt="" />

        </div>


        <div className="d-flex justify-content-center mt-2">
          <input
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            type="text"
            className="form-control w-50"
            placeholder="Search By Title"
          />
        </div>



        <div className="row mt-5 ms-4  mb-5   container-fluid  bg-light">

          {allBlog?.length > 0 ?
            allBlog.map((item) => (<Col sm={12} md={6} lg={4}>

              <Blogs blog={item} />
            </Col>))
            : <div className="d-flex justify-content-center align-items-center " >
              <img src="https://cdn-images-1.medium.com/max/800/1*qdFdhbR00beEaIKDI_WDCw.gif" alt="" />

            </div>
          }
        </div>
      </div>

    </div>
  )
}

export default AllBlog