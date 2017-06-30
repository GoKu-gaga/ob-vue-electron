<template>
  <Collapse v-model="value">
    <Panel name="basicInfo">
      平台基本信息
      <div slot="content">
        <Card style="width:320px">
          <h3>平台版本</h3>
          <p>v1.2.3.11</p>
        </Card>
      </div>
    </Panel>
    <Panel name="licenseInfo">
      授权信息
      <div slot="content">
        <div class="inner">
          <Card style="width:320px">
            <h3>授权状态</h3>
            <p>有效</p>
          </Card>
          <Card style="width:320px">
            <h3>授权类型</h3>
            <p>虚拟机</p>
          </Card>
          <Card style="width:320px">
            <h3>授权总量</h3>
            <p>200</p>
          </Card>
          <Card style="width:320px">
            <h3>已用总量</h3>
            <p>7</p>
          </Card>
          <Card style="width:320px">
            <h3>授权终止时间</h3>
            <p>2099-07-28</p>
          </Card>
        </div>
      </div>
    </Panel>
  </Collapse>
</template>
<script>
  export default {
    data () {
      return {
        value: 'basicInfo'
      }
    }
  }
</script>
<style scoped>
  .inner {
    display: flex;
    flex-wrap: wrap;
  }
</style>
