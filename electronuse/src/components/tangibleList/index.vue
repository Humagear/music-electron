<script setup>
import {ref} from "vue";

const props = defineProps({
  menuData: Array
})
// 初始化一个响应式引用来存储传递的 props
const localMenuData = ref(props.menuData);
defineOptions({
  name: "tangibleList"
})

// onMounted(() => {
//   // 组件挂载后，确保数据已经传递
//   console.log(localMenuData.value);
// });
</script>

<template>
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
    <tr v-for="(item,index) in localMenuData" :key="index">
      <td>{{ index + 1 }}</td>
      <td>{{ item.song_name }}</td>
      <td>{{ item.artist_name }}</td>
      <td>{{item.duration}}</td>
      <td>干！我刚才背的是啥</td>
    </tr>
    </tbody>
  </n-table>
</template>

<style scoped>

</style>
