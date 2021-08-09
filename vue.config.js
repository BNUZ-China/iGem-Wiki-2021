// var MiniCssExtractPlugin = require('mini-css-extract-plugin');

// var getImagePublicPath = function () {
//   switch (process.env.NODE_ENV) {
//     case 'development':
//       return './';
//     case 'production':
//       return 'https://2021.igem.org/File:T--BNUZ_China--';
//     case 'production_local':
//       return './';
//     case 'production_online_test':
//       return 'https://2021.igem.org/File:T--BNUZ_China--';
//     default:
//       return null;
//   }
// }
//
// var getCodePublicPath = function () {
//   switch (process.env.NODE_ENV) {
//     case 'development':
//       return './';
//     case 'production':
//       return 'https://2021.igem.org/File:T--BNUZ_China--';
//     case 'production_local':
//       return './';
//     case 'production_online_test':
//       return 'https://2021.igem.org/File:T--BNUZ_China--';
//     default:
//       return null;
//   }
// }

module.exports = {
  publicPath: process.env.PUBLIC_PATH,
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
  },
  // configureWebpack: {
  //   module: {
  //     rules: [
  //       {
  //         test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
  //         use: [
  //           /* config.module.rule('images').use('url-loader') */
  //           {
  //             loader: 'url-loader',
  //             options: {
  //               limit: 0,
  //               name: '[name].[hash:8].[ext]',
  //               outputPath: 'img2',
  //               publicPath: 'https://aaa.com/'
  //             }
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // },
  chainWebpack: config => {
    config.output.filename('js/[name].js');
    config.output.chunkFilename('js/[name].js');

    config.module.rule('images').use('url-loader').options({
      limit: 0,
      name: '[name].[hash:8].[ext]',
      outputPath: 'img',
      publicPath: 'https://aaa.com/'
    })

    // config.module.rule('js').use('cache-loader').options({
    //   name: '[name].[hash:8].[ext]',
    //   outputPath: 'js',
    //   publicPath: 'https://bbb.com/'
    // })

    config.module.rule('js').use('babel-loader').options({
      cwd: 'https://bbb.com/',
      // filenameRelative: '',
      filename: 'js/[name].[hash:8].[ext]'
      // outputPath: 'js',
    })
  },
  // css: {
  //   loaderOptions: {
  //     requireModuleExtension: false,
  //     css: {
  //       modules: {
  //         localIdentName: "aaa[name]_[local]_[hash:base64:5]"
  //       }
  //     }
  //   }
  // }
}