import React from "react";
import { View, ScrollView, } from "react-native";
import {Colors} from "../css/general/style";
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import { BlackText, TaskView, TasksScrollableView } from "../css/components/TasksScrollable";


const TasksScrollable = ({tasksData}) => {
    let taskList = [];
    for (const taskT of Object.keys(tasksData)) {
        taskList.push(
            <Task 
                key ={taskT}
                taskDetail = {tasksData[taskT].taskTitle}
                taskId = {taskT}
            />
        )
    }
    return (
        <TasksScrollableView>
            <ScrollView showsVerticalScrollIndicator={false}
                        overScrollMode={"never"}
                        contentContainerStyle={{
                            flexGrow: 1}}>
                {taskList}
            </ScrollView>
        </TasksScrollableView>
    )
}

const Task = ({taskDetail, taskId}) => {
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
                    onPress={() => {console.log('TBD functionality when task done')}}
                />
        </TaskView>
    );
}

export default TasksScrollable;