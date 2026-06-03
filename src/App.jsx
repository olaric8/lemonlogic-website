import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import GSCA from "./GSCA";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/gsca" element={<GSCA />} />
      </Routes>
    </BrowserRouter>
  );
}