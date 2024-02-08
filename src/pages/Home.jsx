/*  import React, { useEffect, useState } from 'react'
import Navbar from '../componentss/Navbar'
import Footer from '../componentss/Footer'
import Blogs from '../componentss/Blogs'
import { Link } from 'react-router-dom'
import { homeBlogApi } from '../services/allAPI'
import img2 from '../assets/bitfuul-images/image1x2.jpg'
import img3 from '../assets/bitfuul-images/image1x3.jpg'
import img4 from '../assets/bitfuul-images/image1x4.jpg'
import img1 from '../assets/bitfuul-images/image1x1.jpg'
import img5 from '../assets/bitfuul-images/image1x5.jpg'
import img6 from '../assets/bitfuul-images/image1x6.jpg'






function Home() { 

  const [homeBlog, setHomeBlog] = useState([])
     
  const getHomeBlog=async()=>{
    const result=await homeBlogApi() 
    console.log(result);
    setHomeBlog(result.data)
  }

  useEffect(() => {
     
    getHomeBlog()

  }, [])
  


  return (

    < >

      <Navbar />







      <div className="row m-0 p-0  " >
        <div className="col-md-12 m-0  text-center  d-flex flex-column justify-content-center align-items-center " style={{ height: "100vh" }}  >
          <div className='slide-in-right-content'>

            <h2 style={{ fontSize: "70px", fontWeight: "bold" }}>Publish Your Passion</h2>
            <h3>Create A Unique And Beautiful Blog Easily</h3>
            <Link to={'/allblog'} className='btn ' style={{ backgroundColor: "#ff8000", color: "white", borderRadius: "0px" }}> Explore</Link>
          </div>
        </div>

      </div>


      <div className="row m-0 p-0 " >

        <div className="col-sm-6 ps-5" style={{ marginTop: " 60rem", maxHeight: "100vh" }}>
          <h1 style={{ fontSize: "60px", fontWeight: "bolder" }}><span style={{ fontSize: "100px", color: "orange" }}>K</span>NOW YOUR AUDIENCE</h1>
          <p style={{ fontWeight: "bold", textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ullam quae nihil magni quod cupiditate voluptates id pariatur amet reprehenderit, cum non repellendus itaque ad explicabo, sapiente in nulla. Tempore.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis recusandae quam laboriosam suscipit tempora error ad beatae exercitationem vero aliquam ullam eligendi nobis quisquam tenetur, sapiente eos sequi praesentium alias.
          </p>
        </div>
        <div className="col-sm-6"></div>

      </div>








      <div className="row m-0 p-0 " >


        <div className="col-sm-6"></div>
        <div className="col-sm-6 ps-5" style={{ marginTop: " 70rem", maxHeight: "100vh", width: "650px" }}>
          <h1 style={{ fontSize: "60px", fontWeight: "bolder" }}><span style={{ fontSize: "100px", color: "orange" }}>K</span>NOW YOUR AUDIENCE</h1>
          <p style={{ fontWeight: "bold", textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ullam quae nihil magni quod cupiditate voluptates id pariatur amet reprehenderit, cum non repellendus itaque ad explicabo, sapiente in nulla. Tempore.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis recusandae quam laboriosam suscipit tempora error ad beatae exercitationem vero aliquam ullam eligendi nobis quisquam tenetur, sapiente eos sequi praesentium alias.
          </p>
        </div>
      </div>


      <div className="row m-0 p-0 " >

        <div className="col-sm-6 ps-5" style={{ marginTop: " 30rem", maxHeight: "100vh", width: "650px" }}>
          <h1 style={{ fontSize: "60px", fontWeight: "bolder" }}><span style={{ fontSize: "100px", color: "orange" }}>K</span>NOW YOUR AUDIENCE</h1>
          <p style={{ fontWeight: "bold", textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ullam quae nihil magni quod cupiditate voluptates id pariatur amet reprehenderit, cum non repellendus itaque ad explicabo, sapiente in nulla. Tempore.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis recusandae quam laboriosam suscipit tempora error ad beatae exercitationem vero aliquam ullam eligendi nobis quisquam tenetur, sapiente eos sequi praesentium alias.
          </p>
        </div>
        <div className="col-sm-6"></div>

      </div>


      <div className="row m-0 p-0 " >


        <div className="col-sm-6 "></div>
        <div className="col-sm-6" style={{ marginTop: " 60rem", maxHeight: "100vh", width: "650px" }}>
          <h1 style={{ fontSize: "60px", fontWeight: "bolder" }}><span style={{ fontSize: "100px", color: "orange" }}>K</span>NOW YOUR AUDIENCE</h1>
          <p style={{ fontWeight: "bold", textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ullam quae nihil magni quod cupiditate voluptates id pariatur amet reprehenderit, cum non repellendus itaque ad explicabo, sapiente in nulla. Tempore.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis recusandae quam laboriosam suscipit tempora error ad beatae exercitationem vero aliquam ullam eligendi nobis quisquam tenetur, sapiente eos sequi praesentium alias.
          </p>
        </div>
      </div>

      <div className="blog-content pt-5 "  style={{ display: "flex",overflowX: "auto"}}>
              

              {homeBlog?.length>0?homeBlog.map((item)=>(<div className='mt-5 '  >
                   <Blogs blog={item}/>
               </div>)) :null}
               

             
     </div>



    

      <Footer />
    </>















  )
}

export default Home 


 */


