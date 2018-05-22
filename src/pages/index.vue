<template>
  <section id="home">
    <h1>Welcome to Pictogram Fun !!!</h1>

    <img id="main-icon" src="../images/icon.png"/>

    <div class="links-wrap">
      <router-link class="link" to="/about">About</router-link>
    </div>

    <div class="home-section-sns">
      <a v-for="(info, index) in snsInfo" :href="info.url" target="_blank" :key="`sns-link-${index}`">
        <i class="fa sns-icon" :class="info.faIcon" aria-hidden="true"/>
      </a>
    </div>
  </section>
</template>

<script>
  export default {
    computed: {
      snsInfo() {
        return [
          {
            url: 'https://www.instagram.com/pictogram.fun/',
            faIcon: 'fa-instagram',
          },
          {
            url: 'https://twitter.com/pictogram_fun',
            faIcon: 'fa-twitter',
          },
          {
            url: 'https://github.com/pictogram-fun/pictogram.fun',
            faIcon: 'fa-github',
          },
        ];
      },
    },
  };
</script>

<style scoped lang="sass">
  @import '../styles/color'

  #home
    text-align: center
    margin: 0 auto
    width: 80%

  .home-section-sns
    display: flex
    padding: 12px
    justify-content: center
    .sns-icon
      font-size: 8vw
      margin: 6px

  @media only screen and (max-width: 320px)
    .home-section-sns
      display: flex
      padding: 12px
      justify-content: center
      .sns-icon
        font-size: 10vw
        margin: 8px
</style>
