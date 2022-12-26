import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class ClassA extends Component {
    render() {
        return (
            <Text>
                Hello from Class, your email is: {this.props.email}
            </Text>
        )
    }
}
