import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss'
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Searcher from "./components/Searcher/Searcher";
import PokByName from "./components/PokByName/PokByName";
import NavBar from "./components/NavBar/NavBar";

function App() {


  return (
    <>
        <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/pokInd" element={<PokByName/>}/>
          <Route path="/searcher" element={<Searcher/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
