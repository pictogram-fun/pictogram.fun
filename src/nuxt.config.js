module.exports = {
  head: {
    title: 'pictogram.fun',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Pictogram.fun!!!'},
      {hid: 'keywords', name: 'keywords', content: 'ピクトグラム,pictogram,pictogram.fun,pictogram_fun,pictogramfun,ピクトさん'},
      {hid: 'og:title', name: 'og:title', content: "Pictogram Fun"},
      {hid: 'og:type', name: 'og:type', content: "website"},
      {hid: 'og:url', name: 'og:url', content: "https://pictogram.fun"},
      {hid: 'og:locale', name: 'og:locale', content: "ja_JP"},
      {
        hid: 'og:description', name: 'og:description',
        content: "世界で最も多く危険な仕事をこなし、国境・言語・性別・文化、あらゆるボーダーを超え活躍するタフでジェントルなヒト,、ピクトグラム！ ピクトグラムの活動を讃える、ピクトグラムに捧げるピクトグラムのためのインスタグラム",
      },
      {hid: 'og:site_name', name: 'og:site_name', content: "Pictogram Fun"},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: '///maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Rubik'},
    ],
  },
  plugins: [
    '~/plugins/vue-konva',
  ],
  loading: {color: '#22419B'},
  buildDir: '../functions/nuxt',
  build: {
    publicPath: '/assets/',
    extractCSS: true,
    babel: {
      presets: [
        'env',
        'stage-0',
      ],
      plugins: [
        ['transform-runtime', {
          polyfill: true,
          regenerator: true,
        }],
      ],
    },
    modules: [
      '@nuxtjs/pwa',
    ],
    manifest: {
      name: 'pictogram.fun',
      lang: 'ja',
    },
    vendor: [
      'vue-konva',
    ],
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
