import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import Admin from "./Pages/Admin";
import About from "./Pages/about";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Contact from "./Pages/Contact"
import LibraryPolicies from "./Pages/Library_policies";
// import Navbar from './Components/Navbar'
function App(){
  return(
   <>
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path='/books' element = {<Books/>} />
      <Route path="/signup" element={<Signup/>}/>
      <Route path='/admin' element = {<Admin />} />
      <Route path='/about' element = {<About />} />
      <Route path='/contact' element = {<Contact />} />
      <Route path='/libpolicy' element = {<LibraryPolicies />} />
    </Routes>
    </BrowserRouter>
    </> 
  )
}
export default App