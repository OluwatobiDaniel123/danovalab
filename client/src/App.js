import Home from "./home/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Header from "./components/Header";
import ServicePage from "./components/../pages/Service";
import RequestQuote from "./pages/RequestQoute";
import About_Page from "./components/../pages/About_Page";
import Portfolio from "./components/../pages/Portfolio";

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
