<template>
  <div>
    <ul class="clearfix layout">
      <li>
        <div id="music">
          <musicline></musicline>
        </div>
        <h4>musicline</h4>
      </li>
      <li>
        <div id="loading">
          <loadline></loadline>
        </div>
        <h4>Loading</h4>
      </li>
      <li>
        <div id="jumpline">
          <jumpline></jumpline>
        </div>
        <h4>jumpline</h4>
      </li>
      <li>
        <div>
          <setting></setting>
        </div>
        <h4>Setting</h4>
      </li>
      <li>
        <div>
          <wifi></wifi>
        </div>
        <h4>Wifi</h4>
      </li>
      <li>
        <div id="shock">
          <shock></shock>
        </div>
        <h4>Shock</h4>
      </li>
      <li>
        <div>
          <photo></photo>
        </div>
        <h4>Photo</h4>
      </li>
      <li>
        <div>
          <dele></dele>
        </div>
        <h4>Delete</h4>
      </li>
      <li>
        <div>
          <ripple></ripple>
        </div>
        <h4>Ripples</h4>
      </li>
      <li>
        <div>
          <refresh></refresh>
        </div>
        <h4>Refresh</h4>
      </li>
      <li>
        <div id="time">
        <weixin></weixin>
        </div>
        <h4>Wechat</h4>
      </li>
      <li>
        <div>
        <help></help>
        </div>
        <h4>Help</h4>
      </li>
    </ul>
    <div class="flower">
      <flower></flower>
    </div>
  </div>
</template>

<script>
  import musicline from "acticon/musicline.vue"
  import loadline  from "acticon/loadline.vue"
  import photo from "acticon/photo.vue"
  import help from "acticon/help.vue"
  import setting from "acticon/setting.vue"
  import wifi from "acticon/wifi.vue"
  import shock from "acticon/shock.vue"
  import ripple from "acticon/ripple.vue"
  import dele from "acticon/delete.vue"
  import refresh from "acticon/refresh.vue"
  import jumpline from "acticon/jumpline.vue"
  import weixin from "acticon/weixin.vue"
  import flower from "acticon/flower.vue"

  export default{
    components: {
      musicline,
      loadline,
      photo,
      help,
      setting,
      wifi,
      shock,
      ripple,
      dele,
      refresh,
      jumpline,
      weixin,
      flower
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  .layout {
    list-style: none;
    width: 750px;
    margin: 10px auto 0;
    border: 1px solid #2bb48a;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0;

    li {
      width: 100px;
      height: 105px;
      margin: 15px 12px;
      border: 1px solid #CCCCCC;
      text-align: center;
      box-sizing: border-box;
      > div {
        display: flex;
        width: 40px;
        height: 40px;
        border: 1px solid transparent;
        margin: 25% auto 0;
        justify-content: center;
        align-items: center;
      }
      &:hover {
        border-color: #2f9842;
        cursor: pointer;
      }

      > h4 {
        font-size: 14px;
        font-weight: 400;
        color: #666666;
        line-height: 150%;
        margin-top: 5%;
      }
    }
  }

  .flower {
    width: 750px;
    margin: 20px auto;
    border: 1px solid #2bb48a;
  }

  @media screen and (max-width: 740px) {
    .layout {
      width: 100%;
      margin: 0;
      padding: 0;
    }

    .flower {
      width: 100%;
    }

    .layout > li {
      width: 25%;
      height: 30%;
    }
  }
</style>
