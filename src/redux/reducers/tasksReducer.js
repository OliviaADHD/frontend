import {ADD_TASK, 
    DELETE_TASK, 
    TOGGLE_TASK_DONE, MARK_ALL_TASKS_UNDONE} from "../actions/types";

const taskData = {
    'alltasks': {
    1: {"taskTitle": "exampleTask 1, long, long, long, long", "taskDone": false},
    2: {"taskTitle": "exampleTask 2", "taskDone": false},
    3: {"taskTitle": "exampleTask 3", "taskDone": false},
    4: {"taskTitle": "exampleTask 4", "taskDone": false},
    5: {"taskTitle": "exampleTask 5", "taskDone": false},
    6: {"taskTitle": "exampleTask 6", "taskDone": false},
    7: {"taskTitle": "exampleTask 7", "taskDone": false},
    8: {"taskTitle": "exampleTask 8", "taskDone": false},
    9: {"taskTitle": "exampleTask 9", "taskDone": false},
    10: {"taskTitle": "exampleTask 9", "taskDone": false},
    11: {"taskTitle": "exampleTask 9", "taskDone": false},
    12: {"taskTitle": "exampleTask 9 final", "taskDone": false}},
    'today': '02/22/22' 
};

const tasksReducer = (state=taskData, action) => {
    switch (action.type) {
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
        default:
            return state;
    }
}

export default tasksReducer;
