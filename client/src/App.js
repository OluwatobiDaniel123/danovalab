import React from "react";
import Home from "./components/home/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Footer from "./components/articles/Footer";
import Contact from "./components/articles/Contact";
import Header from "./components/articles/Header";
import About from "./components/articles/About";
import Cards from "./components/articles/Cards";
import Artists from "./components/articles/Artists";
import ServicePage from "./components/articles/Service";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Services" element={<ServicePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Cards />} />
        <Route path="/Contact" element={<Contact />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
