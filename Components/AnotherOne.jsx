import { Text, TouchableOpacity  } from "react-native";
import { Button } from 'react-native'
import styles from "../styles";

export default function Another({getNextJoke}){
    return(
        <>
        <Button 
        // ViewComponent={LinearGradient}
        // LinearGradientProps={{
        //     colors: ["#FF9800", "#F44336"],
        //     start: { x: 0, y: 0.5},
        //     end:  { x: 1, y: 0.5 },
        // }}
        style={styles.buttonText} 
        onPress={getNextJoke} 
        title='Another One😌'></Button>
        </>
    )
}