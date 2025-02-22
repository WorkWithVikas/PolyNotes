import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Hero from './Pages/Hero'
import Upload from './Pages/Upload'
import Header from './Component/Header'
import Footer from './Component/Footer'
import DownloadPage from './Pages/DownloadPage.jsx'
import SyllabusPage from './Pages/SyllabusPage.jsx'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
   <>
   <div className="main">
    <Analytics />
    <Header />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/download" element={<DownloadPage />} />
      <Route path="/syllabus" element={<SyllabusPage />} />
    </Routes>
    </BrowserRouter>
    <Footer/>
   </div>
   </>
  )
}

export default App