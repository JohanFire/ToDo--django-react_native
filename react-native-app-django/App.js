import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import Home from './Screens/Home'
import ClassA from './Screens/ClassA'

export default function App() {
    return (
        <View style={styles.container}>
            <Home />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eddfdf',
        marginTop: Constants.statusBarHeight,
    },
});