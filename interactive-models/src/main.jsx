import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Project1 from './pages/Project1.jsx'
import Project2 from './pages/Project2.jsx'
import Project3 from './pages/Project3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/project-1" element={<Project1 />} />
        <Route path="/projects/project-2" element={<Project2 />} />
        <Route path="/projects/project-3" element={<Project3 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
