import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Blog from './pages/Blogs'
import { Eachblog } from './pages/Blog'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/blogs' element={<Blog/>}/>
    <Route path='/blog/:id' element={<Eachblog/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
