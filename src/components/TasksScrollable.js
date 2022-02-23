import React from "react";
import { View, ScrollView, } from "react-native";
import {Colors} from "../css/general/style";
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { TOGGLE_TASK_DONE } from "../redux/actions/types";

import { BlackText, TaskView, TasksScrollableView } from "../css/components/TasksScrollable";
import {useDispatch } from "react-redux";

const TasksScrollable = ({tasksData, taskC, setTaskC}) => {
    let taskListUndone = [];
    let taskListDone = [];
    for (const taskT of Object.keys(tasksData.alltasks)) {
        if (tasksData.alltasks[taskT].taskDone){
            taskListDone.push(
                <Task 
                    key ={taskT}
                    taskDetail = {tasksData.alltasks[taskT].taskTitle}
                    taskId = {taskT}
                    taskDone = {tasksData.alltasks[taskT].taskDone}
                    taskC = {taskC}
                    setTaskC = {setTaskC}
                />
            )
        }
        else {
            taskListUndone.push(
                <Task 
                    key ={taskT}
                    taskDetail = {tasksData.alltasks[taskT].taskTitle}
                    taskId = {taskT}
                    taskDone = {tasksData.alltasks[taskT].taskDone}
                    taskC =  {taskC}
                    setTaskC = {setTaskC}
                />
            )}
    }
    const taskList = taskListUndone.concat(taskListDone);
    return (
        <TasksScrollableView>
            <ScrollView showsVerticalScrollIndicator={true}
                        overScrollMode={"never"}
                        style={{flex:1}}
                        contentContainerStyle={{justifyContent: "space-between", flexGrow: 1, 
                        padding: 0}}>
                {taskList}
            </ScrollView>
        </TasksScrollableView>
    )
}

const Task = ({taskDetail, taskId, taskDone, taskC, setTaskC}) => {
    const dispatch = useDispatch();
    return (
        <TaskView>
            <BlackText>
                {taskDetail}
            </BlackText>
            <BouncyCheckbox
                    style={{width: "15%",}}
                    size={18}
                    fillColor={Colors.black}
                    iconStyle={{borderColor: Colors.black, borderRadius: 0}}
                    isChecked={taskDone}
                    onPress={(isChecked) => {
                        setTaskC(!taskC);
                        dispatch({type: TOGGLE_TASK_DONE, 
                        payload: {  taskid: taskId, 
                                    taskDetails: {"taskTitle": taskDetail,
                                                    "taskDone": isChecked}}})
                    }}
                />
        </TaskView>
    );
}

export default TasksScrollable;