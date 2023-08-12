import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import Admin from "./Pages/Admin";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
function App(){
  return(
    <>
   
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/books' element = {<Books/>} />
      <Route path='/admin' element = {<Admin />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App