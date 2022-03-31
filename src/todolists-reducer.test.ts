import {setTodolistsAC, TodolistDomainType, todolistsReducer} from "./features/TodolistsList/todolists-reducer";

let todolistId1: string
let todolistId2: string
let startState: Array<TodolistDomainType> = []

beforeEach(() => {
    todolistId1 = v1()
    todolistId2 = v1()
    startState = [
        {id: todolistId1, title: "What", filter: "all", addedDate: '', order: 0},
        {id: todolistId2, title: "Want", filter: "all", addedDate: '', order: 0}
    ]
})

test("todolists should be set to state", () => {
    const action = setTodolistsAC(startState)
    const endState = todolistsReducer([], action)

    expect(endState.length).toBe(2)
})