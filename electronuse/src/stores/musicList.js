import {defineStore} from "pinia";
import {getMusicList,getMusicContent} from "@/api/musiclist.js";

export const getStoreMusicList = defineStore("musicList", {
    state: () => ({
        musicList: {},
        MusicMenuData: {},
        MusicContentList: {},
        selectedSong: {}
    }),
    getters: {},
    actions: {
        async getMusicList() {
            this.musicList = await getMusicList()
        },
        setMenuData(data) {
            this.MusicMenuData = data.data
        },
        async getMusicContentList() {
            this.MusicContentList = await getMusicContent()
        }
    }
})



