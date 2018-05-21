<template>
  <section id="about">
    <h1>About Pictogram.fun</h1>

    <img id="main-icon" src="../../images/icon.png"/>

    <div class="links-wrap">
      <router-link class="link" to="/">Home</router-link>
    </div>

    <div class="section">
      <p class="text">
        世界で最も多く危険な仕事をこなし、国境・言語・性別・文化、あらゆるボーダーを超え活躍するタフでジェントルなヒト、ピクトグラム！
        ピクトグラムの活動を讃える、ピクトグラムに捧げるピクトグラムのためのインスタグラム〜〜
      </p>

      <p class="text">
        Who does skillfully perform a difficult and dangerous job?
        That’s Pictogram! His job is “alert”. He uses his body and tell us our dangerous. He does not
        care about cross-border, language barrier,gender, and cultures.
      </p>

      <p class="text-sm">
        ※ピクトグラムとは・・・
        非常口のあの人。言語に制約されず体を張って伝達を直感的に行う達人。
      </p>
    </div>
  </section>
</template>

<script>
  const title = 'About - pictogram.fun';
  const description = '世界で最も多く危険な仕事をこなし、国境・言語・性別・文化、あらゆるボーダーを超え活躍するタフでジェントルなヒト、ピクトグラム！' +
    'ピクトグラムの活動を讃える、ピクトグラムに捧げるピクトグラムのためのインスタグラム〜〜';

  export default {
    head: {
      title,
      meta: [
        {hid: 'description', name: 'description', content: description},
        {hid: 'og:title', name: 'og:title', content: title},
        {hid: 'og:url', name: 'og:url', content: "https://pictogram.fun/about"},
        {hid: 'og:description', name: 'og:description', content: description},
      ],
    },
    name: "index",
  };
</script>

<style scoped lang="sass">
  #about
    text-align: center
    margin: 0 auto
    width: 80%
</style>
