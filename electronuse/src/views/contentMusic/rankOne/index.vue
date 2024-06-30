<script setup>
import {ref, onMounted} from "vue";
import {getStoreMusicList} from "@/stores/musicList.js";
import { Add } from '@vicons/ionicons5'
import {addMusicList} from "@/api/musiclist.js";

defineOptions({
  name: "rankOne"
})
//模态框控制
const createListModalVisible = ref(false);
const musicInfoList = ref([])
// const menuNmae = ref()
const selectMenu = ref({})
const addRow = (musicInfo) => {
  createListModalVisible.value = true;
  musicInfoList.value = [{
    song_name: musicInfo.songname,
    artist_name: musicInfo.h5_author_name,
    duration: formatDuration(musicInfo.duration),
    songurl: 'https://webfs.hw.kugou.com/202406140915/13eb88b355127a808f7c0f404978654e/KGTX/CLTX001/358b3493217a941fd68de019aca0e82a.mp3',
  }]
  console.log(musicInfoList.value)
}

const submitCallback  = async () => {
  const selectedListName = selectMenu.value
  try {
    const result = await addMusicList(selectedListName, musicInfoList.value)
    if (result && result.status === 200) {
      alert('上传成功')
      createListModalVisible.value = false
    }
  }catch (error) {
    console.log(error)
    alert("上传失败")
  }
}
const onNegativeClick = async () => {
  createListModalVisible.value = false
}
// 将秒转换为分钟:秒的格式
const formatDuration = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};
//选择框
const musicContent = ref({})
  const store = getStoreMusicList()
  onMounted(async () => {
    await store.getMusicContentList()
    musicContent.value = store.MusicContentList.data
    await store.getMusicList()
    selectMenu.value = store.musicList.data.result.map(item => ({
      label: item.list_usename,
      value: item.listname,
    }));
  })



</script>

<template>
  <div class="rank_BillBoard">
    <div class="title">
      <span>{{ "BillBoard排行榜" }}</span>
    </div>
    <div class="list_action">

    </div>
    <div class="list_content">
      <n-table>
        <thead>
        <tr>
          <th>#</th>
          <th>歌曲名</th>
          <th>作者</th>
          <th>时长</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(list, index) in musicContent.data" :key="index" >
          <td>{{ index + 1 }}</td>
          <td>{{ list.songname }}</td>
          <td>{{ list.h5_author_name }}</td>
          <td>{{ formatDuration(list.duration) }}</td>
          <td>
            <n-button tertiary circle @click="addRow(list)">
              <template #icon>
                <n-icon><Add></Add></n-icon>
              </template>
            </n-button>
          </td>
        </tr>
        </tbody>
      </n-table>
      <n-modal
          :show="createListModalVisible"
          preset="dialog"
          title="选择歌单"
          positive-text="添加"
          negative-text="取消"
          @positive-click="submitCallback"
          @negative-click="onNegativeClick"
      >
        <n-select v-model:value="selectMenu" :options="selectMenu"  />
      </n-modal>
    </div>
  </div>
</template>

<style scoped>
.title {
  background-color: #00aaee;
  height: 150px;
  width: 100%;
}
.list_action{
  width: 100%;
  height: 50px;
  background-color: #b3d4fc;
}
.list_content {
  width: 100%;
  background-color: #987cb9;
}
</style>
