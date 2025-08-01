
import './App.css'
// import './Index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicePage from './pages/ServicePage'
import ProjectPage from './pages/ProjectPage'
import ContactPage from './pages/ContactPage'
import NotFound from './pages/NotFound';
// import { AnimatePresence } from 'framer-motion'
import 'animate.css'

function App() {

  const location = useLocation();

  return (
    <>
      <Navbar />
        {/* <AnimatePresence mode="wait"> */}
          <Routes location={location} key={location.pathname}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        {/* </AnimatePresence> */}
      <Footer />
    </>
  )
}

export default App
