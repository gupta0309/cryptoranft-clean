// const webpack = require("webpack");

// module.exports = function override(config) {
//   const fallback = config.resolve.fallback || {};
//   Object.assign(fallback, {
//     crypto: require.resolve("crypto-browserify"),
//     stream: require.resolve("stream-browserify"),
//     assert: require.resolve("assert"),
//     http: require.resolve("stream-http"),
//     https: require.resolve("https-browserify"),
//     os: require.resolve("os-browserify"),
//     url: require.resolve("url"),
//   });
//   config.resolve.fallback = fallback;
//   config.plugins = (config.plugins || []).concat([
//     new webpack.ProvidePlugin({
//       process: "process/browser",
//       Buffer: ["buffer", "Buffer"],
//     }),
//   ]);
//   config.ignoreWarnings = [/Failed to parse source map/];
//   config.module.rules.push({
//     test: /\.(js|mjs|jsx)$/,
//     enforce: "pre",
//     loader: require.resolve("source-map-loader"),
//     resolve: {
//       fullySpecified: false,
//     },
//   });
//   return config;
// };

const webpack = require("webpack");

module.exports = function override(config) {
  /* =========================
     🔥 DISABLE ESLINT (CRITICAL)
     ========================= */
  config.plugins = config.plugins.filter(
    plugin => plugin.constructor.name !== "ESLintWebpackPlugin"
  );

  /* =========================
     Browser fallbacks
     ========================= */
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    assert: require.resolve("assert"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    os: require.resolve("os-browserify"),
    url: require.resolve("url"),
  });
  config.resolve.fallback = fallback;

  /* =========================
     Provide global vars
     ========================= */
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    })
  );

  /* =========================
     Ignore source map warnings
     ========================= */
  config.ignoreWarnings = [/Failed to parse source map/];

  /* =========================
     Source map loader
     ========================= */
  config.module.rules.push({
    test: /\.(js|mjs|jsx)$/,
    enforce: "pre",
    loader: require.resolve("source-map-loader"),
    resolve: {
      fullySpecified: false,
    },
  });

  return config;
};
