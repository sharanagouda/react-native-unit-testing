/**
 * Button component
 * Renders a button and calls a function passed via onPress prop once tapped
 */

// import React, { Component } from 'react';
// import {
//     StyleSheet,       // CSS-like styles
//     Text,             // Renders text
//     TouchableOpacity, // Pressable container
//     View              // Container component
// } from 'react-native';

// export default class Button extends Component {
//     render({ onPress } = this.props) {
//         return (
//             <TouchableOpacity onPress={onPress}>
//                 <View style={styles.button}>
//                     <Text style={styles.text}>{this.props.text.toUpperCase()}</Text>
//                 </View>
//             </TouchableOpacity>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     // Button container
//     button: {
//         borderRadius: 50,         // Rounded border
//         borderWidth: 2,           // 2 point border widht
//         borderColor: '#FFFFFF',   // White colored border
//         paddingHorizontal: 50,    // Horizontal padding
//         paddingVertical: 10,      // Vertical padding
//     },
//     // Button text
//     text: {
//         color: '#FFFFFF',
//         fontWeight: 'bold',
//         fontFamily: 'Avenir',
//     },
// });

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    const { buttonStyle, textStyle } = styles;
    const { onPress, label } = props
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    buttonStyle: {
        height: 45,
        alignSelf: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#38ba7d',
        borderBottomWidth: 6,
        borderBottomColor: '#1e6343',
        borderWidth: 1,
        marginLeft: 15,
        marginRight: 15
    }
};

export default Button;