import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Inicio from "./pages/inicio.jsx";
import Solucao from "./pages/solucao.jsx";
import Impacto from "./pages/impacto.jsx";
import Contato from "./pages/contato.jsx";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/solucao" element={<Solucao />} />
          <Route path="/impacto" element={<Impacto />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
