import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TextInput, Button } from 'react-native-paper'

export default function Create(props) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [slug, setSlug] = useState("")

    const create_data = () => {
        fetch(`http://192.168.56.1:80/api/articles/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: title, description: description, slug: slug })
        }).then(res => res.json())
            .then(data => { props.navigation.navigate("Home", { data: data }) })
            .catch(err => { Alert.alert("Something went wrong", err) })
        console.log('Data INSERTED succesfully');
    };

    return (
        <View>
            <Text style={styles.titleList} >Create new ToDo</Text>
            <TextInput style={styles.inputTitle}
                label="Title"
                value={title}
                mode="outlined"
                onChangeText={text => setTitle(text)}
            />
            <TextInput style={styles.inputSlug}
                label={"Slug"}
                value={slug}
                mode="outlined"
                numberOfLines={1}
                onChangeText={text => setSlug(text)}
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
                onPress={() => create_data()}
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
    inputSlug: {
        padding: 5,
        margin: 10,
        marginTop: -8,
        marginBottom: 4,
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