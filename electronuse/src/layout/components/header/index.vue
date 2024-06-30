<script setup>
import {Search, Close, Expand, ReloadCircleOutline} from '@vicons/ionicons5'
// import { ipcRenderer } from 'electron/renderer'
defineOptions({
  name: "musicHeader"
});
// const reload =() => {
//   ipcRenderer.send('refresh-page');
// }

</script>

<template>
  <div class="header">
    <div class="logo">

    </div>
    <div class="search">
      <n-input class="search_input" type="text" placeholder="搜索" round clearable  />
      <n-button class="search_btn" tertiary circle>
        <template #icon>
          <n-icon><Search></Search></n-icon>
        </template>
      </n-button>
    </div>
    <div class="app_action">
      <n-icon class="close_btn" size="25" depth="3">
        <Close></Close>
      </n-icon>
      <n-icon class="full_btn" size="23" depth="3">
        <Expand></Expand>
      </n-icon>
      <n-icon class="reload_btn" size="23" depth="3" @click="reload">
        <ReloadCircleOutline></ReloadCircleOutline>
      </n-icon>
    </div>
  </div>
</template>

<style scoped>
.header {
  height: 50px;
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
}
.logo {
  width: 150px;
}
.search {
  width: 350px;

  display: flex;
  justify-content: space-around;
  position: relative;
  padding-left: 30px;
  .search_input {
    width: 280px;
    height: 30px;
    position: absolute;
    top: 15%;
    left: 10px;
  }
  .search_btn {
    height: 30px;
    position: absolute;
    top: 15%;
    right: 7%;
  }
}
.app_action {
  width: 200px;
  position: relative;
  .close_btn {
    position: absolute;
    right: 10%;
    top: 25%;
  }
  .full_btn {
    position: absolute;
    top: 25%;
    right: 25%;
  }
  .reload_btn {
    position: absolute;
    top: 25%;
    right: 40%;
  }
}
</style>
