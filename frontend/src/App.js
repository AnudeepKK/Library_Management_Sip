import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import Admin from "./Pages/Admin";
import Navbar from "./Components/Navbar";
import About from "./Pages/about";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
function App(){
  return(

   <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path='/home' element = {<Home/>} />
      <Route path='/books' element = {<Books/>} />
      <Route path='/admin' element = {<Admin />} />
      <Route path='/about' element = {<About />} />
    </Routes>
    </BrowserRouter>
    </> 
    
  )
}
export default App