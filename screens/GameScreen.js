import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../components/Card'

const GameScreen = () => {

    const [currentGuess, setCurrentGuess] = useState()

    useEffect(() => {
        setCurrentGuess(Math.floor(Math.random()* (100 - 1) + 1));
    }, []);
    
    
    return (
        <View style={styles.container}>
        <Text>Guess of opponent</Text>
        <Text>{currentGuess}</Text>
        <Card newStyles={styles.buttonContainer}>
            <Button title='Minor' onPress={() => generate(1, 10)}></Button>
            <Button title='Major'></Button>
        </Card>
        </View>
    );
};

export default GameScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        width: 300
    },
});