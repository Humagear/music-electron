import result from "@/utils/request.js"

export const setMusicList = (list_usename) => {
    return result({
        method: 'POST',
        url: '/createList',
        data: {list_usename}
    })
}

export const getMusicList = () => {
    return result({
        method: 'GET',
        url: '/getAllMusicLists'
    })
}

export const getMusicListGedan = (listname) => {
    return result({
        method: 'GET',
        url: `/getMusicList?listname=${listname}`
    })
}
//api获取歌曲
export const getMusicContent = () => {
    return result({
        method: 'GET',
        url: '/list'
    })
}
export const addMusicList = (listname, songs) => {
    const requestData = {
        listname,
        songs
    };
    return result({
        method: 'POST',
        url: '/addMusic',
        data: requestData
    })
};

//删除
export const deleteMusicList = (listname) => {
    return result({
        method: 'DELETE',
        url: `deleteMusicList?listname=${listname}`
    })
}
