import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ToDoDetails(props) {
    const { id, title, description, slug } = props.route.params.item

    return (
        <View>
            <Text>ToDoDetails screen</Text>
            <Text>
                {title}
                {description}
                {slug}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
})