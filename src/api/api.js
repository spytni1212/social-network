import * as axios from 'axios'

const instance = axios.create({
    withCredential: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '5a81a0b6-5658-42f8-846c-b2bf4f89ed7f'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                   return response.data;
                })
    
    },
    getUnfollow(userId) {
        return instance.delete(`follow/${userId}`)
        .then(response => {
            return response.data
        })
    },
    getFollow(userId) {
        return instance.post(`follow/${userId}`)
        .then(response => {
            return response.data
        })
    }
}



