import Home from './pages/Home.jsx'
import Gallery from './pages/Gallery.jsx'
import Courses from './pages/Courses.jsx'
import Projects from './pages/Projects.jsx'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
