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
import {NavDesitnations} from './navigation';
import {Screen1Props} from './screens/Screen1';
import {useCounterStore} from './counter-store';

export type AppProps = {componentId: string};

function App(props: AppProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const {counter, setCounter} = useCounterStore();

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
    gap: 20,
  };

  const navigateToScreen1 = () => {
    Navigation.push(props.componentId, {
      component: {
        name: NavDesitnations.Screen1.name,
        passProps: {
          counter: counter,
        } satisfies Omit<Screen1Props, 'componentId'>,
      },
    });
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <ScrollView contentContainerStyle={centeredColumnStyle}>
        <Text style={textStyle}>Welcome to React Native</Text>
        <Text style={textStyle}>Counter: {counter}</Text>
        <Button title="Increment" onPress={() => setCounter(counter + 1)} />

        <Button
          title="To Screen 1"
          onPress={navigateToScreen1}
          color="#841584"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

App.options = {
  topBar: {
    title: {
      text: 'Home',
    },
  },
} satisfies ComponentOptions;

export default App;
