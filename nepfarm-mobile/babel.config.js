module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ttf', '.ts'],
        alias: {
          '@nepfarm': './src',
          assets: './src/assets',
          components: './src/components',
          constants: './src/constants',
          helpers: './src/helpers',
          custom_redux: './src/custom-redux',
          routes: './src/routes',
          screens: './src/screens',
          utils: './src/utils',
        },
      },
    ],
  ],
};
