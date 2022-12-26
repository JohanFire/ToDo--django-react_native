import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import Home from './Screens/Home'

export default function App() {
    return (
        <View style={styles.container}>
            <Home />
            <Text style={styles.textStyle}>django-react_native!</Text>
            <Text style={{ fontSize: 15 }}>hello world!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column', // by default it is column
        marginTop: Constants.statusBarHeight,
    },
    textStyle: {
        fontSize: 25,
        color: 'red',
    }
});