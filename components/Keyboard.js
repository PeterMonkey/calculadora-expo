import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Buttons from "./Buttoms";

const Keyboard = () => {

  const [display, setDisplay] = useState('0')
  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')
  const [operation, setOperation] = useState('')
  const [result, setResult] = useState(null)

  const setNumber = (number) => {
    if(display === '0'){
      setFirstNumber(number)
      setDisplay(number)
    }
    else {
      setDisplay(display + number)
      setFirstNumber(firstNumber + number)
    }
  }

  const clear = () => {
    setDisplay('0')
    setFirstNumber('')
    setSecondNumber('')
    setOperation('')
    setResult(null)
  }

  const handleOperation = (operation) => {
    setOperation(operation)
    setSecondNumber(firstNumber)
    setFirstNumber('')
    setDisplay(display + operation)
  }

  const deleted = () => {
    if(display.length > 1){
      setDisplay(display.substring(0, display.length - 1))
    }
    else {
      setDisplay('0')
    }
  }

  const getResult = () => {
    switch(operation){
      case "+":
        clear()
        setResult(parseInt(secondNumber) + parseInt(firstNumber))
        break
      case "-":
        clear()
        setResult(parseInt(secondNumber) - parseInt(firstNumber))
        break
      case "x":
        clear()
        setResult(parseInt(secondNumber) * parseInt(firstNumber))
        break
      case "/":
        clear()
        setResult(parseInt(secondNumber) / parseInt(firstNumber))
        break
      case "^":
        clear()
        setResult(parseInt(secondNumber) ** parseInt(firstNumber))
        break
      default:
        clear()
        setResult('')
    }
  }

  return (
    <View style={styles.container}>

      {/* display */}
      
      <View style={styles.display}>
        <Text style={{fontSize: 65}}>{result}</Text>
        <Text style={styles.result}>{display}</Text>
      </View>

      <View style={styles.keyboard}>
      <View style={styles.row}>
        <Buttons bg_color={"#F6F5F3"} text={"AC"} press={() => clear()} />
        <Buttons bg_color={"#F6F5F3"} text={"7"} press={() => setNumber("7")} />
        <Buttons bg_color={"#F6F5F3"} text={"4"} press={() => setNumber("4")} />
        <Buttons bg_color={"#F6F5F3"} text={"1"} press={() => setNumber("1")} />
        <Buttons bg_color={"#F6F5F3"} text={"x^n"} press={() => handleOperation("^")}/>
      </View>

      <View style={styles.row}>
        <Buttons bg_color={"#F6F5F3"} text={"%"} />
        <Buttons bg_color={"#F6F5F3"} text={"8"} press={() => setNumber("8")} />
        <Buttons bg_color={"#F6F5F3"} text={"5"} press={() => setNumber("5")} />
        <Buttons bg_color={"#F6F5F3"} text={"2"} press={() => setNumber("2")} />
        <Buttons bg_color={"#F6F5F3"} text={"0"} press={() => setNumber("0")} />
      </View>

      <View style={styles.row}>
        <Buttons bg_color={"#F6F5F3"} text={"c"} press={() => deleted()}/>
        <Buttons bg_color={"#F6F5F3"} text={"9"} press={() => setNumber("9")} />
        <Buttons bg_color={"#F6F5F3"} text={"6"} press={() => setNumber("6")} />
        <Buttons bg_color={"#F6F5F3"} text={"3"} press={() => setNumber("3")} />
        <Buttons bg_color={"#F6F5F3"} text={"."} press={() => setNumber(".")} />
      </View>

      <View style={styles.row}>
        <Buttons bg_color={"#FFC800"} text={"/"} press={() => handleOperation("/")} />
        <Buttons bg_color={"#FFC800"} text={"x"} press={() => handleOperation("x")} />
        <Buttons bg_color={"#FFC800"} text={"-"} press={() => handleOperation("-")} />
        <Buttons bg_color={"#FFC800"} text={"+"} press={() => handleOperation("+")} />
        <Buttons bg_color={"#FFC800"} text={"="} press={() => getResult()}/>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboard: {
    alignItems: "stretch",
    flexDirection: "row",
  },
  row: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    //margin: 10,
  },
  numb1: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignContent: "flex-end",
    margin: 10,
  },
  display: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-end",
    marginTop: 90,
    marginEnd: 20,
  },
  result: {
    fontSize: 40,
  },
});

export default Keyboard;
