<template>
  <div class="login">
    <el-form
      ref="LoginForm"
      :model="loginForm"
      :rules="loginRules"
      class="fromWrap"
    >
      <h3 class="title">星空会员管理系统</h3>
      <el-form-item label="账号" prop="username">
        <el-input v-model.trim="loginForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model.trim="loginForm.password" type="password" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model.trim="loginForm.code" @keyup.enter="onLogin" />
        <img :src="imgCodeUrl" alt="正在加载" @click="loadCaptcha" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { getCaptcha } from '@/api/user'
const store = useStore()
const router = useRouter()
const LoginForm = ref('')
const imgCodeUrl = ref('')
/**
 * 表单数据对象
 */
const loginForm = reactive({
  username: 'test',
  password: '1234567',
  code: '',
  token: ''
})
/**
 * 表单验证规则
 */
const loginRules = {
  username: [
    {
      required: true,
      trigger: 'blur',
      validator: (rule, value, callback) => {
        if (value === '') {
          callback(new Error('用户名不能为空'))
        } else {
          callback()
        }
      }
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: (rule, value, callback) => {
        if (value === '') {
          callback(new Error('密码不能为空'))
        } else {
          callback()
        }
      }
    }
  ],
  code: [
    {
      required: true,
      trigger: 'blur',
      validator: (rule, value, callback) => {
        if (value === '') {
          callback(new Error('验证码不能为空'))
        } else if (value.length !== 5) {
          callback(new Error('验证码长度不正确'))
        } else {
          callback()
        }
      }
    }
  ]
}
/**
 * 登录事件
 */
const onLogin = async () => {
  LoginForm.value.validate(async (valid) => {
    if (!valid) return
    await store.dispatch('user/login', loginForm)
    router.push('/')
  })
}
/**
 * 获取验证码事件
 */
const loadCaptcha = async () => {
  const res = await getCaptcha()
  imgCodeUrl.value = res.captchaImg
  loginForm.token = res.token
}
loadCaptcha()
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  .fromWrap {
    border: 1px solid #000;
    padding: 20px 50px;
  }
}
</style>
