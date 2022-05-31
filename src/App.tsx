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

function App() {

  console.log("https://api.perse.pro/api/menu")
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard />
          }
        />
        <Route
          path="/about"
          element={
            <Home />
          }
        />
        <Route
          path="/about"
          element={
            <Dashboard />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App