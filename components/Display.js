import { StyleSheet, Text, View } from "react-native";

const Display = ({text}) => {
  return (
    <View style={styles.display}>
      <Text style={styles.result}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-end",
    marginEnd: 20,
  },
  result: {
    fontSize: 40,
  },
});

export default Display;
