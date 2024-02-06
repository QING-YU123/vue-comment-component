export const menuData = [
    {
        name: "AI对话聊天",
        router: "AITalk",
        component: () => import("@/views/AITalk.vue"),
    },
    {
        name: "AI语音合成",
        router: "AISpeech",
        component: () => import("@/views/AISpeech.vue"),
    },
    {
        name: "注册",
        router: "Register",
        component: () => import("@/views/User/Register.vue"),
    },
    {
        name: "登录",
        router: "Login",
        component: () => import("@/views/User/Login.vue"),
    },
    {
        name: "查询火车票",
        router: "QueryTickets",
        component: () => import("@/views/Ticket/QueryTickets.vue"),
    }
]