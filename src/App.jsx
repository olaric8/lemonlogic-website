import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import GSCA from "./GSCA";
import LAAutoworks from "./LAAutoworks";
import InvoiceAutomation from "./InvoiceAutomation";
import Blog from "./Blog.jsx";
import BlogPost from "./BlogPost.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Portfolio Routes */}
        <Route path="/portfolio/gsca" element={<GSCA />} />
        <Route path="/portfolio/la-autoworks" element={<LAAutoworks />} />
        <Route path="/portfolio/invoice-automation" element={<InvoiceAutomation />} />
        
        {/* Blog Routes */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        
        {/* Catch-all route for 404s */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}