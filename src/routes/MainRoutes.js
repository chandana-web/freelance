import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from '../mainLayout/MainLayout'
import Home from '../pages/home/Home'
import Services from '../pages/service/Services'
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'
import TndC from '../pages/t&c/TndC'
import Blog from '../pages/blog/Blog'
import Projects from '../pages/project/Projects'
import FreelancerProfile from '../pages/service/FreelancerProfile'

const MainRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='freelancerprofile' element={<FreelancerProfile/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/aboutus' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/terms&conditions' element={<TndC/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes