import * as axios from 'axios'

const instance = axios.create({
    withCredential: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '0cba017c-efdb-4b94-ae7f-1f72337c1a3d'
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



