import { request } from "@/utils/request";

export const register = async (data: any) => {
    return request({
        url: '/users/register',
        method: 'post',
        data,
    });
}

export const login = async (data: any) => {
    return request({
        url: '/users/login',
        method: 'post',
        data,
    });
}