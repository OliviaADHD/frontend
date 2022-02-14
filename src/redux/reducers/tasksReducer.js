import {ADD_TASK, 
    DELETE_TASK, 
    MARK_TASK_DONE, MARK_TASK_UNDONE} from "../actions/types";

const taskData = {
    1: {"taskTitle": "exampleTask 1, long, long, long, long", "taskDone": false},
    2: {"taskTitle": "exampleTask 2", "taskDone": false},
    3: {"taskTitle": "exampleTask 3", "taskDone": false},
    4: {"taskTitle": "exampleTask 4", "taskDone": false},
    5: {"taskTitle": "exampleTask 5", "taskDone": false},
    6: {"taskTitle": "exampleTask 6", "taskDone": false},
    7: {"taskTitle": "exampleTask 7", "taskDone": false},
};

const tasksReducer = (state=taskData, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default tasksReducer;
