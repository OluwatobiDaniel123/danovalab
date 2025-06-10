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
import ServicePage from "./components/articles/Service";
import RequestQuote from "./components/articles/RequestQoute";
import About_Page from "./components/articles/About_Page";
import Portfolio from "./components/articles/Portfolio";

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
        <Route path="/request_quote" element={<RequestQuote />} />
        <Route path="/About" element={<About_Page />} />
        <Route path="/Portfolio" element={<Portfolio />} />
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
