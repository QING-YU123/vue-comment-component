<template>
    <div>
        <h1>注册</h1>
        <el-form ref="form" :model="data.registerModule" :rules="data.registerRules" label-width="80px">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="data.registerModule.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="data.registerModule.password"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="data.registerModule.email"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
                <el-input v-model="data.registerModule.phone"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm()">注册</el-button>
            </el-form-item> 
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';


const data = reactive({
    registerModule: {
        username: '',
        password: '',
        email: '',
        phone: '',
    },
    registerRules: {
        username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ],
        email: [
            { required: true, message: '请输入邮箱', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
        ],
        phone: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { pattern: /^1[3|4|5|7|8][0-9]\d{8}$/, message: '请输入正确的手机号', trigger: 'blur' }
        ]
    }
})

function submitForm() {
    
}



</script>

<style scoped lang="sass">

</style>