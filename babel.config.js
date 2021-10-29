module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  // plugins: ['react-native-reanimated/plugin'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
          navigation: './src/navigation',
          api: './src/api',
          asset: './src/asset',
          component: './src/component',
          screen: './src/screen',
          language: './src/language',
          util: './src/utils',
          constant: './src/constant',
          configureStore: './src/configureStore',
          data: './src/data',
          services: './src/services',
          manager: './src/manager',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
