const pageStyle = {
  minHeight: "100vh",
  background: "#f8fafc",
  color: "#172033",
  fontFamily: "Inter, system-ui, sans-serif",
  padding: "56px 20px"
};

export default function Ok3dVerification() {
  return (
    <main style={pageStyle}>
      <section style={{ maxWidth: 760, margin: "0 auto", background: "#ffffff", borderRadius: 18, padding: "44px", boxShadow: "0 18px 55px rgba(15, 23, 42, 0.1)" }}>
        <p style={{ margin: 0, color: "#2d6a4f", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontSize: 13 }}>Business verification</p>
        <h1 style={{ margin: "12px 0 18px", fontSize: 38, lineHeight: 1.15 }}>OK3D Stores</h1>
        <p style={{ fontSize: 18, lineHeight: 1.65, margin: "0 0 28px" }}>
          OK3D ENTERPRISE, trading as OK3D Stores, is a general-merchandise business operated by LemonLogic AI.
        </p>
        <dl style={{ margin: 0, display: "grid", gap: 18 }}>
          <div><dt style={{ fontWeight: 700 }}>Legal business name</dt><dd style={{ margin: "4px 0 0" }}>OK3D ENTERPRISE</dd></div>
          <div><dt style={{ fontWeight: 700 }}>Business registration number</dt><dd style={{ margin: "4px 0 0" }}>9094955</dd></div>
          <div><dt style={{ fontWeight: 700 }}>Business activity</dt><dd style={{ margin: "4px 0 0" }}>General merchandise</dd></div>
          <div><dt style={{ fontWeight: 700 }}>Registered business address</dt><dd style={{ margin: "4px 0 0" }}>04, Ifoshi Road, Iyana Ejigbo, Ejigbo, Lagos State, Nigeria</dd></div>
          <div><dt style={{ fontWeight: 700 }}>Standardized verification address</dt><dd style={{ margin: "4px 0 0" }}>Plot 4 Ifoshi Road, Lagos, Nigeria</dd></div>
          <div><dt style={{ fontWeight: 700 }}>Business contact</dt><dd style={{ margin: "4px 0 0" }}><a href="mailto:hello@lemonlogicai.com" style={{ color: "#2563eb" }}>hello@lemonlogicai.com</a></dd></div>
        </dl>
        <p style={{ borderTop: "1px solid #e5e7eb", marginTop: 32, paddingTop: 24, color: "#475569", lineHeight: 1.6 }}>
          LemonLogic AI provides business systems and automation support for OK3D Stores, including its WhatsApp inventory and stock-control workflow.
        </p>
      </section>
    </main>
  );
}
