import {tasksReducer, TasksStateType} from "./features/TodolistsList/tasks-reducer";
import {TodolistType} from "./api/todolists-api";
import {addTodolistAC, todolistsReducer} from "./features/TodolistsList/todolists-reducer";

test("id's should be equals", () => {
    const startTasksState: TasksStateType = {}
    const startTodolistsState: Array<TodolistType> = []

    let todolist: TodolistType = {
        title: "new todolist",
        id: "any id",
        addedDate: "",
        order: 0
    }

    const action = addTodolistAC(todolist);

    const endTaskState = tasksReducer(startTasksState, action)
    const endTodolistsState = todolistsReducer(startTodolistsState, action)

    const keys = Object.keys(endTaskState)
    const idFormTasks = keys[0]
    const idFormTodolists = endTodolistsState[0].id

    expect(idFormTasks).toBe(action.todolist.id)
    expect(idFormTodolists).toBe(action.todolist.id)
})