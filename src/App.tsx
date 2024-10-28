import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import AboutCourse from "./components/AboutCourse"
import AboutUs from "./components/AboutUs"
import Contact from "./components/Contact"
import Header from "./components/common/Header"
const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutcourse" element={<AboutCourse />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App