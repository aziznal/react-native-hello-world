import React from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [counter, setCounter] = React.useState(0);
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView className="w-full h-screen flex flex-col items-center justify-center bg-blue-600">
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        translucent={true}
      />

      <Text className="text-teal-200 text-5xl">{counter}</Text>

      <View className="flex-row">
        <Button onPress={() => setCounter(c => c + 1)} title="Increment" />
        <Button onPress={() => setCounter(c => c - 1)} title="Decrement" />
      </View>
    </SafeAreaView>
  );
}

export default App;
