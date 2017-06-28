<template>
  <b class="photo">
    <b class="photo-box">
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
  b.photo{
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    border: 1px solid @iconColor;
    border-radius: 10%;
    &::before{
      content: "";
      box-sizing: border-box;
      position: absolute;
      top: 10%;
      right: 10%;
      .setWH(20%);
      .circle();
      border: 1px solid @iconColor;
    }
    b.photo-box{
      .setWH(200%);
      position: absolute;
      top: 35%;
      left: 0;
      .animation(photo 2s linear infinite);
      i{
        position: absolute;
        border-radius: 10%;
        .setWH(50%);
        .iconbg();
        &:nth-child(1),
        &:nth-child(3){
          .transform(translate(-15%,20%) rotateZ(45deg));
        }
        &:nth-child(2),
        &:nth-child(4){
          .transform(translate(45%,40%) rotateZ(30deg));
        }
        &:nth-child(3),&:nth-child(4){
          left: 50%;
        }
      }
    }
  }

  @keyframes photo {
    0%{
      transform: translate(0%);
    }
    100%{
      transform: translate(-50%);
    }
  }
  @-webkit-keyframes photo {
    0%{
      transform: translate(0%);
    }
    100%{
      transform: translate(-50%);
    }
  }
</style>
