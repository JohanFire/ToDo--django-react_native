// type "rce" snippet to create a class component
import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Card } from 'react-native-paper'

export default function Home() {
    const [name, setName] = useState("Johan")

    return (
        <Card style={styles.cardStyle}>
            <Text style={{ fontSize: 20 }}>Home screen, hello {name}!</Text>
            <Button title='Click Me'
                onPress={() => setName("changedName", console.log('you clicked the button',))} />
        </Card>
    )
}

const styles = StyleSheet.create({
    cardStyle: {
        padding: 10,
        margin: 10,
    }
})