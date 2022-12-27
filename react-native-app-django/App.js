import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import Home from './Screens/Home'
import Create from './Screens/Create'

export default function App() {
    return (
        <View style={styles.container}>
            {/* <Home /> */}
            <Create />
            <StatusBar style="auto" />
        </View  >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#47907e',
        marginTop: Constants.statusBarHeight,
    },
});