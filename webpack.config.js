// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展

const webpack = require('atool-build/lib/webpack');
const pxtorem = require('postcss-pxtorem');
const path = require('path');

module.exports = function (webpackConfig) {
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push(['import', {
    style: true,  // if true, use less
    libraryName: 'antd-mobile',
  }]);
  /*
  webpackConfig.module.loaders = webpackConfig.module.loaders.filter((loader) => {
    return loader.test.toString().indexOf('.svg') === -1;
  });
  webpackConfig.module.loaders.push({
    test: /\.svg$/,
    loader: require.resolve('svg-sprite-loader'),
  });
  */
  webpackConfig.postcss.push(pxtorem({
    rootValue: 100,
    propWhiteList: [],
  }));
  
  webpackConfig.devtool = 'source-map';
  webpackConfig.output = {
      path: path.join(__dirname, '.build/zhihu'), // 输出目标目录, 这里是 .build/sc-test
      publicPath: '',  // 输出静态资源的引用前缀
      filename: '[name].js'    // 构建输出的 JS 文件名, `[name]` 表示 entry 的 key
  };
  return webpackConfig;
};
