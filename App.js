import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';
//import joke-punch-line and other components
import Punchline from './Components/punchline';
import Joke from './Components/Joke';
import Another from './Components/AnotherOne';

export default function App() {
  //create state to hold jokes 
  const [jokeList, setJokelist] = useState();
  //create state to hold last joke index
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0)
  //create functionn to get another 
  const getNextJoke = () => {
    if (currentJokeIndex < jokeList.length -1) {
      setCurrentJokeIndex(currentJokeIndex +1)
      }else {
        setCurrentJokeIndex
      }
    }
    useEffect(() => {
      fetch ('https://api.sampleapis.com/jokes/goodJokes')
      .then(result => result.json())
      .then(setJokelist)
      .catch(alert)
    }, [])
    //useEffect to get all jokes 
    return (
      <View style={styles.container}>
        {jokeList
        ? <>
        <Joke joke={jokeList[currentJokeIndex].setup}/>
        <Punchline punchline={jokeList[currentJokeIndex].punchline}/>
        </>
        : null
        }
        <Another getNextJoke={getNextJoke}/>
      <StatusBar style="auto" />
    </View>
  );
}
