import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Resources from "./pages/Resources.jsx";
import Valoration from "./pages/Valoration.jsx";
import Sickness from "./pages/Sickness.jsx";
import FichasInteractivas from "./pages/FichasInteractivas.jsx";
import Pdfs from "./pages/Pdfs.jsx";
import ResourcesType from "./pages/ResourcesType.jsx";
import Instructions from "./pages/Instructions.jsx";
import Referencias from "./pages/Referencias.jsx";

export default function App() {
  return (
    <Routes>
      {/* Ruta por defecto: Home */}
      <Route path="/" element={<Home />} />

      {/* Ruta del botón CONSULTAR */}
      <Route path="/menu" element={<Menu />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/fichasInteractivas" element={<FichasInteractivas />} />
      <Route path="/:type/resources-type" element={<ResourcesType />} />
      <Route path="/:type/pdfs/:enfermedad" element={<Pdfs />} />
      <Route path="/valoration" element={<Valoration />} />
      <Route path='sickness/:sickness' element={<Sickness/>} />
      <Route path='/instructions' element={<Instructions/>} />
      <Route path='/referencias' element={<Referencias/>} />
    </Routes>
  );
}
