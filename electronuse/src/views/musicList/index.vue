<script setup>
import {ref, onMounted} from 'vue'
import {getStoreMusicList} from '@/stores/musicList.js'
import {getMusicListGedan} from "@/api/musiclist.js";
import router from "@/router/index.js";

const goToRankOne = () => {
  router.push("/rankOne")
}
const goToRankTwo = () => {
  router.push("/rankTwo")
}

const musicListNmae =ref([])
const getList = getStoreMusicList()
const loadList = async () => {
  await getList.getMusicList()
  musicListNmae.value = getList.musicList.data.result
  console.log(musicListNmae.value)
}
// 查看具体歌单
const menuData = ref({})
const DataStore = getStoreMusicList()
const getListuse = async (list) => {
  const listname = ref(list.listname)
  try {
    const result = await getMusicListGedan(listname.value)
    if (result && result.status === 200) {
      // 增加成功的逻辑
      await router.push({ name: 'contentlist', query: {listname: list.list_usename}});
      menuData.value = result.data; // 更新响应式引用
      DataStore.setMenuData(result.data); // 更新 Pinia store
    } else {
      // 处理非200状态码的情况
      alert('没有这个歌单')
    }
  } catch (error) {
    // 捕获并处理错误
    console.error("Error during add", error);
  }
}
onMounted(async () => {
  await loadList()
})
</script>

<template>
  <div class="home">
    <div class="music_banner">
      <n-carousel show-arrow>
        <img
            class="carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
        >
        <img
            class="carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
        >
        <img
            class="carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
        >
        <img
            class="carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
        >
      </n-carousel>
    </div>
    <div class="card_recommend">
      <div class="title_recommend">
        <h2>推荐歌单</h2>
      </div>
      <div class="card_show">
        <div class="card_1" @click="goToRankOne">
          <n-card>
            <template #cover>
              <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
            </template>
            <span>每日推荐 {{ "歌曲" }}</span>
          </n-card>
        </div>
        <div class="card_1" @click="goToRankTwo">
          <n-card>
            <template #cover>
              <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
            </template>
            <span>每日推荐 {{ "歌曲" }}</span>
          </n-card>
        </div>
        <div class="card_1">
          <n-card>
            <template #cover>
              <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
            </template>
            <span>每日推荐 {{ "歌曲" }}</span>
          </n-card>
        </div>
        <div class="card_1">
          <n-card>
            <template #cover>
              <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
            </template>
            <span>每日推荐 {{ "歌曲" }}</span>
          </n-card>
        </div>
      </div>
    </div>
    <div class="music_list">
      <div class="title_my">
        <h2>我的歌单</h2>
      </div>
      <div class="music_my" v-for="(list,index) in  musicListNmae" :key="index">
        <div class="card_2" @click="getListuse(list)">
          <n-card>
            <template #cover>
              <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
            </template>
            <span>每日推荐 {{ list.list_usename }}</span>
          </n-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.music_banner {
  .carousel-img {
    width: 100%;
    height: 240px;
    object-fit: cover;
  }
}
.card_recommend {
  height: 300px;
  width: 100%;
  background-color: #00aaee;
  display: flex;
  justify-content: space-between;
  .title_recommend {
    padding-left: 20px;
    width: 20px;
  }
  .card_show {
    width: 100%;
    height: 200px;
    padding-left: 30px;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
    .card_1 {
      width: 200px;
    }
  }

}
.music_list {
  width: 100%;
  background-color: #b3d4fc;
  height: 300px;
  display: flex;
  justify-content: space-between;
  .title_my {
    width: 20px;
    padding-left: 20px;
  }
  .music_my {
    width: 100%;
    height: 200px;
    padding-left: 30px;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
    .card_2 {
      width: 200px;
    }
  }
}
</style>
