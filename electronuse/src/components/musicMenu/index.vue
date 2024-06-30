<script setup>
import { ref, onMounted } from 'vue';
import {NIcon} from "naive-ui";
import {AddCircleOutline,TrashBinSharp} from "@vicons/ionicons5";
import {deleteMusicList, getMusicListGedan, setMusicList} from "@/api/musiclist.js";
import {getStoreMusicList} from "@/stores/musicList.js";
import router from "@/router/index.js";


// 定义一个响应式数组来存储行数据
const musicList = ref([]);

// 定义模态框状态和输入值
const createListModalVisible = ref(false);
const listNameInput = ref('');

// 定义一个方法来添加新行
function addRow() {
  // 显示模态框
  createListModalVisible.value = true;
}
const onNegativeClick = () => {
  createListModalVisible.value = false
}
// 定义一个方法来处理歌单创建
const addMusicList = async () => {
  try {
    const result = await setMusicList(listNameInput.value)
    if (result && result.status === 201){
      createListModalVisible.value = false;
      listNameInput.value = null
      await loadList()
    }
  }catch(error) {
    alert("发生错误")
  }
}
const getList = getStoreMusicList()
const loadList = async () => {
  await getList.getMusicList()
  musicList.value = getList.musicList.data.result
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
//删除歌单
const deleteModalVisible = ref(false)
const deleteGedan = () => {
  deleteModalVisible.value = true;
}
const DeletesubmitCallback = async (list) => {
  try {
    const result = await deleteMusicList(list.listname)
    if (result && result.status === 200) {
      deleteModalVisible.value = false;
      await loadList()
    } else {
      // 处理非200状态码的情况
      alert('没有这个歌单')
    }
  }catch (error) {
    // 捕获并处理错误
    console.error("Error during add", error);
  }
}


const DeleteNegativeClick = () => {
  deleteModalVisible.value = false;
}
onMounted(async () => {
  await loadList()
})

</script>

<template>
  <div class="music_list_add">
    <!-- 创建歌单按钮 -->
    <n-button tertiary type="primary" style="width: 200px; position: relative; left: 13%;" @click="addRow">
      <template #icon>
        <n-icon>
          <AddCircleOutline />
        </n-icon>
      </template>
      创建歌单
    </n-button>

    <!-- 模态框 -->
    <n-modal
        :show="createListModalVisible"
        title="创建歌单"
        preset="dialog"
        @positive-click="addMusicList"
        @negative-click="onNegativeClick"
        positiveText="创建"
        negative-text="取消"
    >
      <n-input
          v-model:value="listNameInput"
          placeholder="输入歌单名称"
          clearable
      />
    </n-modal>

    <n-table>
      <tbody>
      <!-- 使用 v-for 遍历 rows 数组来渲染每一行 -->
      <tr v-for="(list, index) in musicList" :key="index">
        <td @click="getListuse(list)">{{ list.list_usename }}&nbsp;的歌单</td>
        <td>
          <n-button tertiary circle @click="deleteGedan(list)">
            <template #icon>
              <n-icon>
                <TrashBinSharp></TrashBinSharp>
              </n-icon>
            </template>
          </n-button>
          <n-modal
              :show="deleteModalVisible"
              preset="dialog"
              title="确认"
              content="确认删除?"
              positive-text="确认"
              negative-text="取消"
              @positive-click="DeletesubmitCallback(list)"
              @negative-click="DeleteNegativeClick"
          />
        </td>
      </tr>
      </tbody>
    </n-table>

  </div>
</template>

<style scoped>

</style>
