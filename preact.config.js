export default (config, env, helpers) => {
  config.output.publicPath = '/cellular-automata/';
  config.plugins.push(
    new helpers.webpack.DefinePlugin({
      'process.env.PUBLIC_PATH': JSON.stringify(config.output.publicPath)
    })
  );
};
