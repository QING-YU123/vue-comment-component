<template>
    <div>
        <el-menu>
            <el-menu-item index="1" v-for="item, index in menuData" route="AIVoice">
                <router-link :to="item.router">
                    <el-text size="large">
                        {{ item.name }}
                    </el-text>
                </router-link>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { menuData } from '../data/menu';


</script>

<style scoped lang="sass">

</style>