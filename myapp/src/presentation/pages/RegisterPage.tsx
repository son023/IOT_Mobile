import { useNavigation } from "@react-navigation/native";
import { Text, TextInput, View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";

export const RegisterPage = () => {
    const navigation = useNavigation();

    return (
        <ImageBackground
            source={require('../../../assets/bg2.jpg')}  // Đường dẫn tới ảnh nền
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.overlay} />
            <View style={styles.card}>
                <Text style={styles.title}>Đăng ký tài khoản</Text>

                <TextInput 
                    style={styles.input} 
                    placeholder="Email" 
                    placeholderTextColor="#888" 
                />

                <TextInput 
                    style={styles.input} 
                    placeholder="Tài Khoản" 
                    placeholderTextColor="#888" 
                />

                <TextInput 
                    style={styles.input} 
                    placeholder="Mật Khẩu" 
                    secureTextEntry 
                    placeholderTextColor="#888" 
                />

                <TextInput 
                    style={styles.input} 
                    placeholder="Xác nhận mật khẩu" 
                    secureTextEntry 
                    placeholderTextColor="#888" 
                />

                <TouchableOpacity style={styles.registerButton} onPress={() => console.log("Registering")}>
                    <Text style={styles.buttonText}>Đăng ký</Text>
                </TouchableOpacity>

                <Text style={styles.loginText}>
                    Bạn có tài khoản rồi?  
                    <Text 
                        style={styles.linkText} 
                        onPress={() => navigation.navigate('login')}>
                        Đăng nhập
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Lớp phủ mờ giúp làm nổi bật thẻ đăng ký
    },
    card: {
        width: '90%',
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',  // Màu trắng mờ giúp nhìn rõ hơn
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
    registerButton: {
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
    loginText: {
        fontSize: 16,
        color: '#FFFFFF',  // Màu trắng cho văn bản thông báo
        textAlign: 'center',
    },
    linkText: {
        color: '#2D9CDB',
        fontWeight: '600',
        marginLeft: 5,
    },
});
