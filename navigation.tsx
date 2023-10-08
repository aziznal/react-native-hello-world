import {Navigation} from 'react-native-navigation';
import Screen1 from './screens/Screen1';
import App from './App';

const AppName = 'com.myApp';

export const NavDesitnations = {
  App: {
    name: 'WelcomeScreen',
    component: () => App,
  },
  Screen1: {
    name: 'Screen1',
    component: () => Screen1,
  },
};

// Adding AppName prefix to all names
Object.values(NavDesitnations).forEach(entry => {
  entry.name = `${AppName}.${entry.name}`;
});

export function registerNavigation() {
  Object.values(NavDesitnations).forEach(entry => {
    Navigation.registerComponent(`${entry.name}`, entry.component);
  });
}
