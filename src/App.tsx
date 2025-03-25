 
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "./Pages/Home.tsx";
import User from "./Pages/User.tsx";
import Repository from './Pages/Repository.tsx';
function App() { 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/user" element={<User />}></Route>
      <Route path='/repository' element={<Repository />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
