import { useNavigation } from "@react-navigation/native";
import { Text, TextInput, View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import React, { useState } from "react";

export const LoginPage = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username && password) {
            console.log("Logging in with:", { username, password });
            // Logic đăng nhập ở đây (ví dụ: gọi API)
        } else {
            navigation.navigate("inapp");
        }
    };

    return (
        <ImageBackground
            source={require('../../../assets/bg2.jpg')}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.overlay} />
            <View style={styles.card}>
                <Text style={styles.title}>Chào mừng trở lại!</Text>
                
                <TextInput 
                    style={styles.input} 
                    placeholder="Tài Khoản" 
                    placeholderTextColor="#888"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Mật Khẩu" 
                    secureTextEntry 
                    placeholderTextColor="#888"
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Đăng nhập</Text>
                </TouchableOpacity>

                <Text style={styles.registerText}>
                    Bạn chưa có tài khoản? 
                    <Text 
                        style={styles.linkText} 
                        onPress={() => navigation.navigate('register')}>
                        Đăng ký
                    </Text>
                </Text>
            </View>
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Lớp phủ để làm mờ hình nền
    },
    card: {
        width: '90%',
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',  // Nền thẻ trong suốt nhẹ
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: '#FFFFFF',  // Màu trắng cho tiêu đề
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Màu nền sáng nhẹ với độ trong suốt
        borderRadius: 20,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        color: '#333',
        borderWidth: 1,
        borderColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#2D9CDB',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    registerText: {
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    linkText: {
        color: '#2D9CDB',
        fontWeight: '600',
        marginLeft: 5,
    },
});
