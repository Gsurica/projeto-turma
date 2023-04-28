import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/Home";
import { About } from "../../pages/About";
import { Account } from "../../pages/Account";

const AppRoutes = () => {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={ <Home /> } /> 
              <Route path="/about" element={ <About /> } />
              <Route path="/account" element={ <Account /> } />

              <Route path="*" element={ <Navigate to="/" /> } />
          </Routes>
      </BrowserRouter>
  )
}

export default AppRoutes;