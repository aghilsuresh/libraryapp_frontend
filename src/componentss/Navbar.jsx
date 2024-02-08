import React from 'react'
import './Navbar.css'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    const [show, setShow] = useState(false) 

  useEffect(()=>{

    window.addEventListener('scroll',()=>{                              
      if(window.scrollY>600){
        setShow(true)                                  

      }
      else{
        setShow(false)
      }
    })

  })
  return (
    
      <div className={`${show && 'nav-white'} nav`} >
      <div  style={{ display: 'flex', alignItems: 'center' }}>
        <img width={'100px'} className='img' style={{background:"transparent",marginLeft:"15px"}} src="https://cdn2.unrealengine.com/Diesel/product/stories-untold/home/StoriesUntold_Logo_Color-1531x836-e716f6defc4db784eb856417ee1d04f5bb94edff.png"  alt="" />
        <span className='mt-2 ms-2 fs-5 text- fw-bold '></span>
        
      </div>
      <Link to={'/auth'} className='btn' style={{backgroundColor:"#ff8000", color:"white",borderRadius:"0px"}}>SIGN IN</Link>
    </div>
    
    
  )
}

export default Navbar