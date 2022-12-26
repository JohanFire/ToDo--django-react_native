import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class ClassA extends Component {
    state = { email: "state@email.com" }

    render() {
        return (
            <View>
                <Text>
                    Hello from Class, your email is: {this.state.email}
                </Text>
                <Button title='Click Me'
                    onPress={() => this.setState({ email: "changedEmail@email.com" }, console.log('you clicked the button',))} />
            </View>
        )
    }
}