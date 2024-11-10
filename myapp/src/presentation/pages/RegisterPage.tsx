import { useNavigation } from "@react-navigation/native";
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";

export const RegisterPage = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Register</Text>

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
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>

                <Text style={styles.loginText}>
                    Already have an account? 
                    <Text 
                        style={styles.linkText} 
                        onPress={() => navigation.navigate('login')}>
                        Login
                    </Text>
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3ebe3',
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
        color: '#6c4f3d',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#f9f5f1',
        borderRadius: 15,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        color: '#6c4f3d',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
    },
    registerButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#d4a373',
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
    loginText: {
        fontSize: 16,
        color: '#6c4f3d',
        textAlign: 'center',
    },
    linkText: {
        color: '#d4a373',
        fontWeight: '600',
        marginLeft: 5,
    },
});
