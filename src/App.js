import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Components/Home";
import Books from "./Components/Books";
import Admin from "./Components/Admin";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
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