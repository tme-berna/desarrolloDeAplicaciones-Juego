import { Pressable, StyleSheet, Text, TouchableWithoutFeedback, View, Keyboard, Button } from "react-native";
import React, { useState } from "react";
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/Input";

const StartGameScreen = ({onStartGame}) => {
const [value, setValue] = useState("");
const [confirmed, setConfirmed] = useState(false);
const [selectedNumber, setSelectedNumber] = useState("");

const handleConfirmation = () => {
    const choseNumber = parseInt(value);
    if (choseNumber == NaN || choseNumber <= 0 || choseNumber > 99) return;


setConfirmed(true);
setSelectedNumber(choseNumber);
setValue("");
};

const handleResetInput = () => {
    setValue("");
    setConfirmed(false);
};

const handleInput = (text) => {
    console.log(text);
    setValue(text.replace(/[^0-9]/g, ""))
}

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Card>
                    <Text>Select a number</Text>
                    <Input value={value} onChangeText={handleInput}></Input>
                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.cleanButton}>
                        <Text style={{color: 'white'}}>Clean</Text>
                        </Pressable>
                        <Pressable style={{...styles.cleanButton,...styles.confirmButton,}}>
                        <Text style={{color: 'white'}}>Confirm</Text>
                        </Pressable>
                    </View>
                </Card>
            </View>
            {confirmed && (
                <Card newStyles={{ marginTop: 50, width: 150}}>
                    <Text>Your number</Text>
                    <Text>{selectedNumber}</Text>
                    <Button title="Start game" onPress={() => onStartGame(selectedNumber)}></Button>
                </Card>
            )}
        </TouchableWithoutFeedback>
    );
};

export default StartGameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        marginTop: 50

    },

    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'

    },
    cleanButton: {
        backgroundColor: colors.secondary,
        height: 35,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    confirmButton: {
        backgroundColor: colors.primary, 
        width: 80,


    }
});

