import { Routes, Route } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Work } from "./pages/Work";
import { CaseStudy } from "./pages/CaseStudy";
import { Insights } from "./pages/Insights";
import { Article } from "./pages/Article";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { Legal } from "./pages/Legal";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<Article />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Legal title="Privacy Policy" />} />
        <Route path="/terms" element={<Legal title="Terms of Service" />} />
        <Route path="/cookies" element={<Legal title="Cookie Policy" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
