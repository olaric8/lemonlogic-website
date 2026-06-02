export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        <h3 className="text-2xl font-bold">
          Lemon<span className="text-yellow-400">Logic</span>
        </h3>

        <p className="mt-2 text-slate-400">
          Intelligent Automation & Business Systems
        </p>

        <div className="mt-6 space-y-2 text-slate-300">
          <p>
  Email:{" "}
  <a
    href="mailto:lemonlogicai1@gmail.com"
    className="hover:text-yellow-400"
  >
    lemonlogicai1@gmail.com
  </a>
</p>

          <p>
  Phone:{" "}
  <a
    href="tel:+2348144664481"
    className="hover:text-yellow-400"
  >
    +234 814 466 4481
  </a>
</p>

          <p>
  Website:{" "}
  <a
    href="https://lemonlogicai.com"
    className="hover:text-yellow-400"
  >
    lemonlogicai.com
  </a>
</p>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700">
          <p className="text-slate-400 text-sm">
            © 2026 LemonLogic. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}