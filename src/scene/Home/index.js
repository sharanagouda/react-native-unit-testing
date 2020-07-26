import React, { Component } from 'react';
import {
    StyleSheet,   // CSS-like styles
    Text,         // Renders text
    View,          // Container component,
    Alert
} from 'react-native';
import { Button2 } from '../../components';

export default class HomeScreen extends Component {
    onPress() {
        Alert.alert("Hello");
    }
    render() {
        return (
            <View style={[styles.slide, { backgroundColor: '#4AAFEE' }]}>
                <Button2 label="test label" primary onPress={this.onPress} />
                <Text style={styles.header}>PRAY</Text>
                <Text style={styles.text}>Prayer is one of the most important things a Christian can do</Text>
            </View>
        );
    }
}

const iconStyles = {
    size: 100,
    color: '#FFFFFF',
};

const styles = StyleSheet.create({
    // Slide styles
    slide: {
        flex: 1,                    // Take up all screen
        justifyContent: 'center',   // Center vertically
        alignItems: 'center',       // Center horizontally
    },
    // Header styles
    header: {
        color: '#FFFFFF',
        fontFamily: 'Avenir',
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 15,
    },
    // Text below header
    text: {
        color: '#FFFFFF',
        fontFamily: 'Avenir',
        fontSize: 18,
        marginHorizontal: 40,
        textAlign: 'center',
    },
});