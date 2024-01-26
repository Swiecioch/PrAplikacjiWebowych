import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'

const router = createBrowserRouter([
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/',
    element: <App />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />  
  </React.StrictMode>,
)
