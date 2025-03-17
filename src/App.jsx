import { Route, Routes } from 'react-router-dom'
import Service from './pages/Service'
import ServiceDetail from './pages/ServiceDetail'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Project from './pages/Project'
import ProjectDetail from './pages/ProjectDetail'
import Contact from './pages/contact'
import Home from './pages/home'
import About from './pages/about'

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/service' element={<Service />} />
      <Route path='/service-detail' element={<ServiceDetail />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/blog-detail' element={<BlogDetail />} />
      <Route path='/project' element={<Project />} />
      <Route path='/project-detail' element={<ProjectDetail />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default App
