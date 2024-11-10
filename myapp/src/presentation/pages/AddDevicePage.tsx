import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export const AddDevicePage = ({ navigation }) => {
    const [deviceId, setDeviceId] = useState('');
    const [deviceType, setDeviceType] = useState('');
    const [deviceName, setDeviceName] = useState('');
    const [location, setLocation] = useState('');
    const [status, setStatus] = useState('Bật');

    const handleAddDevice = () => {
        // Xử lý thêm thiết bị ở đây (ví dụ: Gửi thông tin tới backend hoặc cập nhật danh sách thiết bị)
        console.log("Thiết bị được thêm:", { deviceId, deviceType, deviceName, location, status });
        navigation.goBack(); // Quay về trang quản lý thiết bị sau khi thêm
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Thêm Thiết Bị Mới</Text>
            
            {/* Mã Thiết Bị */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Mã thiết bị:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập mã thiết bị"
                    value={deviceId}
                    onChangeText={setDeviceId}
                />
            </View>

            {/* Loại Thiết Bị */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Loại thiết bị:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập loại thiết bị"
                    value={deviceType}
                    onChangeText={setDeviceType}
                />
            </View>

            {/* Tên Thiết Bị */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Tên thiết bị:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập tên thiết bị"
                    value={deviceName}
                    onChangeText={setDeviceName}
                />
            </View>

            {/* Vị Trí */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Vị trí:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập vị trí"
                    value={location}
                    onChangeText={setLocation}
                />
            </View>

            {/* Trạng Thái */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Trạng thái:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập trạng thái (Bật/Tắt)"
                    value={status}
                    onChangeText={setStatus}
                />
            </View>

            {/* Nút Thêm và Trở Về */}
            <TouchableOpacity style={styles.addButton} onPress={handleAddDevice}>
                <Text style={styles.addButtonText}>Thêm thiết bị</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>Trở về</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop:30,
        flexGrow: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f7f7f7',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 15,
    },
    label: {
        fontSize: 14,
        color: '#333',
        marginBottom: 5,
        fontWeight: '500',
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#333',
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    addButton: {
        width: '100%',
        paddingVertical: 15,
        backgroundColor: '#5bc0de',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    backButton: {
        width: '100%',
        paddingVertical: 15,
        backgroundColor: '#0275d8',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    backButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
