<template>
    <div>
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="姓名" prop="name">
            <el-input placeholder="请填写姓名" :maxLength="20" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-select placeholder="请选择性别" v-model="form.sex"></el-select>
          </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">





</script>

<style scoped lang="sass">

</style>