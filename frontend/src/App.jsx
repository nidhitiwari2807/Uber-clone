import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Home from "./pages/Home";
import Driver from "./pages/Driver";

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Signup />} />     {/* Default = Signup */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />  
        <Route path="/driver" element={<Driver />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

