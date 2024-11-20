import { Route, Routes } from "react-router-dom"
import Header from "./Components/Layout/Header/Header"
import Home from "./Pages/Home/Home"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const App = () => {
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