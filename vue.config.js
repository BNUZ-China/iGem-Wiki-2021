module.exports = {
    publicPath: './',
    productionSourceMap: false,
    configureWebpack: {

    },
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
}