import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Team from './Components/Team'
import ContactUs from './Components/ContactUs'
import BlogDetail from './Components/BlogDetails'
import Project from './Components/Projects'
import Services from './Components/Service'
import ServiceDetails from './Components/ServiceDetails'
import Index from './Components/Index'
import Blog from './Components/blog'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Service" element={<Services />} />
        <Route path="/ServiceDetails" element={<ServiceDetails />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/BlogDetail" element={<BlogDetail />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>

    </>
  )
}

export default App
