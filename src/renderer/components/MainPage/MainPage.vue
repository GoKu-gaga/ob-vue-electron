<template lang="html">
  <div class="layout">
      <Row type="flex">
        <i-col span="4" class="layout-menu-left">
          <nav-bar></nav-bar>
        </i-col>
        <i-col span="20" class="layout-container">
          <div class="layout-header"></div>
          <div class="layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb-item href="/dashboard">仪表盘</Breadcrumb-item>
              <Breadcrumb-item href="/landing">应用中心</Breadcrumb-item>
              <Breadcrumb-item href="/login">某应用</Breadcrumb-item>
            </Breadcrumb>
          </div>
          <div class="layout-content">
            <router-view></router-view>
          </div>
          <div class="layout-copy">
            2011-2017 &copy; TalkingData
          </div>
        </i-col>
      </Row>
    </div>
</template>

<script>
  import NavBar from '../NavBar/NavBar'
  export default {
    name: 'main-page',
    components: { NavBar }
  }
</script>

<style lang="css">
  .layout{
    background: #f5f7f9;
    position: relative;
    height: 100vh;
  }
  .layout-breadcrumb{
    padding: 10px 15px 0;
  }
  .layout-container{
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .layout-content{
    flex: 1;
    min-height: 200px;
    margin: 15px;
    overflow-y: auto;
    background: #fff;
    border-radius: 4px;
    padding: 5px;
  }
  .layout-content-main{
    padding: 10px;
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
    background-color: #fff;
  }
  .layout-menu-left{
    height: 100vh;
    background: #1c2438;
  }
  .layout-header{
    height: 60px;
    background: #1c2438;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
</style>
