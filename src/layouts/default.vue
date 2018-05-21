<template>
  <transition name="fade" tag="div">
    <nuxt/>
  </transition>
</template>

<script>
  export default {
    data() {
      return {};
    },
  };
</script>

<style lang="sass">
  @import "../styles/color"

  html, body
    font-family: 'Rubik', sans-serif
    color: $color-base-text

  a
    color: $color-base-text

  h1
    font-size: 32px

  #main-icon
    max-width: 450px
    width: 100%

  .section
    max-width: 600px
    margin: 0 auto

    .text
      line-height: 28px
      font-size: 18px

    .text-sm
      line-height: 20px
      font-size: 12px

  .links-wrap
    .link
      font-size: 18px

  .fade-enter-active, .fade-leave-active
    transition: all .8s

  .fade-enter, .list-leave-to
    opacity: 0
    transform: translateY(-20px)

  @media only screen and (max-width: 320px)
    h1
      font-size: 16px

    .section
      .text
        line-height: 14px
        font-size: 9px

      .text-sm
        line-height: 10px
        font-size: 6px

    .links-wrap
      .link
        font-size: 14px
</style>
