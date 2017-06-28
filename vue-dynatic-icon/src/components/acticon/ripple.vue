<template>
  <b class="ripples">
    <i></i>
    <i></i>
    <i></i>
  </b>
</template>

<script>
  export default{
    data() {
      return {}
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../assets/less/mixins";
  @import "../../assets/less/compatiable";
  b.ripples {
    position: relative;
    > i {
      .setWH(100%);
      .circle();
      .iconbg();
      position: absolute;
      opacity: 0;
      .animation(ripples 1.5s linear infinite);
      .setchild(@n,@i:1) when (@i <= @n) {
        @s: 0.2*(@i - 1);
        &:nth-child(@{i}) {
          .animateDelay(@s);
        }
        .setchild(@n, @i+1)
      }
      .setchild(3);
    }
  }

  @keyframes ripples {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      transform: scale(0.3);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }

  @-webkit-keyframes ripples {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      transform: scale(0.3);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
</style>
