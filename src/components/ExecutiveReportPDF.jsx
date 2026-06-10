import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
  },

  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 14,
    marginBottom: 25,
    color: "#666",
  },

  section: {
    marginBottom: 20,
  },

  heading: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },

  text: {
    lineHeight: 1.5,
  },

  scoreCard: {
    border: "1 solid #ddd",
    padding: 15,
    marginBottom: 20,
  },

  score: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default function ExecutiveReportPDF({
  score,
  readinessPercentage,
  level,
  summary,
  recommendations,
  solution,
}) {
  return (
    <Document>

      <Page size="A4" style={styles.page}>

        <Text style={styles.title}>
          LemonLogic Executive Automation Assessment Report
        </Text>

        <Text style={styles.subtitle}>
          Executive Reporting Suite v1.0
        </Text>

        <View style={styles.scoreCard}>
          <Text style={styles.score}>
            Automation Readiness: {score}/30
          </Text>

          <Text>
            Readiness Percentage: {readinessPercentage}%
          </Text>

          <Text>
            Maturity Level: {level}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>
            Executive Summary
          </Text>

          <Text style={styles.text}>
            {summary}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>
            Recommended Priorities
          </Text>

          {recommendations?.map((item, index) => (
            <Text key={index}>
              • {item}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>
            Recommended LemonLogic Solution
          </Text>

          <Text>
            {solution}
          </Text>
        </View>

      </Page>

    </Document>
  );
}