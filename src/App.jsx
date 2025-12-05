import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Resources from "./pages/Resources.jsx";
import Valoration from "./pages/Valoration.jsx";
import Sickness from "./pages/Sickness.jsx";

export default function App() {
  return (
    <Routes>
      {/* Ruta por defecto: Home */}
      <Route path="/" element={<Home />} />

      {/* Ruta del botón CONSULTAR */}
      <Route path="/menu" element={<Menu />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/valoration" element={<Valoration />} />
      <Route path='sickness/:sickness' element={<Sickness/>} />
    </Routes>
  );
}
