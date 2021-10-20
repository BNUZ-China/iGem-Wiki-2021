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

const pages_conf = {
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
  },
  description_page: {
    entry: 'src/description.js',
    template: 'public/description.html',
    filename: 'Description.html',
    title: 'description'
  },
  design_page: {
    entry: 'src/design.js',
    template: 'public/design.html',
    filename: 'Design.html',
    title: 'design'
  },
  experiment_page: {
    entry: 'src/experiment.js',
    template: 'public/experiment.html',
    filename: 'Experiment.html',
    title: 'experiment'
  },
  result_page: {
    entry: 'src/result.js',
    template: 'public/result.html',
    filename: 'Result.html',
    title: 'result'
  },
  proof_of_concept_page: {
    entry: 'src/proof_of_concept.js',
    template: 'public/proof_of_concept.html',
    filename: 'Proof_Of_Concept.html',
    title: 'result'
  },
  future_page: {
    entry: 'src/future.js',
    template: 'public/future.html',
    filename: 'Future.html',
    title: 'future'
  },
  engineering_page: {
    entry: 'src/engineering.js',
    template: 'public/engineering.html',
    filename: 'Engineering.html',
    title: 'engineering'
  },
  implementation_page: {
    entry: 'src/implementation.js',
    template: 'public/implementation.html',
    filename: 'Implementation.html',
    title: 'implementation'
  },
  model_page: {
    entry: 'src/model.js',
    template: 'public/model.html',
    filename: 'Model.html',
    title: 'Model'
  },
  models_and_results_page: {
    entry: 'src/webpack_plugin.js',
    template: 'public/webpack_plugin.html',
    filename: 'webpack_plugin.html',
    title: 'Webpack Plugin'
  },
  discussion_page: {
    entry: 'src/discussion.js',
    template: 'public/discussion.html',
    filename: 'Discussion.html',
    title: 'discussion'
  },
  safety_page: {
    entry: 'src/safety.js',
    template: 'public/safety.html',
    filename: 'Safety.html',
    title: 'safety'
  },
  human_practice_page: {
    entry: 'src/human_practices.js',
    template: 'public/human_practices.html',
    filename: 'Human_Practices.html',
    title: 'Human_Practices'
  },
  partnership_page: {
    entry: 'src/partnership.js',
    template: 'public/partnership.html',
    filename: 'Partnership.html',
    title: 'partnership'
  },
  communication_page: {
    entry: 'src/communication.js',
    template: 'public/communication.html',
    filename: 'Communication.html',
    title: 'communication'
  },
  parts_page: {
    entry: 'src/parts.js',
    template: 'public/parts.html',
    filename: 'Parts.html',
    title: 'parts'
  },
  contribution_page: {
    entry: 'src/contribution.js',
    template: 'public/contribution.html',
    filename: 'Contribution.html',
    title: 'contribution'
  },
  members_page: {
    entry: 'src/members.js',
    template: 'public/members.html',
    filename: 'Members.html',
    title: 'members'
  },
  attributions_page: {
    entry: 'src/attributions.js',
    template: 'public/attributions.html',
    filename: 'Attributions.html',
    title: 'Attributions'
  },
  notebook_page: {
    entry: 'src/notebook.js',
    template: 'public/notebook.html',
    filename: 'Notebook.html',
    title: 'notebook'
  },
  collaborations_page: {
    entry: 'src/collaborations.js',
    template: 'public/collaborations.html',
    filename: 'Collaborations.html',
    title: 'collaborations'
  }
};

// eslint-disable-next-line no-unused-vars
let prod_config = igemWikiWebpackPluginConfigGenerator({
  publicPath: './',
  outputDir: process.env.OUTPUT_PATH,
  productionSourceMap: false,
  configureWebpack: {
    entry: {
      index: './src/index.js',
      sample: './src/main.js',
      safety: './src/safety.js',
      attributions: './src/attributions.js',
      collaborations: './src/collaborations.js',
      communication: './src/communication.js',
      contribution: './src/contribution.js',
      description: './src/description.js',
      design: './src/design.js',
      discussion: './src/discussion.js',
      engineering: './src/engineering.js',
      experiment: './src/experiment.js',
      future: './src/future.js',
      human_practices: './src/human_practices.js',
      implementation: './src/implementation.js',
      members: './src/members.js',
      model: './src/model.js',
      notebook: './src/notebook.js',
      partnership: './src/partnership.js',
      proof_of_concept: './src/proof_of_concept.js',
      result: './src/result.js',
      parts: './src/parts.js',
      webpack_plugin: './src/webpack_plugin.js'
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
        limit: 10000,
        publicPath: './',
        outputPath: 'img',
        name: '[name].[hash:8].[ext]',
      })
      .end()
  },
  pages: pages_conf
});

const dev_config = {
  publicPath: './',
  outputDir: process.env.OUTPUT_PATH,
  productionSourceMap: false,
  pages: pages_conf
};

let getConfig = function () {
  return process.env.NODE_ENV === 'production' ? prod_config : dev_config;
};

module.exports = getConfig();
