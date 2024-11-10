import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import Svg, { Circle, Path, Text as SvgText, Image as SvgImage } from 'react-native-svg';

export const MapPage = () => {
  const [doorLights, setDoorLights] = useState({
    north: false,
    south: false,
    east: false,
    west: false,
  });

  // Tự động đổi màu đèn mỗi 2 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setDoorLights((prevLights) => ({
        north: !prevLights.north,
        south: !prevLights.south,
        east: !prevLights.east,
        west: !prevLights.west,
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ImageBackground
      source={require('../../../assets/bg2.jpg')}  // Đặt đúng đường dẫn tới hình nền toàn màn hình
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <Text style={styles.title}>Bản đồ tòa nhà</Text>

      <Svg height="350" width="350">
        {/* Hình ảnh mô phỏng tòa nhà lớn hơn */}
        <SvgImage
          href={require('../../../assets/bg3.jpg')}  // Đặt đúng đường dẫn tới hình ảnh tòa nhà
          x="10" y="10"
          width="330" height="330"
        />

        {/* Cửa và đèn cho mỗi hướng với căn chỉnh mới */}

        {/* Cửa Bắc */}
        <SvgText x="140" y="50" fontSize="14" fill="black">Cửa Bắc</SvgText>
        <Circle cx="175" cy="40" r="10" fill={doorLights.north ? "green" : "red"} />
        <Path
          d="M 175 100 Q 165 90, 175 80 Q 185 90, 175 100 Z"
          fill={doorLights.north ? "green" : "grey"}
        />

        {/* Cửa Nam */}
        <SvgText x="140" y="330" fontSize="14" fill="black">Cửa Nam</SvgText>
        <Circle cx="175" cy="305" r="10" fill={doorLights.south ? "green" : "red"} />
        <Path
          d="M 175 260 Q 165 270, 175 280 Q 185 270, 175 260 Z"
          fill={doorLights.south ? "green" : "grey"}
        />

        {/* Cửa Đông */}
        <SvgText x="280" y="175" fontSize="14" fill="black">Cửa Đông</SvgText>
        <Circle cx="305" cy="175" r="10" fill={doorLights.east ? "green" : "red"} />
        <Path
          d="M 260 175 Q 270 165, 280 175 Q 270 185, 260 175 Z"
          fill={doorLights.east ? "green" : "grey"}
        />

        {/* Cửa Tây */}
        <SvgText x="35" y="175" fontSize="14" fill="black">Cửa Tây</SvgText>
        <Circle cx="40" cy="175" r="10" fill={doorLights.west ? "green" : "red"} />
        <Path
          d="M 100 175 Q 90 165, 80 175 Q 90 185, 100 175 Z"
          fill={doorLights.west ? "green" : "grey"}
        />
      </Svg>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Làm mờ ảnh nền
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    position: 'absolute',
    top: 50,
    textAlign: 'center',
  },
});
