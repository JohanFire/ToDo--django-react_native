import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ToDoDetails(props) {
    const { id, title, description, slug } = props.route.params.item

    return (
        <View style={styles.details}>
            <Text style={styles.titleDetails}>{title}</Text>
            <Text style={styles.slugDetails}>#{slug}</Text>
            <Text style={styles.descriptionDetails}>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    details: {
        padding: 10,
        margin: 10,
    },
    titleDetails: {
        fontSize: 20,
        fontWeight: "bold",
    },
    slugDetails: {
        fontSize: 13,
        color: 'gray',
        marginTop: -2,
    },
    descriptionDetails: {
        fontSize: 14,
        marginTop: 10,
    },
})