import Navbar from '../componentss/Navbar'
import Footer from '../componentss/Footer'
import img2 from '../assets/bitfuul-images/image1x2.jpg'
import img3 from '../assets/bitfuul-images/image1x3.jpg'
import img4 from '../assets/bitfuul-images/image1x4.jpg'
import img1 from '../assets/bitfuul-images/image1x1.jpg'
import img5 from '../assets/bitfuul-images/image1x5.jpg'
import img6 from '../assets/bitfuul-images/image1x6.jpg'
import Blogs from '../componentss/Blogs'
import { Link } from 'react-router-dom'




function Home() {





  return (



    <div>

      <Navbar />

   
      
      <div className="row ">
  <div className="col-sm-1  " style={{backgroundColor:"#ff9966"}} ></div>
  <div className="col-sm-10">
    <div className="image-container" style={{ position: "relative", textAlign: "center" }}>
      <img style={{ width: "100%" }} src={img1} alt="" />
      <div className='slide-in-right-content ' style={{ position: "absolute", top: "25%", left: "15%", width: "70%", }}>
        <h2 style={{ fontSize: "70px", fontWeight: "bold" }}>Publish Your Passion</h2>
        <h3>Create A Unique And Beautiful Story Easily</h3>
        <Link to={'/allblog'} className='btn' style={{ backgroundColor: "#ff8000", color: "white", borderRadius: "0px" }}>Explore</Link>
      </div>
    </div>
  </div>
  <div className="col-sm-1 " style={{backgroundColor:"#ff9966"}}></div>
      </div>


      

      <div className="row">
        <div className="col-sm-1 " style={{backgroundColor:"#ffc87c"}} /* style={{backgroundColor:"#f0e68c"}} */></div>
        <div className="col-sm-10 left " style={{ position: 'relative' }}>
          <img style={{ width: '100%' }} src={img2} alt="" />
          <p className='w-50 content  text-center p-5  fw-bold ' style={{ position: 'absolute', top: '49%', left: '2%', color: 'black' ,fontSize:"17px" }}> {/*  <h1 style={{fontWeight:"bold",fontSize:"50px",}}><span style={{color:"orange",fontSize:"75px"}}>W</span>elcome To<span style={{fontSize:"40px"}}><br/>Easy Tales!!</span></h1>  */} <img className='mb-4' width={"100%"} src="https://vectorified.com/images/welcome-icon-5.png" alt="" /> {/* <img width={"100%"} src="https://images.launchbox-app.com/f8934107-1130-4b7e-8580-cb7c4b584455.png" alt="" />  */}<span style={{fontSize:"30px"}}><i class="fa-brands fa-etsy"></i></span> mbark on a journey of limitless creativity with STORIES UNTOLD Craft and update your tales effortlessly while connecting with a vibrant community of storytellers.  Immerse yourself in a world where collaboration enhances the magic of storytelling. Join Stories Untold and let your imagination soar - because every story begins with a spark! </p>
        </div>
        <div className="col-sm-1 "style={{backgroundColor:"#ffc87c"}}/*  style={{backgroundColor:"#cd853f "}} */></div>
      </div>

      <div className="row p-0">
        <div className="col-sm-1" style={{backgroundColor:"#ff9966"}}></div>
        <div className="col-sm-10 left   " style={{ position: 'relative' }}>
          <img style={{ width: '100%' }} src={img3} alt="" />
          <p className=' content w-50 text-center  ' style={{ position: 'absolute', top: '53%', right: '1%', color: 'black'}}> 
           <img width={"70%"} src="http://writeresultsllc.com/wp-content/uploads/2014/10/write-results-creative-and-corporate-storytelling.png" alt="" />
          </p>
        </div>
        <div className="col-sm-1 " style={{backgroundColor:"#ff9966"}}></div>
      </div>

      <div className="row">
        <div className="col-sm-1"style={{backgroundColor:"#ffc87c"}} ></div>
        <div className="col-sm-10 left" style={{ position: 'relative' }}>
          <img style={{ width: '100%' }} src={img4} alt="" />
          <p className=' content w-50 text-center p-4 fw-bold' style={{ position: 'absolute', top: '43%', left: '0.8%', color: 'black',fontSize:"15px", }}> 
          <h1 className='mb-4 ' style={{  top: '50%', right: '10%', color: 'black',fontWeight:"bolder" ,fontFamily:"monospace", fontSize:"60px"}}><span style={{color:"orange", fontSize:"80px"}}>S</span>imple Stories </h1>
          Experience the magic of storytelling simplified with Stories Untold. Explore an array of simple yet enchanting stories from storytellers around the globe.  Connect with diverse narratives and embark on a journey that transcends cultural boundaries. <br /> Craft tales effortlessly and share them with a global audience, discovering the beauty of simplicity in every narrative. <br />  
          </p>
        </div>
        <div className="col-sm-1 " style={{backgroundColor:"#ffc87c"}}></div>
      </div>



      <div className="row">
        <div className="col-sm-1 "style={{backgroundColor:"#ff9966"}}></div>
        <div className="col-sm-10 left " style={{ position: 'relative' ,overflowY:"hidden"}}>
          <img style={{ width: '100%' }} src={img5} alt="" />
          <p className='fw-bold content w-50 text-center p-4 ' style={{ position: 'absolute', top: '33%', right: '1%', color: 'black',fontSize:"15px" }}> 
          <h1 className='mb-4' style={{  top: '50%', right: '10%', color: 'black',fontWeight:"bolder" ,fontFamily:"monospace", fontSize:"60px"}}><span style={{color:"#ff8000", fontSize:"80px"}}> <i class="fa-brands fa-x-twitter"></i></span>plore!!<br/> </h1>
          Witness the magic of storytelling evolution on Stories Untold. With swift updates, your stories can adapt and grow, ensuring they remain fresh, engaging, and timeless for your audience. <br />
          <Link to={'./login'}><button  style={{backgroundColor:"#ff8000", color:"white" ,borderRadius:"0px"}} className='btn mt-3'>Go To Library</button></Link>
          </p>
          
        </div>
        <div className="col-sm-1" style={{backgroundColor:"#ff9966"}}></div>
      </div>

      {/* <div className="row">
        <div className="col-sm-1" style={{backgroundColor:"#ff9966"}}></div>
        <div className="col-sm-10" style={{ position: 'relative' }}>
          <img style={{ width: '100%' }} src={img6} alt="" />
          <h1 style={{ position: 'absolute', top: '50%', center: '60%', color: 'black' }}>lfkfk</h1>

        </div>
        <div className="col-sm-1" style={{backgroundColor:"#ff9966"}}></div>
      </div> */}








      <Footer />
    </div>

  )

}
export default Home 