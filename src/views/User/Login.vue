<template>
    <div>
        <el-form :model="data.loginModule" :rules="data.loginRules" ref="loginModule" label-width="80px">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="data.loginModule.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="data.loginModule.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm()">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">

import { reactive } from 'vue';
import { login } from '@/apis/user';
import { useCounterStore } from '@/stores/user';
import { ElMessage } from 'element-plus';

const userStore = useCounterStore()

const data = reactive({
    loginModule: {
        username: '',
        password: ''
    },
    loginRules: {
        username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
        ]
    }
})

async function submitForm() {
    let res = await login(data.loginModule)
    if (res.data.code == 200) {
        userStore.setUsername(data.loginModule.username)
        ElMessage.success('登录成功');
    } else {
        console.log('登录失败');
        ElMessage.error('登录失败');
    }
}




</script>

<style scoped lang="sass">

</style>