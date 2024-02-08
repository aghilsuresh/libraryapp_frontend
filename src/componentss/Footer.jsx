import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
   
      <div className="container-fluid      " style={{ backgroundColor: 'black', color: 'white' ,marginBottom:"-20px" }}>
        <div className="row justify-content-center align-items-center  ">
          <div className="col-md-5 mt-3">
            <h4>
              <img
                style={{ height: '65px', width: '130px' ,marginRight:"7px"}}
                src="https://cdn2.unrealengine.com/Diesel/product/stories-untold/home/StoriesUntold_Logo_Color-1531x836-e716f6defc4db784eb856417ee1d04f5bb94edff.png"
                alt=""
              />
              
            </h4>
            <p style={{textAlign:"center"}}>
              Empower your voice with our Stories Untold App — an intuitive platform for sharing your passions. Craft compelling
              stories, connect with a global audience, and start your story journey effortlessly. Unleash your creativity
              and make your mark in the digital space today.
            </p>
          </div>
          <div className="col-md-2 text-center ">
            <h4></h4>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
              | Home page |
            </Link> <br />
            <Link to={'/login'} style={{ textDecoration: 'none', color: 'white' }}>
             | Login page |
            </Link><br />
            <Link to={'/auth'} style={{ textDecoration: 'none', color: 'white' }}>
             | Register page |
            </Link>
          </div>
          <div className="col-md-2 text-center mb-3art">
            <h4></h4>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
             | Legal |
            </Link><br />
            <a href="https://react-bootstrap.github.io/" style={{ textDecoration: 'none', color: 'white' }}>
             | Privacy Policy |
            </a><br />
            <a href="https://bootswatch.com/" style={{ textDecoration: 'none', color: 'white' }}>
             | Terms of Use |
            </a>
          </div>
          <div className="col-md-3  mt-5">
            <h4>Contact us</h4>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Enter your email id" style={{ borderRadius: '0px' ,maxWidth:"300px"}} />
              <button style={{ backgroundColor: '#ff8000', borderRadius: '0px' }} className="btn text-white mt-2">
                Subscribe
              </button>
            </div>
            <div className="d-flex justify-content-evenly">
              <Link to={''} style={{ textDecoration: 'none', color: 'white' }}>
                <i className="fab fa-instagram fa-2x"></i>
              </Link>
              <Link to={''} style={{ textDecoration: 'none', color: 'white' }}>
                <i className="fab fa-whatsapp fa-2x"></i>
              </Link>
              <Link to={''} style={{ textDecoration: 'none', color: 'white' }}>
                <i className="fab fa-linkedin fa-2x"></i>
              </Link>
              <Link to={''} style={{ textDecoration: 'none', color: 'white' }}>
                <i className="fab fa-twitter-square fa-2x"></i>
              </Link>
            </div>
          </div>
        </div>
        <p className="text-center mt-3  " style={{fontSize:"10px"}}>© Copyright 2024 Stories Untold, Inc.  All rights reserved. All registered trademarks herein are the property of their respective owners.</p>
      </div>
   
  );
}

export default Footer;
