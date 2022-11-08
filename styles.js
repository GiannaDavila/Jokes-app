import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      justifyContent: "space-around"
    },
    jokeText: {
    jokeAlign: 'center',
    fontSize: 40,
    color: 'yellow',
    padding: 5,
    },
    punchline: {
    punchlineAlign: 'center',
    fontSize: 40,
    color: 'red',
    },
    bigButton:{
        color: 'blue',
        padding: 24,
        borderRadius: 6,
        backgroundColor: 'brown',
        justifyContent: "flex-end"
    },
    buttonText:{
        color: 'white',
        fontSize: 30,
    }

})

export default styles;