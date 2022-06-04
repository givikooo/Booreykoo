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
import Layout from './Components/Layout';
import Portfolio from "./Pages/Portfolio";

function App() {

  console.log("https://api.perse.pro/api/menu")
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
         <Route
          path="portfolio"
          element={
            <Layout>
              <Portfolio />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App