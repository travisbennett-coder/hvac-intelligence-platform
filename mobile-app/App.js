import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

const systemCards = [
  { label: 'Indoor Temp', value: '72°F' },
  { label: 'Outdoor Temp', value: '81°F' },
  { label: 'Runtime', value: '6.4 hrs' },
  { label: 'System Health', value: 'Good' },
];

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>HVACIQ</Text>
        <Text style={styles.subtitle}>Home efficiency overview</Text>

        <View style={styles.grid}>
          {systemCards.map((item) => (
            <View key={item.label} style={styles.card}>
              <Text style={styles.cardLabel}>{item.label}</Text>
              <Text style={styles.cardValue}>{item.value}</Text>
            </View>
          ))}
        </View>

        <View style={styles.alertBox}>
          <Text style={styles.alertTitle}>Important Alert</Text>
          <Text style={styles.alertText}>
            Your system is 15 years old. Performance is trending above normal. Consider a replacement review.
          </Text>
        </View>

        <View style={styles.panel}>
          <Text style={styles.panelTitle}>Maintenance Checklist</Text>
          <Text style={styles.panelText}>- Refrigerant level check</Text>
          <Text style={styles.panelText}>- Amp draw review</Text>
          <Text style={styles.panelText}>- Electrical continuity check</Text>
          <Text style={styles.panelText}>- Thermostat calibration</Text>
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0d1721',
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#0d1721',
  },
  title: {
    color: '#edfbff',
    fontSize: 30,
    fontWeight: '800',
    marginTop: 16,
  },
  subtitle: {
    color: '#a3bac0',
    fontSize: 14,
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '48%',
    backgroundColor: '#12242d',
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#1a3847',
  },
  cardLabel: {
    color: '#9fc0c9',
    fontSize: 12,
    marginBottom: 8,
  },
  cardValue: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
  },
  alertBox: {
    backgroundColor: '#163f3b',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#2a6f69',
    marginBottom: 18,
  },
  alertTitle: {
    color: '#d9fff6',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  alertText: {
    color: '#d7f7f0',
    lineHeight: 22,
  },
  panel: {
    backgroundColor: '#111d2a',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#1c3246',
  },
  panelTitle: {
    color: '#edf4fb',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  panelText: {
    color: '#d7e7ef',
    lineHeight: 28,
  },
});
