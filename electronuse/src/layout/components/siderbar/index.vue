<script setup>
import { NIcon, useMessage } from "naive-ui";
import { RouterLink } from "vue-router";
import MusicMenu from "@/components/musicMenu/index.vue"
import {
  BookOutline as BookIcon,
  HomeOutline as HomeIcon
} from "@vicons/ionicons5";
import {AddCircleOutline} from '@vicons/ionicons5'

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  {
    label: () => h(
        RouterLink,
        {
          to: {
            name: "home",
            params: {
              lang: "zh-CN"
            }
          }
        },
        { default: () => "为我推荐" }
    ),
    key: "go-back-home",
    icon: renderIcon(HomeIcon)
  },
  {
    label: () => h(
        RouterLink,
        {
          to: {
            name: 'music'
          }
        },
        "我的"
    ),
    key: "hear-the-wind-sing",
    icon: renderIcon(BookIcon)
  },
];

</script>

<template>
  <div class="siderbar">
    <div class="logo"></div>
    <div class="menu" >
      <n-menu :options="menuOptions" @update:value="handleUpdateValue" />
      <hr style="width: 80%; color: #987cb9; "/>
    </div>
    <div class="addMenu">
      <div class="musicMenu">
        <h2 style="padding-left:30px; margin: 0">歌单</h2>
      </div>
      <div class="musicMenu">
        <MusicMenu></MusicMenu>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  padding: 0;
}
.siderbar {
  background-color: #f0f3f6;
  height: 100vh;
}
</style>
