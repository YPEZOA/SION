import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "@/app/components/footer/Footer";

export const RouterRoot = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/predicas" element={<Main />} />
        <Route path="/escuelas" element={<Main />} />
        <Route path="/casas-avivamiento" element={<Main />} />
        <Route path="/contacto" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
