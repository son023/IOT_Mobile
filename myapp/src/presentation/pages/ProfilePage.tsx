
import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Svg, { Rect, Text, Circle, Path } from 'react-native-svg';

export const ProfilePage = () => {
  const [doorLights, setDoorLights] = useState({
    north: false,
    south: false,
    east: false,
    west: false,
  });

  // Hàm điều khiển đèn bật/tắt cho từng cửa
  const toggleLight = (door) => {
    setDoorLights((prevLights) => ({
      ...prevLights,
      [door]: !prevLights[door],
    }));
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Svg height="300" width="300">
        {/* Mặt nền của tòa nhà */}
        <Rect x="20" y="20" width="260" height="260" stroke="black" strokeWidth="4" fill="#f0f0f0" />

        {/* Cửa và đèn cho mỗi hướng */}
        
        {/* Cửa Bắc */}
        <Rect x="130" y="10" width="40" height="20" fill="#333" />
        <Text x="140" y="5" fontSize="14" fill="black">Cửa Bắc</Text>
        <Circle cx="150" cy="35" r="8" fill={doorLights.north ? "green" : "red"} />

        {/* Mũi tên chỉ hướng Bắc, cách xa đèn */}
        <Path
          d="M 150 80 Q 140 70, 150 60 Q 160 70, 150 80 Z"
          fill={doorLights.north ? "green" : "grey"}
        />

        {/* Cửa Nam */}
        <Rect x="130" y="270" width="40" height="20" fill="#333" />
        <Text x="140" y="310" fontSize="14" fill="black">Cửa Nam</Text>
        <Circle cx="150" cy="265" r="8" fill={doorLights.south ? "green" : "red"} />

        {/* Mũi tên chỉ hướng Nam, cách xa đèn */}
        <Path
          d="M 150 220 Q 140 230, 150 240 Q 160 230, 150 220 Z"
          fill={doorLights.south ? "green" : "grey"}
        />

        {/* Cửa Đông */}
        <Rect x="270" y="130" width="20" height="40" fill="#333" />
        <Text x="240" y="120" fontSize="14" fill="black">Cửa Đông</Text>
        <Circle cx="265" cy="150" r="8" fill={doorLights.east ? "green" : "red"} />

        {/* Mũi tên chỉ hướng Đông, cách xa đèn */}
        <Path
          d="M 220 150 Q 230 140, 240 150 Q 230 160, 220 150 Z"
          fill={doorLights.east ? "green" : "grey"}
        />

        {/* Cửa Tây */}
        <Rect x="10" y="130" width="20" height="40" fill="#333" />
        <Text x="25" y="120" fontSize="14" fill="black">Cửa Tây</Text>
        <Circle cx="35" cy="150" r="8" fill={doorLights.west ? "green" : "red"} />

        {/* Mũi tên chỉ hướng Tây, cách xa đèn */}
        <Path
          d="M 80 150 Q 70 140, 60 150 Q 70 160, 80 150 Z"
          fill={doorLights.west ? "green" : "grey"}
        />
      </Svg>

      {/* Nút điều khiển đèn ở 4 góc dưới màn hình */}
      <View style={styles.buttonContainer}>
        <Button title="Bật/Tắt Cửa Bắc" onPress={() => toggleLight('north')} />
        <Button title="Bật/Tắt Cửa Nam" onPress={() => toggleLight('south')} />
        <Button title="Bật/Tắt Cửa Đông" onPress={() => toggleLight('east')} />
        <Button title="Bật/Tắt Cửa Tây" onPress={() => toggleLight('west')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '80%',
  },
});



