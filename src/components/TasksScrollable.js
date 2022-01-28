import React from "react";
import { View, ScrollView, } from "react-native";
import {Colors} from "../css/general/style";
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import { BlackText } from "../css/Dashboard/home";


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
        <View
        style={{height: "100%",
                flex: 1,
                width: "95%",
                alignItems: 'center',
                paddingBottom: "0%",
                paddingTop: "0%"}}>
            <ScrollView showsVerticalScrollIndicator={false}
                        overScrollMode={"never"}
                        contentContainerStyle={{
                            flexGrow: 1}}>
                {taskList}
            </ScrollView>
        </View>
    )
}

const Task = ({taskDetail, taskId}) => {
    return (
        <View style={{width: "100%", height: "15%", backgroundColor: Colors.gray,
            flexDirection: "row", borderRadius: 5, flex: 1,
            marginLeft: "4%", marginBottom: "2%",
            alignItems: "center", justifyContent: "space-between"}}>
            <BlackText style={{marginLeft: "2%",  width: "80%"}}>
                {taskDetail}
            </BlackText>
            <BouncyCheckbox
                    style={{width: "15%",}}
                    size={18}
                    fillColor={Colors.black}
                    iconStyle={{borderColor: Colors.black, borderRadius: 0}}
                    onPress={() => {console.log('set task to done? TBD')}}
                />
        </View>
    );
}

export default TasksScrollable;