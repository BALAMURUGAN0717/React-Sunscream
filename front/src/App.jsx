import React from 'react'
import {BrowserRouter, Form, Route, Routes, useParams} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Home from './pages/Home';
import Cos from './components/Cos';

import "./App.css"
// import HO from './pages/Home';
import { GoArrowLeft } from "react-icons/go";
import Addmin from './Addmin/Addmin';
import Dot from './Addmin/Dot';
import Add from './Addmin/Add';
import Shop from './pages/Shop';
import Skin from './pages/Skin';
import Skintype from './pages/Skintype';
import Best from './pages/Best';
import New from './pages/Arr';
import Arr from './pages/Arr';
import About from './pages/About';
import UpdateForm from './pages/Form';








const App = () => {
  return (
    <div>
    <GoArrowLeft className='icons'/>
   
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/" element={<Cos/>}></Route>
  <Route path="/addmin" element ={<Addmin/>}></Route>
<Route path="/dot" element={<Dot/>}></Route>
<Route path="/add" element={<Add/>}></Route>
<Route path='/shop' element={<Shop/>}></Route>
<Route path='/Skin' element={<Skin/>}></Route>
<Route path='/skintype' element={<Skintype/>}></Route>
<Route path='/Best' element={<Best/>}></Route>
<Route path='/Arrivals' element={<Arr/>}></Route>
<Route path='/About' element={<About/>}></Route>
<Route path='/update' element={<UpdateForm/>}></Route>
<Route path='/update/:id' element={<UpdateForm/>} loader={({params})=> fetch(`http://localhost:5000/getkey/${params.id}`)}/>
</Routes>


{/* <HO/> */}




<Footer/>
     
     </BrowserRouter>

    </div>
  )
}

export default App
