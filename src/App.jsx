import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss'
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";

function App() {


  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
