import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Paquetes from "./pages/Paquetes";
import Contacto from "./pages/Contacto"
import Mapa from "./pages/Mapa"
import WhatsappButton from "./components/WhatsappButton"; 
import PoliticaCancelacion from "./pages/PoliticaCancelacion"
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes"

function App() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/paquetes" element={<Paquetes />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/politica-cancelacion" element={<PoliticaCancelacion />} />
          <Route path="/mapa" element={<Mapa />} /> 
          <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
        </Routes>
      </main>
      <Footer />
      <WhatsappButton /> 
    </>
  );
}

export default App;


