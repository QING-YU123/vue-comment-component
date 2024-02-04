import { databaseApi } from '@/configs/database';
import axios from 'axios';

export const request = axios.create({
    baseURL: `${databaseApi.host}:${databaseApi.port}`,
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json',
    },
});