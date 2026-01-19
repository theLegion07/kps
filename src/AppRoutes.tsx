import { Route, Routes, useLocation } from "react-router-dom"
import About from "./Components/Main/About"
import Header from "./Components/Main/Header"
import Hero from "./Components/Main/Hero"
import { OverAllStuff } from "./Components/Subs/OverAllStuff"
import Footer from "./Components/Main/Footer"
import ScrollProgress from "./Components/Subs/ScrollProgress"
import Technical from "./Components/Subs/Technical"
import Articles from "./Components/Main/Articles"
import Contact from "./Components/Main/Contact"
import { AnimatePresence } from "framer-motion"
import ProjPrev from "./Components/Subs/ProjPrev"
import ScrollToTop from "./utils/ScrollToTop"
import Projects from "./Components/Main/Projects"

const Home = () => {
  return(
    <>
     <Hero />
     <OverAllStuff />
     <Technical />
     <ProjPrev />
    </>
  )
}
const AppRoutes = () => {
  const location = useLocation()

  return (
   <>
       <ScrollProgress />
       <Header />
       <ScrollToTop />
   <AnimatePresence mode="wait">
     <Routes location={location} key={location.pathname}>
      <Route  path="/" element={<Home />} />
       <Route path="/About" element = {<About />} />
       <Route path="/Projects" element = {<Projects />} />
       <Route path="/Contact" element = {<Contact />} />
       <Route path="/Articles" element = {<Articles />} />
    </Routes>
   </AnimatePresence>
   
    <Footer />
   </>
  ) 
}

export default AppRoutes