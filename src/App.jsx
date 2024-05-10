import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./sections/footer";

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
      
    </>
  );
}

export default App;
