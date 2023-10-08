import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleProp,
  Text,
  TextStyle,
  useColorScheme,
  ViewStyle,
} from 'react-native';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [count, setCount] = React.useState(0);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#2f2f2f' : 'white',
  };

  const textStyle: StyleProp<TextStyle> = {
    fontSize: 30,
    color: isDarkMode ? 'white' : 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  };

  const centeredColumnStyle: StyleProp<ViewStyle> = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <ScrollView contentContainerStyle={centeredColumnStyle}>
        <Text style={textStyle}>Welcome to React Native</Text>
        <Text style={textStyle}>Here's a counter: {count}</Text>
        <Button title="Increment" onPress={() => setCount(c => c + 1)} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
