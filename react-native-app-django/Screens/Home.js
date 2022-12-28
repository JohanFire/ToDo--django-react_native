// type "rce" snippet to create a class component
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, FlatList, Alert } from 'react-native'
import { Card, FAB } from 'react-native-paper'

export default function Home(props) {
    const [name, setName] = useState("Johan")
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        get_data();
    }, [])

    const clickedItem = (item) => {
        console.log('ToDo Detail button pressed.');
        props.navigation.navigate("Details", { item })
    }

    const get_data = () => {
        fetch("http://192.168.56.1:80/api/articles/", {
            method: "GET"
        }).then(res => res.json())
            .then(data => {
                setData(data)
                setLoading(false)
            }).catch(err => { Alert.alert("Something went wrong", err) })
    };

    const render_data = (item) => {
        return (
            <Card style={[styles.elementCardStyle, { backgroundColor: '#96c7c3' }]}
                onPress={() => clickedItem(item)}
            >
                <Text style={styles.titleFlatList} >{item.title}</Text>
                <Text style={styles.slugFlatList} >{item.slug}</Text>
                <Text style={styles.descriptionFlatList} >{item.description}</Text>
            </Card>
        )
    }

    return (
        <View style={{ backgroundColor: '#47907e' }}>
            <Card style={styles.cardStyle}>
                {/* <Text style={styles.titleList}>{name}'s ToDo List</Text> */}
                <FlatList
                    data={data}
                    renderItem={(item) => {
                        return render_data(item.item)
                    }}
                    onRefresh={() => { get_data() }}
                    refreshing={loading}
                    keyExtractor={item => item.id}
                />
            </Card>
            <FAB style={styles.fab}
                small={false}
                icon="plus"
                onPress={() => console.log("Create button pressed.", props.navigation.navigate("Create"))}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    cardStyle: {
        padding: 5,
        margin: 20,
    },
    elementCardStyle: {
        padding: 10,
        margin: 10,
        backgroundColor: "#96c7c3",
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
    },
    slugFlatList: {
        fontSize: 10,
    },
    fab: {
        position: "absolute",
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: "#2dd26e",
    }
})