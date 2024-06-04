import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Home from "./views/Home";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";

function App() {
  const URL_GHPAGES = "/happycake/";

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={`${URL_GHPAGES}Home`} element={<Home />} />
          <Route path={`${URL_GHPAGES}Contact`} element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
