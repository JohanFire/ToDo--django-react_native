import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TextInput, Button } from 'react-native-paper'

export default function Create() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return (
        <View>
            <Text style={styles.titleList} >Create new ToDo</Text>
            <TextInput style={styles.inputTitle}
                label="Title"
                value={title}
                mode="outlined"
                onChangeText={text => setTitle(text)}
            />
            <TextInput style={styles.inputDescription}
                label={"Description"}
                value={description}
                mode="outlined"
                multiline
                numberOfLines={10}
                onChangeText={text => setDescription(text)}
            />
            <Button style={styles.button}
                onPress={() => console.log("Pressed")}
                mode="contained"
                icon="content-save"

            > Save </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    titleList: {
        textAlign: "center",
        fontSize: 20,
        margin: 10,
        marginTop: 25,
    },
    inputTitle: {
        padding: 5,
        margin: 10,
    },
    inputDescription: {
        padding: 5,
        margin: 10,
    },
    button: {
        backgroundColor: "#1f533e",
        margin: 10,
        padding: 5,
        marginLeft: 60,
        marginRight: 60,
        borderRadius: 4,
    },
})