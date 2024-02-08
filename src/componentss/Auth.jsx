 import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {loginAPI, registerAPI} from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import './Auth.css'
import { logoutContext } from '../Contexts/ContextShare';


function Auth({register}) { 

  const {logout,setLogout}=useContext(logoutContext)

   const [userData, setUserData] = useState({

    username:"",
    email:"",
    password:""

   })

  console.log(userData);

  //navigate
    const navigate = useNavigate()  


   const registerForm = register?true:false


//register function
    
 const handleRegister=async(e)=>{
  
  e.preventDefault()


  const {username,email,password}= userData

  if(!username || !email || !password){
    toast.info('please fill the form completely')
  }
  else{
    const result= await registerAPI(userData)
      console.log(result.data); 
  
    if (result.status===200){
    toast.success(`${result.data.username} is successfully registered`)

    setUserData({
      username:"",
      email:"",
      password:""
  
    })
    navigate('/login')

   }
   else{
    toast.error(result.response.data)
   }  
 
  }


} 

//login function

const handleLogin = async(e)=>{
  e.preventDefault()

  const {email,password} =userData

  if(!email || !password){
    toast.info('Please fill the form completely')
  }else{
   
    const result= await loginAPI(userData)
    console.log(result);

    if(result.status===200){
      toast.success('login successful')

      sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
      
      sessionStorage.setItem("token",result.data.token)

      setUserData({
        username:"",
        email:"",
        password:""
      })
       
      setLogout(true)

      setTimeout(() => {

        navigate('/userblog')

      },2000);
     
    }
    else{
      toast.error(result.response.data)
    }

  }

}




  return (
    <div className='main'>

         <div class="center  ">
         </div>

<div style={{width:'100%',height:"100vh"}}  className='d-flex justify-content-center align-items-center '>
       <div  className=" w-75 container">
       
        <div className="card bg-transparent  p-5 " style={{border:"none"}}>
        <Link className='text-decoration-none text-dark' to={'/'} ><i style={{fontSize:"30px"}} class="fa-solid fa-circle-left"></i></Link> 

           <div className='row align-items-center'>
            <div className="col-md-3"></div>
            <div className="col-lg-6 p-5">
               <div className='d-flex align-items-center flex-column' >
                    <h1 className='text-center text-light' ><img style={{height:"120px",width:"190px"}} src="https://cdn2.unrealengine.com/Diesel/product/stories-untold/home/StoriesUntold_Logo_Color-1531x836-e716f6defc4db784eb856417ee1d04f5bb94edff.png" alt="" /></h1>
                   <h5 className='text-light mt-2  '>
                        {
                         registerForm?'Sign up to your Account':'Sign in to your account'
                        }
                   </h5>
                   <Form className='mt-5 w-100'>
                        
                       {
                        registerForm&&
                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Username" value={userData.username} onChange={(e)=>setUserData({...userData,username:e.target.value})} />
                      </Form.Group>
                       } 
                        
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email-id" value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})} />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="Password" placeholder="Password" value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})} />
                      </Form.Group>

                      {
                        registerForm?
                        <div>
                            <button onClick={handleRegister}  className='btn  mt-4 mb-2' style={{backgroundColor:"black",color:"white",borderRadius:"0px"}}>Register</button>
                            <p>Already a User ? click here to <Link style={{color:"white",textDecoration:"none"}} to={'/login'}>LOGIN</Link></p>
                           
                        </div>:
                        <div>
                        <button onClick={handleLogin} className='btn mt-4 mb-2' style={{backgroundColor:"black",color:"white",borderRadius:"0px"}}>Login</button>
                        <p>New User ? click here to <Link style={{color:"white",textDecoration:"none"}}  to={'/auth'}>REGISTER</Link></p>
                    </div>

                      }

                   </Form>
               </div>
            </div>
            <div className="col-md-3"></div>
           </div>

        </div>
       </div>
       
    </div>

    <ToastContainer autoClose={2000} theme='colored' position='top-center' />
    </div>
  )
}

export default Auth 

