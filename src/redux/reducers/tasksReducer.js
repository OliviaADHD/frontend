import {
    ALL_TASKS,
    ADD_TASK,
    UPDATE_TASK,
    GET_TASK,
    DELETE_TASK,
    MARK_TASK_DONE, 
    TOGGLE_TASK_DONE, 
    MARK_ALL_TASKS_UNDONE
} from "../actions/types";

const taskData = {
    tasks:[],
    addTask: null,
    updateTask:null,
    getTask:null,
    deleteTask:null
};

const tasksReducer = (state=taskData, action) => {
    switch (action.type) {
        case ALL_TASKS:
            return {
                ...state,
                tasks: action.payload
            }
        case ADD_TASK:
            return {
                ...state,
                addTask: action.payload
            }
        case UPDATE_TASK:
            return {
                ...state,
                updateTask: action.payload
            }
        case GET_TASK:
            return {
                ...state,
                getTask: action.payload
            }
        case DELETE_TASK:
            return {
                ...state,
                deleteTask: action.payload
            }
        default:
            return state;
    }
}

export default tasksReducer;
