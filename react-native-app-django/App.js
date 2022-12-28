import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './Screens/Home'
import Create from './Screens/Create'
import ToDoDetails from './Screens/ToDoDetails'
import EditToDo from './Screens/EditToDo'

const Stack = createStackNavigator();

const myStyle = {
    title: 'ToDo List',
    headerTintColor: '#fff',
    headerStyle: {
        backgroundColor: '#479070',
    }
}

function App() {
    return (
        <View style={styles.container}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={myStyle} />
                <Stack.Screen name="Create" component={Create} options={{ ...myStyle, title: "Create" }} />
                <Stack.Screen name="Details" component={ToDoDetails} options={{ ...myStyle, title: "Details" }} />
                <Stack.Screen name="EditToDo" component={EditToDo} options={{ ...myStyle, title: "Edit ToDo" }} />
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