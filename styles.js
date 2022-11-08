import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'purple',
      alignItems: 'center',
      justifyContent: 'center',
      justifyContent: "space-evenly"
    },
    jokeText: {
    jokeAlign: 'center',
    fontSize: 40,
    color: 'yellow'
    },
    punchline: {
    punchlineAlign: 'center',
    fontSize: 70,
    color: 'red',
    },
    bigButton:{
        color: 'blue',
        padding: 24,
        borderRadius: 6,
        backgroundColor: 'white'
    },
    buttonText:{
        color: 'black',
        fontSize: 30,
    }

})

export default styles;