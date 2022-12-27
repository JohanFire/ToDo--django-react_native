import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './Screens/Home'
import Create from './Screens/Create'

const Stack = createStackNavigator();

function App() {
    return (
        <View style={styles.container}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Create" component={Create} />
            </Stack.Navigator>
            <StatusBar style="auto" />
        </View  >
    );
}

export default () => {
    return (
        <NavigationContainer>
            <App />
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#47907e',
        marginTop: Constants.statusBarHeight,
    },
}); 2