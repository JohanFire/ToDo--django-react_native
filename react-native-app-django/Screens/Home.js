// type "rce" snippet to create a class component
import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import { Card } from 'react-native-paper'

const myData = [
    { id: 1, title: "First Title", description: "First Description" },
    { id: 2, title: "Second Title", description: "Second Description" },
    { id: 3, title: "Third Title", description: "Third Description" },
    // { id: 4, title: "Fourth Title", description: "Fourth Description" },
    // { id: 5, title: "Fifth Title", description: "Fifth Description" },
    // { id: 6, title: "Sixth Title", description: "Third Description" },
    // { id: 7, title: "Seventh Title", description: "Seventh Description" },
    // { id: 8, title: "Eighth Title", description: "EightDescription" },
    // { id: 9, title: "Nineth Title", description: "Nineth Description" },
    // { id: 10, title: "Tenth Title", description: "TenthDescription" },
    // { id: 11, title: "Eleventh Title", description: "Eleventh Description" },
    // { id: 12, title: "Twelfth Title", description: "Twelfth Description" },
]

const renderData = (item) => {
    return (
        <Card style={styles.cardStyle}>
            <Text style={styles.titleFlatList} >{item.title}</Text>
            <Text style={styles.descriptionFlatList} >{item.description}</Text>
        </Card>
    )
}

export default function Home() {
    const [name, setName] = useState("Johan")

    return (
        <Card style={styles.cardStyle}>
            <Text style={styles.titleList}>{name}'s List</Text>
            <FlatList data={myData}
                renderItem={(item) => {
                    console.log(item)
                    return renderData(item.item)
                }}
                keyExtractor={item => item.id}
            />
        </Card>
    )
}

const styles = StyleSheet.create({
    cardStyle: {
        padding: 10,
        margin: 10,
    },
    titleList: {
        textAlign: "center",
        fontSize: 20,
        margin: 10,
    },
    titleFlatList: {
        fontSize: 16,
        fontWeight: "bold",
    },
    descriptionFlatList: {
        fontSize: 14,
    }
})