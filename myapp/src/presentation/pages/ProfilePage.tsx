import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export const ProfilePage = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Background */}
      <ImageBackground 
        source={{ uri: 'https://baohagiang.vn/file/4028eaa4679b32c401679c0c74382a7e/102023/1_nhung_thua_ruong_20231029191840.jpg' }}
        style={styles.headerBackground}
        resizeMode="cover"
      >
        {/* Avatar */}
        <View style={styles.avatarContainer}>
          <Image 
            source={{ uri: 'https://lh3.googleusercontent.com/a/ACg8ocKi76V7RFNAYDcHKfXAv7dH3PLfk81tvGDbZziBT6CJmv1-M59D=s432-c-no' }}
            style={styles.avatar}
          />
          <Text style={styles.userName}>Nguyễn Văn Sơn</Text>
        </View>
      </ImageBackground>

      {/* User Information Section */}
      <View style={styles.infoSection}>
        <View style={styles.infoItem}>
          <Ionicons name="mail-outline" size={24} color="#2D9CDB" />
          <Text style={styles.infoText}>son.nguyen@example.com</Text>
        </View>
        <View style={styles.infoItem}>
          <Ionicons name="call-outline" size={24} color="#2D9CDB" />
          <Text style={styles.infoText}>+84 123 456 789</Text>
        </View>
        <View style={styles.infoItem}>
          <Ionicons name="location-outline" size={24} color="#2D9CDB" />
          <Text style={styles.infoText}>Hà Nội, Việt Nam</Text>
        </View>
      </View>

      {/* Navigate to Device Page Button */}
      <TouchableOpacity style={styles.deviceButton} onPress={() => navigation.navigate('DevicePage')}>
        <Text style={styles.buttonText}>Quản lý thiết bị</Text>
        <Ionicons name="chevron-forward-outline" size={24} color="#FFF" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#f0f2f5',
  },
  headerBackground: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: -50,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  infoSection: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  deviceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2D9CDB',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    marginVertical: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 10,
  },
});
