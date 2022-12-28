import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'

export default function ToDoDetails(props) {
    const { id, title, description, slug } = props.route.params.item

    return (
        <View style={styles.details}>
            <Text style={styles.titleDetails}>{title}</Text>
            <Text style={styles.slugDetails}>#{slug}</Text>
            <Text style={styles.descriptionDetails}>{description}</Text>
            <View style={styles.btnStyle}>
                <Button style={{ backgroundColor: "#1f533e", borderRadius: 4 }}
                    icon="update"
                    mode="contained"
                    onPress={() => console.log("Update button pressed")}
                >Update</Button>
                <Button style={{ backgroundColor: "#960d0b", borderRadius: 4 }}
                    icon="delete"
                    mode='contained'
                    onPress={() => console.log("Delete button pressed")}
                >Delete</Button>
            </View>
        </View >
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
    btnStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 14,
        padding: 10,
        alignContent: 'flex-end',
    },
    button: {},
})