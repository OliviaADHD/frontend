import {ADD_TASK, 
    DELETE_TASK, 
    MARK_TASK_DONE, MARK_TASK_UNDONE} from "../actions/types";

const taskData = {
    1: {"taskTitle": "exampleTask", "taskDone": false}
};

const tasksReducer = (state=taskData, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default tasksReducer;
