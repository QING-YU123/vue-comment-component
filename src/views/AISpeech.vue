<template>
    <div>
        AI语音合成
        <el-input placeholder="请输入录音内容" v-model="data.VoiceText"></el-input>
        <el-input placeholder="请输入声音源" v-model="data.VoiceRole"></el-input>
        <el-input placeholder="请输入情感" v-model="data.VoiceEmotion"></el-input>
        <el-input placeholder="请输入文本提示" v-model="data.VoiceTextPrompt"></el-input>
        <el-button type="" @click="getAudio">获取音频</el-button>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import axios from 'axios';

const data = reactive({
    VoiceText: '',
    VoiceRecording: '',
    VoiceRole: '神里绫华_ZH',
    VoiceEmotion: 'Happy',
    VoiceTextPrompt: 'Text prompt'
})

async function getAudio() {
    let audioUrl = await getVoiceRecording(data.VoiceText, data.VoiceRole, data.VoiceEmotion, data.VoiceTextPrompt);
    let audioElement = document.createElement('audio');
    audioElement.src = audioUrl;
    document.body.appendChild(audioElement);
    audioElement.play();

    let downloadLink = document.createElement('a');
    downloadLink.href = audioUrl;
    downloadLink.download = data.VoiceRole + '-' + data.VoiceText + '.mp3';  // 设置下载的文件名
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);

    // 模拟点击这个标签，开始下载
    downloadLink.click();

    // 下载完成后，删除这个标签
    document.body.removeChild(downloadLink);
}

async function getVoiceRecording(voiceText: string, role: string = "神里绫华_ZH", emotion: string = "Happy", textPrompt: string = "Text prompt") {
    let radioUrl = await axios({
        method: 'post',
        url: 'https://v2.genshinvoice.top/run/predict',
        data: {
            "data": [
                voiceText,
                role,
                0.5,
                0.6,
                0.9,
                1.1,
                "ZH",
                null,
                emotion,
                textPrompt,
                "",
                0.7
            ],
            "event_data": null,
            "fn_index": 0,
            "session_hash": "sz3ghy4hdp8"
        }
    })
    let audioUrl = await getAudioFile(radioUrl.data.data[1].name);
    return audioUrl;
}

async function getAudioFile(radioUrl: string) {
    const response = await axios({
        method: 'get',
        url: 'https://v2.genshinvoice.top/file=' + radioUrl,
        responseType: 'blob'  // 告诉 axios 我们期望得到一个 Blob 对象
    });

    const audioBlob = response.data;
    console.log(audioBlob, "audioBlob");
    // 这是一个 Blob 对象，代表音频文件的内容// 创建一个 URL，可以用来在浏览器中播放这个音频文件

    let audioUrl = URL.createObjectURL(audioBlob);
    console.log(audioUrl, "audioUrl");

    return audioUrl;
    // 现在你可以使用 audioUrl，例如将它赋值给一个 <audio> 元素的 src 属性
}



</script>

<style scoped lang="sass">

</style>