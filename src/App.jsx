import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Paquetes from "./pages/Paquetes";
import Contacto from "./pages/Contacto"
import Galeria from "./pages/Galeria"

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
          <Route path="/galeria" element={<Galeria />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;


