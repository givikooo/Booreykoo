import React from "react";
import Dashboard from './Components/BurgerMenu';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import About from "./Pages/About";
import Services from './Pages/Services';
import Contact from './Pages/Contact';

function App() {

  console.log("https://api.perse.pro/api/menu")
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        />
        <Route
          path="/about"
          element={
            <About />
          }
        />
        <Route
          path="/services"
          element={
            <Services />
          }
        />
         <Route
          path="/contact"
          element={
            <Contact />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App