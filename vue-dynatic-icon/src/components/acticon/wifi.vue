<template>
  <b class="wifi">
    <b>
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
  @iconWH : 30;
  b.wifi {
    position: relative;
    .flex-around-end;
    > b {
      .setWH(25%);
      position: relative;
      i {
        box-sizing: border-box;
        border: 3px solid;
        border-color: @grey-dark transparent transparent transparent;
        opacity: 0;
        .circle();
        .setcenter();
        .setchild(@n,@i:1) when (@i <= @n) {
          @num: 750 - @i*150;
          &:nth-child(@{i}) {
            .setWH(unit(@num, %));
            @str: e('wifi@{i}');
            .animation(@str 2s infinite);
          }
          .setchild(@n, @i+1);
        }
        .setchild(3);
        &:nth-child(4) {
          opacity: 1;
          .iconbg;
          .transform(translate(-50%, -100%));
          @borderW: unit(@iconWH)*0.05;
          border-width: unit(ceil(@borderW), px);
        }
      }
    }
  }

  @keyframes wifi1 {
    66.6% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes wifi2 {
    33.3% {
      opacity: 0;
    }
    66.6% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes wifi3 {
    0% {
      opacity: 0;
    }
    33.3% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes wifi1 {
    66.6% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes wifi2 {
    33.3% {
      opacity: 0;
    }
    66.6% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes wifi3 {
    0% {
      opacity: 0;
    }
    33.3% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
</style>
