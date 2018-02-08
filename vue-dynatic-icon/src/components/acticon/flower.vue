<template>
  <div class="wrapper">
    <span></span>
    <ul>
      <li>
        <div></div>
      </li>
      <li>
        <div></div>
      </li>
      <li>
        <div></div>
      </li>
      <li>
        <div></div>
      </li>
      <li>
        <div></div>
      </li>
      <li>
        <div></div>
      </li>
      <li>
        <div></div>
      </li>
      <li>
        <div></div>
      </li>
      <li>
        <div></div>
      </li>
      <li>
        <div></div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    data() {
      return {}
    }
  }
</script>

<style lang="less">
  @import url('../../assets/less/mixins.less');

  .wrapper {
    position: relative;
    width: 150px;
    height: 150px;
    margin: 100px auto;
    span {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      display: inline-block;
      width: 100px;
      height: 100px;
      margin: 25px;
      background-color: #309df9;
      border-radius: 100px;
      box-shadow: -13.5px 18px 62px 0px rgba(50, 154, 213, 0.44);
      animation: scaleCircle 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0s forwards,
                 changingColors 18.75s cubic-bezier(0.215, 0.61, 0.355, 1) 0.5s infinite;
    }
    ul {
      width: 150px;
      height: 150px;
      padding: 0;
      margin: 0;
      animation: ulRotateStart 1s cubic-bezier(0.55, 0.055, 0.675, 0.19) 1.25s forwards,
                 ulRotate 3.75s cubic-bezier(0.25, 0.25, 0.75, 0.75) 2.25s infinite;
      > li {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 20px;
        height: 20px;
        margin: auto;
        border-radius: 100px;
        opacity: 0;
        list-style-type: none;
        animation: apearing 0.75s cubic-bezier(0.215, 0.61, 0.355, 1) 0.5s forwards;
        div {
          height: 20px;
          width: 20px;
          border-radius: 100px;
        }
        .mixin-loop (@list, @i: 1) when (@i <= length(@list)) {  // loop 循环
          &:nth-child(@{i}) {
            transform: rotate(-90deg + @i * 36deg) translateX(120px);
            > div {
              @color: extract(@list, @i);
              background-color: #45a7fa;
              .rotate-animate(scaleCircles, scaleCirclesReverse, @color);
            }
          }
          .mixin-loop(@list, @i + 1);
        }
        .mixin-loop(@Color);
      }
    }
  }

  @keyframes ulRotateStart {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(30deg);
    }
  }

  @keyframes ulRotate {
    0% {
      transform: rotate(30deg);
    }
    100% {
      transform: rotate(390deg);
    }
  }

  @keyframes scaleCircles {
    0% {
      opacity: 0.6;
      transform: translateX(-168px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes scaleCirclesReverse {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    20% {
      opacity: 1;
      transform: translateX(0);
    }
    50% {
      opacity: 0.6;
      transform: translateX(-140px);
    }
    80% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes scaleCircle {
    0% {
      opacity: 0;
      transform: scale(0.5);
      box-shadow: 0px 0px 0px 0px rgba(35, 115, 182, 0.8);
    }
    100% {
      opacity: 1.0;
      transform: scale(1);
      box-shadow: -13.5px 17.899px 62px 0px rgba(35, 115, 182, 0.44);
    }
  }

  @keyframes changingColors {
    0% {
      background-color: #309df9;
      box-shadow: -13.5px 17.899px 62px 0px rgba(35, 115, 182, 0.44);
    }
    29% {
      background-color: #309df9;
      box-shadow: -13.5px 17.899px 62px 0px rgba(35, 115, 182, 0.44);
    }
    33% {
      background-color: #EE2C38;
      box-shadow: -13.5px 17.899px 62px 0px rgba(174, 32, 41, 0.44);
    }
    63% {
      background-color: #EE2C38;
      box-shadow: -13.5px 17.899px 62px 0px rgba(174, 32, 41, 0.44);
    }
    67% {
      background-color: #03110d;
      box-shadow: -13.5px 17.899px 62px 0px rgba(2, 12, 10, 0.44);
    }
    96% {
      background-color: #03110d;
      box-shadow: -13.5px 17.899px 62px 0px rgba(2, 12, 10, 0.44);
    }
    100% {
      background-color: #309df9;
      box-shadow: -13.5px 17.899px 62px 0px rgba(35, 115, 182, 0.44);
    }
  }
  
  @keyframes apearing {
    100% {
      opacity: 1;
    }
  }

  @Color: Color1 Color2 Color3 Color4 Color5 Color6 Color7 Color8 Color9 Color10;

  .color-keyframes(#309df9, #EE2C38, #03110d, Color1);
  .color-keyframes(#4aaafa, #f04751, #232f2c, Color2);
  .color-keyframes(#52adfa, #f14f59, #2c3835, Color3);
  .color-keyframes(#5bb2fa, #f25862, #384340, Color4);
  .color-keyframes(#68b7fb, #f3656d, #47514e, Color5);
  .color-keyframes(#77bffb, #f4747c, #5a6360, Color6);
  .color-keyframes(#8bc8fc, #f58990, #727a77, Color7);
  .color-keyframes(#a5d4fc, #f8a3a8, #919795, Color8);
  .color-keyframes(#a5d4fc, #f8a3a8, #919795, Color9);
  .color-keyframes(#eff7ff, #feeff0, #ebedec, Color10);
</style>
