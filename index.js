import {Navigation} from 'react-native-navigation';

// this file registers all screens
import {NavDesitnations, registerNavigation} from './navigation';

registerNavigation();

/** @see https://wix.github.io/react-native-navigation/docs/style-animations#stack-animations */
/** @type import('react-native-navigation').AnimationOptions */
const animations = {
  push: {
    content: {
      translationX: {
        from: require('react-native').Dimensions.get('window').width,
        to: 0,
        duration: 300,
      },
    },
  },
  pop: {
    content: {
      translationX: {
        from: 0,
        to: require('react-native').Dimensions.get('window').width,
        duration: 300,
      },
    },
  },
};

// @see https://wix.github.io/react-native-navigation/docs/basic-navigation
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        options: {
          animations,
        },
        children: [
          {
            component: {
              name: NavDesitnations.App.name,
            },
          },
        ],
      },
    },
  });
});
