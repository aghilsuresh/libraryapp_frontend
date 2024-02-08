
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AllBlog from './pages/AllBlog';
import UserBlog from './pages/UserBlog';
import Auth from './componentss/Auth';
import { useContext } from 'react';
import { logoutContext } from './Contexts/ContextShare';



function App() {

  const {logout,setLogout}=useContext(logoutContext)

  return (
    <div className="App">



      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allblog' element={<AllBlog />} />
        <Route path='/userblog' element={logout?<UserBlog />:<Home/>} />
        <Route path='/auth' element={<Auth register/>}/>
        <Route path='/login' element={<Auth/>}/>
        
      </Routes>


    </div>
  );
}

export default App;
