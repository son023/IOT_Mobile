import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Text, Dimensions } from 'react-native';
import { LineChart, ProgressChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

export  const HomePage= () =>{
  const [lineData, setLineData] = useState([50, 20, 2, 86, 71, 100, 29]);
  const [progressData, setProgressData] = useState([0.75, 0.82, 0.65]);

  // Tự động cập nhật dữ liệu để tạo hiệu ứng chuyển động
  useEffect(() => {
    const interval = setInterval(() => {
      setLineData(Array.from({ length: 7 }, () => Math.floor(Math.random() * 100)));
      setProgressData([Math.random(), Math.random(), Math.random()]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Area Chart (vùng) */}
      <LineChart
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [{ data: lineData }],
        }}
        width={screenWidth - 40}
        height={220}
        yAxisSuffix="°C"
        withDots={false}
        chartConfig={{
          ...chartConfig,
          backgroundGradientFrom: '#2a5298',
          backgroundGradientTo: '#1e3c72',
          color: (opacity = 1) => `rgba(143, 197, 255, ${opacity})`,
          fillShadowGradient: 'rgba(143, 197, 255, 0.5)',
          fillShadowGradientOpacity: 1,
        }}
        bezier
        style={styles.chart}
      />

      {/* Line Chart with Points and Labels */}
      <LineChart
        data={{
          labels: ['01', '02', '03', '04', '05', '06', '07'],
          datasets: [{ data: lineData }],
        }}
        width={screenWidth - 40}
        height={220}
        yAxisSuffix=""
        withDots={true}
        withShadow={false}
        withInnerLines={false}
        chartConfig={{
          ...chartConfig,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        style={styles.chart}
      />

      {/* Circular Progress Charts */}
      <View style={styles.progressContainer}>
        {progressData.map((progress, index) => (
          <View key={index} style={styles.progressWrapper}>
            <ProgressChart
              data={{ labels: [], data: [progress] }}
              width={100}
              height={100}
              strokeWidth={12}
              radius={32}
              chartConfig={{
                backgroundGradientFrom: '#08130D',
                backgroundGradientTo: '#08130D',
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
              }}
              hideLegend={true}
            />
            <Text style={styles.progressText}>{Math.round(progress * 100)}%</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  chart: {
    marginVertical: 10,
    borderRadius: 16,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  progressWrapper: {
    alignItems: 'center',
  },
  progressText: {
    position: 'absolute',
    top: 40,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});


