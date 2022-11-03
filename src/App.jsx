import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Blog from './pages/Blog'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/blog' element={<Blog/>} />
    </Routes>
  )
}

export default App
