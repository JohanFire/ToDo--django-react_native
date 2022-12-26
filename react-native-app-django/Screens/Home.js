// type "rce" snippet to create a class component
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-paper'

function Home() {
    return (
        <Card style={styles.cardStyle}>
            <Text>Home screen</Text>
        </Card>
    )
}

const styles = StyleSheet.create({
    cardStyle: {
        padding: 10,
        margin: 10,
    }
})

export default Home