import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ButtonComponent(props) {
    const { name, width = "40%", bgcolor = "#0077e4", textColor = "white", borderColor = "black" } = props;
    return (
        <TouchableOpacity
            style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: bgcolor,
                width: width,
                padding: 10,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: borderColor,
            }}

            {...props}
        >
            <Text style={{ fontSize: 18, color: textColor }}>{name}</Text>
        </TouchableOpacity>
    )
}