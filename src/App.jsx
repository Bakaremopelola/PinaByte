import React from 'react'
import Home from './Components/Home';
import Projects from './Components/Projects';
import Services from './Components/Service';
import Team from './Components/Team';
import Blog from './Components/blog'
import ContactUs from './Components/ContactUs';
import "./App.css";



const App = () => {
  return (
    <div>
      <Home/>
      <Projects/>
      <Services/>
      <Team/>
      <Blog/>
      <ContactUs/>

    </div>
  )
}

export default App

