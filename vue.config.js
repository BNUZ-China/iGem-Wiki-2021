const igemWikiWebpackPlugin = require('igem-wiki-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const igemConfig = {
  year: 2021,
  team_name: 'BNUZ-China'
}

const ENV = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production'
}

var javascriptSrc = function (origin) {
  switch (process.env.NODE_ENV) {
    case ENV.PRODUCTION:
      return origin.replace('js/', `https://${year}.igem.org/wiki/index.php?title=Template:${teamname}/js/`)
          .replace('.js', '')
        + '&action=raw&ctype=text/javascript';
    default:
      return origin
  }
}

var stylesheetSrc = function (origin) {
  switch (process.env.NODE_ENV) {
    case ENV.PRODUCTION:
      return origin.replace('css/', `https://${year}.igem.org/wiki/index.php?title=Template:${teamname}/css/`)
          .replace('.css', '')
        + '&action=raw&ctype=text/css';
    default:
      return origin
  }
}

var preprocessor = function (tagDefinition) {
  if (tagDefinition.tagName === 'script') {
    let result = tagDefinition;
    result.attributes.src = javascriptSrc(result.attributes.src);
    return result;
  }

  if (tagDefinition.tagName === 'link') {
    let result = tagDefinition;
    result.attributes.href = stylesheetSrc(result.attributes.href)
    return result
  }

  return tagDefinition
}

const year = igemConfig.year;
const teamname = igemConfig.team_name;

// eslint-disable-next-line no-unused-vars
var igemWikiWebpackPluginConfigGenerator = function (conf) {
  const entry = conf.configureWebpack.entry;
  const keys = Object.keys(entry);
  var singleConfGen = function (name) {
    return new igemWikiWebpackPlugin({
      template: `public/${name}.html`,
      filename: `${name}.html`,
      templateParameters: {
        BASE_URL: './'
      },
      chunks: [name],
      minify: true,
      tagDefinitionPreprocessor: preprocessor
    })
  }

  if (conf.configureWebpack.plugins === undefined) {
    conf.configureWebpack.plugins = []
  }
  let plugins = conf.configureWebpack.plugins;
  for (let name of keys) {
    plugins.push(singleConfGen(name))
  }

  return conf
}

// eslint-disable-next-line no-unused-vars
let prod_config = igemWikiWebpackPluginConfigGenerator({
  publicPath: './',
  outputDir: process.env.OUTPUT_PATH,
  productionSourceMap: false,
  configureWebpack: {
    entry: {
      index: './src/index.js',
      sample: './src/main.js'
    },
    plugins: [
      // new Ug
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      })
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          default: {
            name: 'common'
          }
        },
        minSize: 20000,
        maxSize: 1000000
      }
    }
  },
  chainWebpack: config => {
    config
      .module
      .rule("images")
      .test(/\.(jpe?g|png|gif|svg)$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        limit: 1,
        publicPath: './',
        outputPath: 'img',
        name: '[name].[hash:8].[ext]',
      })
      .end()
  }
});

const dev_config = {
  publicPath: './',
  outputDir: process.env.OUTPUT_PATH,
  productionSourceMap: false,
  pages: {
    sample: {
      entry: 'src/main.js',
      template: 'public/sample.html',
      filename: 'sample.html',
      title: 'Sample Page'
    },
    index_page: {
      entry: 'src/index.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Home Page'
    }
  }
};

let getConfig = function () {
  return process.env.NODE_ENV === 'production' ? prod_config : dev_config;
};

module.exports = getConfig();
