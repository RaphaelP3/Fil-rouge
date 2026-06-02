import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Routes, Route, Link } from 'react-router-dom' 
import Header from './components/Header'
import Footer from './components/Footer'
import Scroll from './components/Scroll'
import { Home } from './pages/Home'
import { Anatomy } from './pages/Anatomy'
import { Body } from './pages/Body'
import { Bbody } from './pages/Bbody'
import { Muscles } from './pages/Muscles'
import { Bmuscles } from './pages/Bmuscles'
import { Skeleton } from './pages/Skeleton'
import { Bskeleton } from './pages/Bskeleton'
import { Organs } from './pages/Organs'
import { Diseases } from './pages/Diseases'

function App() {
  return (
      <div className='min-h-screen flex flex-col'>
        <Scroll/> 
        <Header/>
        <main className='p-15 mt-14 flex-1 bg-background'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/anatomy" element={<Anatomy/>}/>
            <Route path="/body" element={<Body/>}/>
            <Route path="/bbody" element={<Bbody/>}/>
            <Route path="/muscles" element={<Muscles/>}/>
            <Route path="/bmuscles" element={<Bmuscles/>}/>
            <Route path="skeleton" element={<Skeleton/>}/>
            <Route path="/bskeleton" element={<Bskeleton/>}/>
            <Route path="/organs" element={<Organs/>}/>
            <Route path="/diseases" element={<Diseases/>}/>

          </Routes>
        </main>
        <Footer/>
      </div>
  )
}

export default App
