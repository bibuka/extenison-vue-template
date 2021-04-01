module.exports = {
  pages: {
    popup: {
      template: 'public/browser-extension.html',
      entry: './src/popup/main.js',
      title: 'Popup',
    },
  },
  productionSourceMap: false,
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: 'src/background.js',
        },
        contentScripts: {
          entries: {
            page: 'src/page.js',
          },
        },
      },
      components: {
        background: true,
        contentScripts: true
      },
      manifestSync: ['version', 'description'],
    },
  },
  chainWebpack(config) {
    // Only convert .svg files that are imported by these files as Vue component
    const FILE_RE = /\.(vue|js|ts|svg)$/

    // Use vue-cli's default rule for svg in non .vue .js .ts files
    config.module.rule('svg').issuer(file => !FILE_RE.test(file))

    // Use our loader to handle svg imported by other files
    config.module
      .rule('svg-component')
      .test(/\.svg$/)
      .issuer(file => FILE_RE.test(file))
      .use('vue')
      .loader('vue-loader')
      .end()
      .use('svg-to-vue-component')
      .loader('svg-to-vue-component/loader')
  },
}
