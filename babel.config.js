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
          nav: ['./src/S4-Navigation/'],
          redux: ['./src/S3-Redux/'],
          sagas: ['./src/S3-Redux/Sagas/'],
          homeScreen: ['./src/S2-Screens/S3-Home/'],
          settingsScreen: ['./src/S2-Screens/S4-Settings/'],
          authScreen: ['./src/S2-Screens/S1-Authorization/'],
          registerScreen: ['./src/S2-Screens/S2-Registration/'],
          detailsScreen: ['./src/S2-Screens/S5-Details/'],
          utils: ['./src/Common/Utils/'],
        },
      },
    ],
  ],
};
