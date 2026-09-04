import jsPDF from "jspdf";

export const exportBoardReportPDF = ({
  assessmentData,
  improvement,
  riskLevel,
}) => {
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });
const pageWidth =
  pdf.internal.pageSize.getWidth();

const pageHeight =
  pdf.internal.pageSize.getHeight();

// =====================================
// COVER PAGE
// =====================================

pdf.setFont("helvetica", "bold");
pdf.setFontSize(28);

pdf.text(
  "LEMONLOGIC",
  pageWidth / 2,
  50,
  { align: "center" }
);

pdf.setFontSize(20);

pdf.text(
  "Executive Transformation",
  pageWidth / 2,
  75,
  { align: "center" }
);

pdf.text(
  "Intelligence Report",
  pageWidth / 2,
  88,
  { align: "center" }
);

pdf.setFont("helvetica", "normal");
pdf.setFontSize(12);

pdf.text(
  `Prepared For: ${
    assessmentData?.companyName ||
    "Client Organization"
  }`,
  pageWidth / 2,
  130,
  { align: "center" }
);

pdf.text(
  `Assessment Date: ${
    assessmentData?.assessmentDate
  }`,
  pageWidth / 2,
  145,
  { align: "center" }
);

pdf.text(
  `Report ID: ${
    assessmentData?.reportId
  }`,
  pageWidth / 2,
  160,
  { align: "center" }
);

pdf.setTextColor(200, 0, 0);

pdf.text(
  assessmentData?.classification ||
    "Executive Confidential",
  pageWidth / 2,
  175,
  { align: "center" }
);

pdf.setTextColor(0, 0, 0);

// =====================================
// START REPORT ON PAGE 2
// =====================================

pdf.addPage();

let y = 20;

  // Header
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(22);

  pdf.text(
    "Executive Board Report",
    pageWidth / 2,
    y,
    { align: "center" }
  );

  y += 10;

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(11);

  pdf.text(
    "LemonLogic Executive Intelligence Platform",
    pageWidth / 2,
    y,
    { align: "center" }
  );

  y += 8;

  pdf.text(
    `Generated: ${new Date().toLocaleDateString()}`,
    pageWidth / 2,
    y,
    { align: "center" }
  );

  y += 15;

  // Executive Metrics
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(16);
  pdf.text("Executive Metrics", 20, y);

  y += 10;

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(12);

  pdf.text(
    `Readiness Score: ${assessmentData?.readinessPercentage || 0}%`,
    20,
    y
  );

  y += 8;

  pdf.text(
    `Maturity Level: ${assessmentData?.level || "N/A"}`,
    20,
    y
  );

  y += 8;

  pdf.text(
    `Risk Level: ${riskLevel}`,
    20,
    y
  );

  y += 8;

  pdf.text(
    `Improvement Trend: ${
      improvement > 0 ? "+" : ""
    }${improvement}%`,
    20,
    y
  );

  y += 15;

  // Executive Summary
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(16);

  pdf.text("Executive Summary", 20, y);

  y += 10;

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(11);

  const summaryLines =
    pdf.splitTextToSize(
      assessmentData?.executiveNarrative ||
        "No executive summary available.",
      170
    );

  pdf.text(summaryLines, 20, y);

  y += summaryLines.length * 6 + 10;

  // Priority Focus Areas
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(16);

  pdf.text("Priority Focus Areas", 20, y);

  y += 10;

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(11);

  assessmentData?.priorities?.forEach(
    (priority) => {
      pdf.text(`• ${priority}`, 25, y);
      y += 7;
    }
  );

  y += 10;

  // Recommended Solution
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(16);

  pdf.text("Recommended Solution", 20, y);

  y += 10;

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(11);

  const solutionLines =
    pdf.splitTextToSize(
      assessmentData?.solution ||
        "No solution available.",
      170
    );

  pdf.text(solutionLines, 20, y);

  y += solutionLines.length * 6 + 10;

  // Strategic Recommendations
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(16);

  pdf.text(
    "Strategic Recommendations",
    20,
    y
  );

  y += 10;

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(11);

  assessmentData?.recommendations?.forEach(
    (recommendation) => {
      const lines =
        pdf.splitTextToSize(
          `• ${recommendation}`,
          170
        );

      pdf.text(lines, 25, y);

      y += lines.length * 6 + 3;
    }
  );

  y += 10;

  // Transformation Outlook
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(16);

  pdf.text(
    "Transformation Outlook",
    20,
    y
  );

  y += 10;

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(11);

  const outlook =
    `Based on current assessment data, the organization is operating at ${assessmentData?.level} maturity and demonstrates ${
      improvement > 0
        ? "a positive transformation trajectory."
        : "a stable transformation trajectory."
    }`;

  const outlookLines =
    pdf.splitTextToSize(
      outlook,
      170
    );

  pdf.text(outlookLines, 20, y);

  y += outlookLines.length * 6 + 15;

  // Footer
  pdf.line(
    20,
    y,
    pageWidth - 20,
    y
  );

  y += 10;

  pdf.setFont("helvetica", "bold");
  pdf.text("Prepared By", 20, y);

  y += 8;

  pdf.setFont("helvetica", "normal");

  pdf.text(
    "LemonLogic Executive Intelligence Platform",
    20,
    y
  );

  y += 6;

  pdf.text(
    "Executive Transformation Intelligence Report",
    20,
    y
  );

  pdf.save(
    "LemonLogic-Executive-Board-Report.pdf"
  );
};