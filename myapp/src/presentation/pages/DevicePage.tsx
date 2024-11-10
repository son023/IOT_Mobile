import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const devices = [
    { id: 1, type: "Máy bơm", name: "B1", location: "140-20", status: "Bật" },
    { id: 2, type: "Quạt", name: "Q2", location: "120-50", status: "Bật" },
    // Có thể thêm nhiều thiết bị hơn nếu cần
];

export const DevicePage = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Giao diện quản lý thiết bị</Text>
            <View style={styles.tableContainer}>
                <Text style={styles.tableHeader}>Quản lý thiết bị</Text>
                
                {/* Bảng tiêu đề cột */}
                <View style={styles.row}>
                    <Text style={styles.columnHeader}>Mã thiết bị</Text>
                    <Text style={styles.columnHeader}>Loại thiết bị</Text>
                    <Text style={styles.columnHeader}>Tên thiết bị</Text>
                    <Text style={styles.columnHeader}>Vị trí</Text>
                    <Text style={styles.columnHeader}>Trạng thái</Text>
                    <Text style={styles.columnHeader}>Hành động</Text>
                </View>

                {/* Dữ liệu thiết bị */}
                {devices.map((device) => (
                    <View style={styles.row} key={device.id}>
                        <Text style={styles.cell}>{device.id}</Text>
                        <Text style={styles.cell}>{device.type}</Text>
                        <Text style={styles.cell}>{device.name}</Text>
                        <Text style={styles.cell}>{device.location}</Text>
                        <Text style={styles.cell}>{device.status}</Text>
                        <TouchableOpacity style={styles.actionButton}>
                            <Text style={styles.actionButtonText}>Tắt</Text>
                        </TouchableOpacity>
                    </View>
                ))}

                {/* Các nút thêm và trở về */}
                <TouchableOpacity style={styles.addButton} onPress={() =>navigation.navigate("AddDevicePage")}>
                    <Text style={styles.addButtonText}>Thêm thiết bị</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backButtonText}>Trở về</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    tableContainer: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    tableHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: '#333',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingVertical: 8,
    },
    columnHeader: {
        flex: 1,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#555',
        textAlign: 'center',
    },
    cell: {
        flex: 1,
        fontSize: 14,
        color: '#333',
        textAlign: 'center',
    },
    actionButton: {
        backgroundColor: '#d9534f',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    actionButtonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    addButton: {
        backgroundColor: '#5bc0de',
        paddingVertical: 12,
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
        backgroundColor: '#0275d8',
        paddingVertical: 12,
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
