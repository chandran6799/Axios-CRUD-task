import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Components/Home'
import Users from './Components/Users';
import Edit from './Components/Edit';
import AddUser from './Components/AddUser';
import Navbar from './Components/Navbar';
const App = () => {

 
 
  const [id, setId] = useState(0);
    

  return (
    
    <>
      <BrowserRouter>
        
          <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users setId={setId} />} />
          <Route path="/edit/:id" element={<Edit id={id} />} />
          <Route path="/adduser" element={<AddUser />} />
          
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App