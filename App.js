import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [UseNumber, setUseNumber] = useState();

  const handleStartGame = (selectedNumber) => {
    setUseNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={handleStartGame}></StartGameScreen>;

  if (UseNumber) {
    content = <GameScreen></GameScreen>;
  }

  if(!loaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <Header title={"Guess the number"}></Header>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
