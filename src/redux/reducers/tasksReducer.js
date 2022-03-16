import {ADD_TASK, 
    DELETE_TASK, CHANGE_TASK,
    TOGGLE_TASK_DONE, MARK_ALL_TASKS_UNDONE} from "../actions/types";

const taskData = {
    'alltasks': {
    1: {"taskTitle": "exampleTask 1, long, long, long, long", "taskDone": false},
    2: {"taskTitle": "exampleTask 2", "taskDone": false},
    3: {"taskTitle": "exampleTask 3", "taskDone": false},
},
    'today': '02/22/22' 
};

const tasksReducer = (state=taskData, action) => {
    switch (action.type) {
        case ADD_TASK:
            const possKeys = Object.keys(state.alltasks);
            const max = Math.max(...possKeys);
            state.alltasks[max+1] = {
                taskTitle: action.payload.taskDetails,
                taskDone: false};
            return state
        case TOGGLE_TASK_DONE:
            const taskid = action.payload.taskid;
            let newState = state;
            newState.alltasks[taskid] = action.payload.taskDetails;
            return  newState;
        case MARK_ALL_TASKS_UNDONE:
            let newState2 = state;
            for (const taskT of Object.keys(newState2.alltasks)){
                newState2.alltasks[taskT].taskDone = false;
            }
            newState2.today = action.payload.today;
            return newState2;
        case DELETE_TASK:
            delete state.alltasks[action.payload.taskId];
            return state;
        case CHANGE_TASK:
            state.alltasks[action.payload.taskId].taskTitle = action.payload.taskTitle;
            return state; 
        default:
            return state;
    }
}

export default tasksReducer;
