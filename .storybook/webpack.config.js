module.exports = ({ config }) => {
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('awesome-typescript-loader')
        },
        {
          loader: require.resolve('react-docgen-typescript-loader')
        }
      ]
    },
    {
      test: /\.(stories|story)\.[tj]sx?$/,
      loader: require.resolve('@storybook/source-loader'),
      exclude: [/node_modules/],
      enforce: 'pre'
    }
  );

  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
