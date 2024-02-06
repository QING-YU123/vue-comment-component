import { request } from "@/utils/request";

export const getTickets = async (data: {date:string,from:string,to:string }) => {
    return request({
        url: '/tickets/getTickets',
        method: 'post',
        data,
    });
}