import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "@/app/components/footer/Footer";
import Escuelas from "../components/pages/Escuelas/Escuelas";

export const RouterRoot = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/escuelas" element={<Escuelas />} />
          <Route path="/casas-avivamiento" element={<Main />} />
          <Route path="/contacto" element={<Main />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};
