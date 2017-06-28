<template>
  <b class="weixin">
    <b>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </b>
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
  @import "../../assets/less/var";
  b.weixin {
    box-sizing: border-box;
    border: 8px solid @iconColor;
    border-radius: 50%;
    position: relative;
    animation:weixin 4s infinite linear;
    > b {
      width: 2px;
      height: 17px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 0);
      transform-origin: center center;
      i {
        .setWH(100%);
        position: absolute;
        transform-origin: top center;
        background-color: #fff;
        .setChild(@n,@i:1) when (@i <= @n) {
          @deg: unit(45*@i, deg);

          &:nth-child(@{i}) {
            .transform(rotate(@deg) translate(-6px, -3px))
          }
          .setChild(@n, @i+1);
        }
        .setChild(8);
      }
    }
  }
  @keyframes weixin {
    0%{
      .transform(rotate(0deg));
    }
    100%{
      .transform(rotate(360deg));
    }
  }
</style>
