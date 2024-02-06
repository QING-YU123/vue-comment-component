<template>
    <div>
        <div class="queryInfo">
            <!-- 简单的在一行上写明出发点，到达点和日期 -->
            <div class="fromTo">
                {{ getCityNameByCode(data.ticketModel.from) }} -> {{ getCityNameByCode(data.ticketModel.to) }}
            </div>
            <div class="date">
                {{ data.ticketModel.date }}
            </div>
        </div>
        <div class="showTable">
            <!-- 使用el-table展示ticketsInfos的内容 -->
            <el-table :data="data.ticketInfos" style="width: 100%">
                <el-table-column prop="trainNo" label="车次" width="75">
                </el-table-column>
                <el-table-column prop="fromStation" label="出发站" width="75">
                </el-table-column>
                <el-table-column prop="toStation" label="到达站" width="75">
                </el-table-column>
                <el-table-column prop="startTime" label="出发时间" width="75">
                </el-table-column>
                <el-table-column prop="endTime" label="到达时间" width="75">
                </el-table-column>
                <el-table-column prop="duration" label="历时" width="75">
                </el-table-column>
                <el-table-column prop="businessSeat" label="商务座" width="75">
                </el-table-column>
                <el-table-column prop="firstClassSeat" label="一等座" width="75">
                </el-table-column>
                <el-table-column prop="secondClassSeat" label="二等座" width="75">
                </el-table-column>
                <el-table-column prop="noSeat" label="无座" width="75">
                </el-table-column>
            </el-table>
        </div>
        <div class="times">
            查询总次数 {{ data.times }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { getTickets } from '@/apis/tickets';
import { getCityNameByCode } from '@/data/cityCode';

const data = reactive({
    ticketModel: {
        from: '阳新',
        to: '深圳北',
        date: '2021-09-01',
    },
    ticketInfos: [] as Array<{
        trainNo: string,
        fromStation: string,
        toStation: string,
        startTime: string,
        endTime: string,
        duration: string,
        businessSeat: string,
        firstClassSeat: string,
        secondClassSeat: string,
        advancedSoftSleeper: string,
        softSleeper: string,
        hardSleeper: string,
        softSeat: string,
        hardSeat: string,
        noSeat: string
    }>,
    times: 0 as number
})

const props = defineProps<{
    propMessage: { from: string, to: string, date: string, duringTime: number },
    id: number
}>()

onMounted(async () => {
    data.ticketModel.from = props.propMessage.from;
    data.ticketModel.to = props.propMessage.to;
    data.ticketModel.date = props.propMessage.date;
    setInterval(async () => {
        let message = await getTickets(data.ticketModel);
        console.log(message.data);
        data.ticketInfos = message.data.data;
        data.times++;
    }, 1000 * props.propMessage.duringTime);
})


</script>

<style scoped lang="sass">

</style>