import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Text, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { LineChart, ProgressChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

export const HomePage = () => {
  const [lineData, setLineData] = useState([50, 20, 2, 86, 71, 100, 29]);
  const [progressData, setProgressData] = useState([0.75, 0.82, 0.65]);

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
    <ImageBackground
      source={require('../../../assets/bg2.jpg')}  // Đường dẫn tới ảnh nền
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          {/* Label chào người dùng */}
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>Xin chào, Nguyễn Văn Sơn</Text>
          </View>

          {/* Trạng thái tòa nhà */}
          <View style={styles.statusContainer}>
            <Text style={styles.statusLabel}>Trạng thái tòa nhà</Text>
            <Text style={styles.statusValue}>An toàn</Text>
          </View>

          {/* Nút Xem chỉ dẫn */}
          <TouchableOpacity style={styles.button} onPress={() => console.log('Xem chỉ dẫn')}>
            <Text style={styles.buttonText}>Xem chỉ dẫn</Text>
          </TouchableOpacity>
        </View>

        {/* Biểu đồ mẫu */}
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
          {/* Biểu đồ mẫu */}
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
          {/* Biểu đồ mẫu */}
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
          {/* Biểu đồ mẫu */}
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

        {/* Biểu đồ tiến trình */}
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
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    marginTop:20,
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
  labelContainer: {
    width: '90%',
    paddingVertical: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Màu nền nhạt
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  labelText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  statusLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  statusValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
  button: {
    width: '90%',
    paddingVertical: 15,
    backgroundColor: '#2D9CDB',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  card: {
    width: '90%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
});
