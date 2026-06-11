import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import logo from "../assets/lemonlogic-logo.png";

const styles = StyleSheet.create({
  page: { padding: 40, fontSize: 12 },
  section: { marginBottom: 20 },
  heading: { fontSize: 16, marginBottom: 10, fontWeight: "bold" },
  text: { lineHeight: 1.5, marginBottom: 8 },
  
  // ScoreCard Styles
  scoreCard: {
    border: "2pt solid #facc15",
    padding: 20,
    marginBottom: 25,
  },
  scoreHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  metricLabel: {
    fontSize: 12,
    color: "#666",
    marginTop: 10,
  },
  metricValue: {
    fontSize: 20,
    fontWeight: "bold",
  },
  
  // Cover Page Styles
  coverPage: {
    padding: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 220,
    marginBottom: 30,
  },
  coverTitle: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  coverSubtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
    marginBottom: 40,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: "center",
    fontSize: 10,
    color: "#666",
  },
});

export default function ExecutiveReportPDF({
  score,
  readinessPercentage,
  level,
  summary,
  recommendations,
  priorities,
  solution,
  insights,
}) {
  return (
    <Document>
      {/* Cover Page */}
      <Page size="A4" style={styles.coverPage}>
        <Image src={logo} style={styles.logo} />
        
        <Text style={styles.coverTitle}>
          Executive Automation Assessment Report
        </Text>
        
        <Text style={styles.coverSubtitle}>
          Intelligent Automation & Business Systems
        </Text>

        <View style={styles.scoreCard}>
          <Text style={styles.scoreHeading}>Executive Scorecard</Text>
          <Text style={styles.metricLabel}>Automation Readiness</Text>
          <Text style={styles.metricValue}>{score} / 30</Text>
          <Text style={styles.metricLabel}>Readiness Percentage</Text>
          <Text style={styles.metricValue}>{readinessPercentage}%</Text>
          <Text style={styles.metricLabel}>Maturity Level</Text>
          <Text style={styles.metricValue}>{level}</Text>
        </View>

        <View style={{ marginTop: 30, alignItems: 'center' }}>
          <Text>Report Version: Executive Reporting Engine v1.1</Text>
          <Text>Generated: {new Date().toLocaleDateString()}</Text>
          <Text>Assessment Type: Automation Readiness Assessment</Text>
        </View>

        <Text style={styles.footer}>
          LemonLogic • Business Automation & Intelligence • www.lemonlogicai.com
        </Text>
      </Page>

      {/* Content Page */}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.heading}>Executive Summary</Text>
          <Text style={styles.text}>{summary}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Key Assessment Findings</Text>
          {insights?.length > 0 ? (
            insights.map((item, index) => (
              <Text key={index} style={styles.text}>• {item}</Text>
            ))
          ) : (
            <Text style={styles.text}>No significant operational risks were identified.</Text>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Priority Focus Areas</Text>
          {priorities?.map((item, index) => (
            <Text key={index} style={styles.text}>• {item}</Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Strategic Transformation Roadmap</Text>
          <Text style={{ fontWeight: 'bold' }}>Phase 1 – Process Standardization</Text>
          <Text style={styles.text}>Establish consistent workflows and document key operational processes.</Text>
          
          <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Phase 2 – Workflow Automation</Text>
          <Text style={styles.text}>Reduce manual effort through automation of repetitive business activities.</Text>
          
          <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Phase 3 – Executive Dashboards</Text>
          <Text style={styles.text}>Improve leadership visibility through real-time reporting and operational intelligence.</Text>
          
          <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Phase 4 – System Integration</Text>
          <Text style={styles.text}>Connect business systems and centralize critical operational information.</Text>
          
          <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Phase 5 – Continuous Optimization</Text>
          <Text style={styles.text}>Continuously improve performance through analytics, intelligence, and automation.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Recommended Priorities</Text>
          {recommendations?.map((item, index) => (
            <Text key={index} style={styles.text}>• {item}</Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Executive Conclusion</Text>
          <Text style={styles.text}>
            Based on the assessment findings, the organization demonstrates opportunities to improve operational visibility, workflow efficiency, information management, and business intelligence.
          </Text>
          <Text style={styles.text}>
            A phased modernization strategy focused on automation, operational intelligence, workflow optimization, and business systems integration would likely deliver measurable operational and strategic benefits.
          </Text>
          <Text style={styles.text}>
            LemonLogic recommends prioritizing the focus areas identified within this report and establishing a structured transformation roadmap aligned with business objectives.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Recommended LemonLogic Solution</Text>
          <Text style={styles.text}>{solution}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Schedule A Consultation</Text>
          <Text style={styles.text}>
            To discuss your assessment findings and explore automation opportunities, contact LemonLogic.
          </Text>
          <Text style={styles.text}>www.lemonlogicai.com</Text>
          <Text style={styles.text}>hello@lemonlogicai.com</Text>
        </View>

        <Text style={styles.footer}>
          LemonLogic • Business Automation & Intelligence • www.lemonlogicai.com
        </Text>
      </Page>
    </Document>
  );
}