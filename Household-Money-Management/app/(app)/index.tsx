// screens/GraphScreen.tsx

import React from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import {
  LineChart,
  PieChart,
} from 'react-native-chart-kit';

// Get screen width for responsive chart sizing
const screenWidth = Dimensions.get('window').width;

// --- Chart Configuration (Styling) ---
const chartConfig = {
  backgroundColor: '#e26a00', // Background color for the chart area itself (gradient start)
  backgroundGradientFrom: '#fb8c00', // Gradient start color
  backgroundGradientTo: '#ffa726', // Gradient end color
  decimalPlaces: 2, // optional, defaults to 2dp for labels
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Line/bar/text color
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Axis label color
  style: {
    borderRadius: 16,
  },
  propsForDots: { // Style for the dots on the line chart
    r: '6', // Radius
    strokeWidth: '2',
    stroke: '#ffa726', // Dot border color
  },
};

// --- Sample Data ---
const lineChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
      ],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional line color override
      strokeWidth: 2, // optional line width override
    },
  ],
  legend: ['Rainy Days'],
};

const pieChartData = [
    { name: "Seoul", population: 21500000, color: "rgba(131, 167, 234, 1)", legendFontColor: "#7F7F7F", legendFontSize: 15 },
    { name: "Toronto", population: 2800000, color: "#F00", legendFontColor: "#7F7F7F", legendFontSize: 15 },
    { name: "Beijing", population: 527612, color: "red", legendFontColor: "#7F7F7F", legendFontSize: 15 },
    { name: "New York", population: 8537673, color: "#ffffff", legendFontColor: "#7F7F7F", legendFontSize: 15 },
    { name: "Moscow", population: 11920000, color: "rgb(0, 0, 255)", legendFontColor: "#7F7F7F", legendFontSize: 15 }
];


export default function GraphScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Chart Examples</Text>
      <Text style={styles.chartTitle}>Line Chart</Text>
      <LineChart
        data={lineChartData}
        width={screenWidth - 32} // from react-native (minus padding)
        height={220}
        yAxisLabel="$" // Optional: prefix for Y-axis values
        yAxisSuffix="k" // Optional: suffix for Y-axis values
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={chartConfig}
        bezier // Makes the line curved
        style={styles.chartStyle}
      />
      <Text style={styles.chartTitle}>Pie Chart</Text>
       <PieChart
            data={pieChartData}
            width={screenWidth - 32}
            height={220}
            chartConfig={chartConfig}
            accessor={"population"} // Key in data objects to use for values
            backgroundColor={"transparent"} // Make background transparent if needed
            paddingLeft={"15"} // Adjust padding if labels get cut off
            // center={[10, 50]} // Optional: Adjust center position
            absolute // Show absolute values instead of percentages
            style={styles.chartStyle}
        />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Light background for the whole screen
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 25,
    marginBottom: 10,
    color: '#555',
  },
  chartStyle: {
    marginVertical: 8,
    borderRadius: 16, // Match border radius in chartConfig
  },
});