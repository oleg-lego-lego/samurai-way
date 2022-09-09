import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": 'c87c7dc1-887f-4f95-ba2a-89ed1b83f551'
    }
})

export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0//follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0//follow/${userId}`)
    },
    getProfile(userId: number) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
    }
}

export const AuthAPI = {
    me() {
       return  instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
    }
}

// export const getUsers2 = (currentPage = 1, pageSize = 10) => {
//     return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
//         .then(response => response.data)
// }

