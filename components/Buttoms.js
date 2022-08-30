import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from "react-native";

const Buttons = ({text, bg_color, press}) => {

    const styles = StyleSheet.create({
        button: {
            backgroundColor: bg_color,
            height: 75, 
            width: Dimensions.get('window').width / 4, 
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            margin: 3,
            borderBottomWidth: 3
        },
        text: { fontSize: 30 }
    })

    return(
        <View>
            <TouchableOpacity 
            style={styles.button}
            onPress={press}
            >
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}



export default Buttons