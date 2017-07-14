<template>
  <div id="page">
    <Form ref="loginForm" :model="formInfo" :rules="rules">
      <img id="logo" src="~@/assets/logo.png" alt="electron-vue">
      <Form-item prop="username">
        <Input type="text" v-model="formInfo.username" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </Form-item>
      <Form-item prop="password">
        <Input type="password" v-model="formInfo.password" placeholder="Password">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
        </Input>
      </Form-item>
      <Form-item>
        <Button type="success" @click="handleSubmit('loginForm')">登录</Button>
      </Form-item>
    </Form>
  </div>
</template>
<script>
  export default {
    name: 'login-page',
    data () {
      return {
        formInfo: {
          user: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '请填写用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        // this.$http.post('http://10.10.10.202:1024/v2/logon', this.formInfo)
        // .then((response) => {
        //   console.log(response)
        //   this.$Message.success('提交成功!')
        // })
        // .catch((error) => {
        //   this.$Message.error(error)
        //   console.log(error)
        // })
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$router.replace({path: '/main'})
            this.$Message.success('提交成功!')
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      }
    }
  }
</script>
<style scope>
  #page {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #logo {
    width: 300px;
    height: auto;
    margin-bottom: 16px;
  }
  Form {
    width: 300px;
  }
  Button {
    width: 100%;
  }
</style>
