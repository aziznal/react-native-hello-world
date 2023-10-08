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

import {
  Navigation,
  type Options as ComponentOptions,
} from 'react-native-navigation';
import {useCounterStore} from '../counter-store';

export type Screen1Props = {componentId: string} & {
  counter: number;
};

const Screen1 = (props: Screen1Props): JSX.Element => {
  const {setCounter} = useCounterStore();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#2f2f2f' : '#fafafa',
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
    gap: 40,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <ScrollView contentContainerStyle={centeredColumnStyle}>
        <Text style={textStyle}>Screen 1</Text>
        <Text style={textStyle}>Here's App's Counter: {props.counter}</Text>

        <Text style={textStyle}>Guess what? you can reset it!</Text>
        <Button title="reset counter" onPress={() => setCounter(0)} />

        <Button
          title="Back"
          onPress={() => Navigation.pop(props.componentId)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

Screen1.options = {
  topBar: {
    title: {
      text: 'Screen 1',
    },
  },
} satisfies ComponentOptions;

export default Screen1;
