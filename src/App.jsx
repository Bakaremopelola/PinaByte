import { useState } from 'react'

import './App.css'
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
     <Index/>
     <Project/>
     <Services/>
     <ServiceDetails/>
      <Team/>
      <Blog/>
     <BlogDetail/>
     <ContactUs/>
     

    </>
  )
}

export default App
