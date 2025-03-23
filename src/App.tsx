 
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "./Pages/Home.tsx";
import User from "./Pages/User.tsx";

function App() { 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/user" element={<User />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
