import React from "react";
import { View, ScrollView, TouchableOpacity} from "react-native";
import {Colors} from "../css/general/style";
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { TOGGLE_TASK_DONE } from "../redux/actions/types";

import { BlackText, TaskView, TasksScrollableView } from "../css/components/TasksScrollable";
import {useDispatch } from "react-redux";

const TasksScrollable = ({tasksData, taskC, setTaskC, isTaskSelected, setSelectedTaskId,
                         setMenuPosition, windowHeight}) => {
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
                    isTaskSelected={isTaskSelected}
                    setSelectedTaskId={setSelectedTaskId}
                    setMenuPosition={setMenuPosition}
                    windowHeight={windowHeight}
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
                    isTaskSelected={isTaskSelected}
                    setSelectedTaskId={setSelectedTaskId}
                    setMenuPosition={setMenuPosition}
                    windowHeight={windowHeight}
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

const Task = ({taskDetail, taskId, taskDone, taskC, setTaskC, isTaskSelected, 
        setSelectedTaskId, setMenuPosition, windowHeight}) => {
    const dispatch = useDispatch();
    return (
        <TaskView>
            <TouchableOpacity 
            style={{flexDirection: "row", width: "95%", justifyContent: "space-between"}}
            onPress={(event)=>{
                setSelectedTaskId(taskId);
                isTaskSelected(true);
                setMenuPosition(Math.floor(100*event.nativeEvent.pageY/windowHeight));
            }}>
            <BlackText>
                {taskDetail}
            </BlackText>
            <BouncyCheckbox
                    style={{width: "5%"}}
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
            </TouchableOpacity>
        </TaskView>
    );
}

export default TasksScrollable;