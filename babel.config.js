module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          components: ['./src/Common/Components/'],
          hooks: ['./src/Common/Hooks/'],
          themes: ['./src/Common/Themes/'],
          nav: ['./src/Navigation/'],
          redux: ['./src/Redux/'],
          sagas: ['./src/Redux/Sagas/'],
          homeScreen: ['./src/Screens/Home/'],
          settingsScreen: ['./src/Screens/Settings/'],
          authScreen: ['./src/Screens/Authorization/'],
          registerScreen: ['./src/Screens/Registration/'],
          detailsScreen: ['./src/Screens/Details/'],
          utils: ['./src/Common/Utils/'],
          api: ['./src/Api/'],
          firebase: ['./src/Firebase/'],
          Svg: ['./src/Common/Icons/'],
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
