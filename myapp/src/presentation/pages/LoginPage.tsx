import { useNavigation } from "@react-navigation/native";
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
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
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Welcome Back!</Text>
                
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
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <Text style={styles.registerText}>
                    Don’t have an account? 
                    <Text 
                        style={styles.linkText} 
                        onPress={() => navigation.navigate('register')}>
                        Register
                    </Text>
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3ebe3',  // Màu nền ấm
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    card: {
        width: '100%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: '#6c4f3d',  // Tông màu chữ chính
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#f9f5f1',  // Màu nền cho input
        borderRadius: 15,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        color: '#6c4f3d',  // Màu chữ chính cho input
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
    },
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#d4a373',  // Màu nút login đồng bộ với Register Page
        borderRadius: 15,
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
        color: '#6c4f3d',
        textAlign: 'center',
    },
    linkText: {
        color: '#d4a373',  // Màu liên kết đồng bộ với màu nút
        fontWeight: '600',
        marginLeft: 5,
    },
});
