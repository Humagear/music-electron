<script setup>
import {computed} from 'vue'
import {getStoreMusicList} from "@/stores/musicList.js";
import { useRoute } from 'vue-router';
defineOptions({
  name: "gedanList"
})
const route = useRoute();
const listName = computed(() => route.query.listname)
console.log(listName.value)
const store = getStoreMusicList()
// 直接使用 computed 属性，而不是将其包装在 ref 中
const menuData = computed(() => store.MusicMenuData);
const doubleClickHandler = (song) => {
  store.selectedSong = song; // 更新store中的选中歌曲
  console.log(store.selectedSong)
};
</script>

<template>
  <div class="main">
    <div class="title">
      <span>{{ listName }}</span>
    </div>
    <div class="list_action">

    </div>
    <div class="list_content">
      <n-table>
        <thead>
        <tr>
          <th>#</th>
          <th>歌曲名称</th>
          <th>歌手</th>
          <th>时长</th>
          <th>待定</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in menuData" :key="index" @dblclick="doubleClickHandler(item)">
          <td>{{ index + 1 }}</td>
          <td>{{ item.song_name }}</td>
          <td>{{ item.artist_name }}</td>
          <td>{{ item.duration }}</td>
          <td>干！我刚才背的是啥</td>
        </tr>
        </tbody>
      </n-table>
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
