import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '96162139-0373-4706-80c2-c9637e9cc9cb'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                   return response.data;
                })
    
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
        .then(response => {
            return response.data
        })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
        .then(response => {
            return response.data
        })
    },
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
        .then(response => {
            return response.data
        })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
        .then(response=> {
            return response.data
        })
    }
}






