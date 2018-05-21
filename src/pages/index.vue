<template>
  <section id="home">
    <h1>Welcome to Pictogram Fun !!!</h1>

    <img id="main-icon" src="../images/icon.png"/>

    <div class="links-wrap">
      <router-link class="link" to="/about">About</router-link>
    </div>

    <div class="home-section-sns">
      <a href="https://www.instagram.com/pictogram.fun/" target="_blank">
        <i class="fa fa-instagram sns-icon" aria-hidden="true"/>
      </a>
      <a href="https://twitter.com/pictogram_fun" target="_blank">
        <i class="fa fa-twitter sns-icon" aria-hidden="true"/>
      </a>
    </div>
  </section>
</template>

<script>
  export default {
    components: {},
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
