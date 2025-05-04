import {instance} from "@/common/instance/instance.ts";
import {TodolistResponseType} from "@/features/todolists/api/todolistsApi.types.ts";
import {BaseResponse} from "@/common/types/index.ts";

export const todolistsApi = {
    getTodolists() {
        return instance.get<TodolistResponseType[]>('todo-lists')
    },
    createTodolist(payload: { title: string }) {
        return instance.post<BaseResponse<{ item: TodolistResponseType }>>('/todo-lists', payload.title)
    },
    deleteTodolist(payload: { id: string }) {
        return instance.delete<BaseResponse>(`/todo-lists/${payload.id}`)
    },
    changeTodolistTitle(payload: { id: string, title: string }) {
        return instance.put<BaseResponse>(`/todo-lists/${payload.id}`, payload.title)
    }
}