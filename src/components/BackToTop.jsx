import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="fixed bottom-36 right-6 z-50 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold w-12 h-12 rounded-full shadow-lg transition-all duration-300"
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}