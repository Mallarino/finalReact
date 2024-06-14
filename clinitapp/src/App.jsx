import Home from "./pages/frontend/home"
import Register from "./pages/frontend/register"
import Login from "./pages/frontend/login"
import NotFound from "./pages/frontend/notfound";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
      
    </>
  )
}

export default App
