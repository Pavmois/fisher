module.exports = {
  // Для публикации на GithubPages -- удалить для релиза
  publicPath: process.env.NODE_ENV === 'production'
    ? '/fisher/'
    : '/',

  chainWebpack: config => {
    config.resolve.alias.set('vue', '@vue/compat')

    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2
            }
          }
        }
      })
    }
}