import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";

export default function App() {
  return (
    <Routes>
      {/* Ruta por defecto: Home */}
      <Route path="/" element={<Home />} />

      {/* Ruta del botón CONSULTAR */}
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}
