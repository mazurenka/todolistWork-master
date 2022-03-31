import {setTasksAC, tasksReducer, TasksStateType} from "./features/TodolistsList/tasks-reducer";
import {TaskPriorities, TaskStatuses} from "./api/todolists-api";
import {setTodolistsAC} from "./features/TodolistsList/todolists-reducer";

let startState: TasksStateType = {};
beforeEach(() => {
    startState = {
        "todolistId1": [
            {
                id: '1', title: "CSS", status: TaskStatuses.New, todoListId: "todo", addedDate: '',
                startDate: '', deadline: '', order: 0, priority: TaskPriorities.Hi, description: ''
            },
            {
                id: '2', title: "CSS", status: TaskStatuses.New, todoListId: "todo", addedDate: '',
                startDate: '', deadline: '', order: 0, priority: TaskPriorities.Hi, description: ''
            },
            {
                id: '3', title: "CSS", status: TaskStatuses.New, todoListId: "todo", addedDate: '',
                startDate: '', deadline: '', order: 0, priority: TaskPriorities.Hi, description: ''
            }
        ],
        "todolistId2": [
            {
                id: '1', title: "CSS", status: TaskStatuses.New, todoListId: "todo", addedDate: '',
                startDate: '', deadline: '', order: 0, priority: TaskPriorities.Hi, description: ''
            },
            {
                id: '2', title: "CSS", status: TaskStatuses.New, todoListId: "todo", addedDate: '',
                startDate: '', deadline: '', order: 0, priority: TaskPriorities.Hi, description: ''
            },
            {
                id: '3', title: "CSS", status: TaskStatuses.New, todoListId: "todo", addedDate: '',
                startDate: '', deadline: '', order: 0, priority: TaskPriorities.Hi, description: ''
            }
        ]
    }
})

test('empty array should be added when we set todolists', () => {
    const action = setTodolistsAC([
        {id: '1', title: 'title 1', order: 0, addedDate: ''},
        {id: '2', title: 'title 2', order: 0, addedDate: ''}
    ])

    const endState = tasksReducer({}, action)

    const keys = Object.keys(endState)

    expect(keys.length).toBe(2)
    expect(endState["1"]).toStrictEqual([])
    expect(endState["2"]).toStrictEqual([])
})

test('tasks should be added for todolist', () => {
    const action = setTasksAC(startState["todolistId1"], "todolistId1")

    const endState = tasksReducer({
        "todolistId2": [],
        "todolistId1": []
    }, action)

    expect(endState["todolistId1"].length).toBe(3)
    expect(endState["todolistId2"].length).toBe(0)
})
