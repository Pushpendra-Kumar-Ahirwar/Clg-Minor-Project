import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Link, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import About from './Components/About';
import Home from './Components/Home';
import './Components/Style.css'
import Newz from './Components/Cotegory/Newz'


function App() {
  return (
    <>
   
     <BrowserRouter className='alllink'>
  <Navbar/>

<Routes>
 <Route path='/' element={<Home/>}/>
<Route path='/About' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
</Routes>
</BrowserRouter> 
{/* <Newz/> */}
    
    </>
  );
}

export default App;
