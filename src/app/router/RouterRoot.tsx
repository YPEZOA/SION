import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Main from "../components/main/Main";

export const RouterRoot = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/predicas" element={<Main />} />
        <Route path="/escuelas" element={<Main />} />
        <Route path="/contacto" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};
