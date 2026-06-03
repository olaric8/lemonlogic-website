import Contact from "./Contact";
import InvoiceAutomation from "./InvoiceAutomation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import GSCA from "./GSCA";
import LAAutoworks from "./LAAutoworks";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
<Route
  path="/contact"
  element={<Contact />}
/>
        <Route
          path="/portfolio/gsca"
          element={<GSCA />}
        />

        <Route
          path="/portfolio/la-autoworks"
          element={<LAAutoworks />}
        />

        <Route
          path="/portfolio/invoice-automation"
          element={<InvoiceAutomation />}
        />
      </Routes>
    </BrowserRouter>
  );
}