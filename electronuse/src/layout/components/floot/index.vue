<script setup>
import {computed} from "vue";
import {Menu, AddCircleOutline, DownloadOutline} from '@vicons/ionicons5'
import {getStoreMusicList} from "@/stores/musicList.js";

defineOptions({
  name: "musicBottom"
});

const store = getStoreMusicList()
const selectedSong = computed(() => store.selectedSong);
console.log(selectedSong)
</script>

<template>
  <div class="bottom">
    <div class="music_info_action">
      <div class="music_img">

      </div>
      <div class="music_info">
        <div class="music_title">
          {{ selectedSong.song_name}}
        </div>
       <div class="music_artist">
         {{ selectedSong.artist_name }}
       </div>
      </div>
      <div class="music_action">
        <n-button quaternary circle>
          <template #icon>
            <n-icon size="25">
              <AddCircleOutline></AddCircleOutline>
<!--              <DownloadOutline></DownloadOutline>-->
            </n-icon>
          </template>
        </n-button>
        <n-button quaternary circle>
          <template #icon>
            <n-icon size="25">
<!--              <AddCircleOutline></AddCircleOutline>-->
              <DownloadOutline></DownloadOutline>
            </n-icon>
          </template>
        </n-button>

      </div>
    </div>
    <div class="play">
      <audio controls>
        <source :src="selectedSong.songurl">
      </audio>
    </div>
    <div class="music_play_list">
      <n-icon size="30">
        <Menu></Menu>
      </n-icon>
    </div>
  </div>
</template>

<style scoped>
.bottom {
  height: 48px;
  display: flex;
  justify-content: space-between;
}
.play {
  width: 300px;
  audio {

  }
  .play_action {

  }
  .progress {}
}
.music_play_list {
}
.music_info_action {
  width: 400px;
  display: flex;
  justify-content: flex-start;
  .music_img {
    width: 48px;
    height: 100%;

  }
  .music_info {
    width: 200px;
  }
}

</style>
