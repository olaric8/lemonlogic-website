import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import GSCA from "./GSCA";
import LAAutoworks from "./LAAutoworks";

export default function App() {
return ( <BrowserRouter> <Routes>
<Route path="/" element={<Home />} />
<Route path="/portfolio/gsca" element={<GSCA />} />
<Route
path="/portfolio/la-autoworks"
element={<LAAutoworks />}
/> </Routes> </BrowserRouter>
);
}
