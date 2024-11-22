import { Route, Routes } from "react-router-dom"
import Header from "./Components/Layout/Header/Header"
import Home from "./Pages/Home/Home"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
const App = () => {
  useEffect(()=>{
    Aos.init({
      duration:1200
    });
  },[])
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App