<template>
    <div>
        <el-input placeholder="请输入起始站" v-model="data.ticketInputModel.startStation"></el-input>
        <el-input placeholder="请输入终点站" v-model="data.ticketInputModel.endStation"></el-input>
        <el-date-picker v-model="data.ticketInputModel.date" type="date" placeholder="选择日期">
        </el-date-picker>
        <el-input placeholder="请输入循环刷新时间" v-model="data.ticketInputModel.loopTime"></el-input>
        <el-button type="primary" @click="queryTickets">查询</el-button>
        <div v-for="item, index in data.ticketTables">
            <QueryTable :propMessage="item" :id="index" />
        </div>

    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { getCityCode } from '@/data/cityCode';
import QueryTable from './components/QueryTable.vue';

const data = reactive({

    ticketInputModel: {
        startStation: '阳新',
        endStation: '深圳北',
        date: new Date,
        loopTime: '1',
    },
    ticketTables: [] as Array<{ from: string, to: string, date: string, duringTime: number }>
})

const queryTickets = () => {
    console.log(data.ticketInputModel);
    // 形式为 2021-09-01
    let date = data.ticketInputModel.date.toISOString().split('T')[0];
    console.log(date);
    let from = getCityCode(data.ticketInputModel.startStation);
    let to = getCityCode(data.ticketInputModel.endStation);
    let duringTime = data.ticketInputModel.loopTime;

    console.log(from, to, date, duringTime);
    data.ticketTables.push({
        from: from,
        to: to,
        date: date,
        duringTime: parseInt(duringTime)
    });
}

</script>

<style scoped lang="sass">

</style>