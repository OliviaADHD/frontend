import React, {useState, useEffect} from "react";
import {StatusBar} from "expo-status-bar";
import {Dimensions, ActivityIndicator} from 'react-native';

import {Colors, StyledContainer} from "../../../css/general/style";
import { Icon } from 'react-native-elements';
import { ContentView, InnerContainerRemake, TaskView, CloseView, StyledIcon, InputView, ErrorInputView} from "../../../css/Dashboard/New/createTask";
import { Loading } from '../../../css/general/style';
import  HeaderBar  from "../../../components/HeaderBar";
import { useDispatch, useSelector } from "react-redux";
import FlashMessage, {  showMessage } from "react-native-flash-message";
import {addTask} from '../../../redux/actions/task/task';


const windowWidth = Dimensions.get('window').width;

const Task = ({navigation}) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [task, setTask] = useState("");
    const [entrance, setEntrance] = useState("Create a small task");
    const [errorVal, setErrorVal] = useState(false);
    const userData = useSelector(state => state.userName);
    const newTask =()=>{
        setLoading(true);
        console.log(task)
        if(task==""){
            setEntrance("Provide new task")
            setErrorVal(true);
            const message = {
                message: "Error",
                description: "Add new task",
                icon: { icon: "danger", position: "left" },
                type:"success",
                backgroundColor:Colors.red, // background color
                color: Colors.white,
              }
            setLoading(false);
            showMessage(message);
        }else{
            const todo = {
                todo:task,
                userId: 1
            }
            dispatch(addTask(todo)).then((resp) => {
                const message = {
                    message: "Updated",
                    description: "New task has been added",
                    icon: { icon: "auto", position: "left" },
                    type:"success",
                    backgroundColor:Colors.purple, // background color
                    color: Colors.white,
                  }
                  setLoading(false);
                  showMessage(message);
                  setErrorVal(false);
                  setEntrance("Create a small task");
                  setTask("");       
            });

        }
    };

    const closeTask = () => {
        navigation.navigate("ToDoList");
    };

    return (
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainerRemake style={{backgroundColor: Colors.gray}}>
                <HeaderBar/>
                <ContentView>
                    <CloseView>
                        <StyledIcon
                        name='close-outline'
                        type='ionicon'
                        size={35}
                        onPress={() => closeTask()}
                        />
                    </CloseView>
                    <TaskView>
                        <Icon
                        name='checkmark-outline'
                        type='ionicon'
                        size={35}
                        style={{
                            marginLeft:"10%"
                        }}
                        />
                        {!errorVal &&                        
                        
                            <InputView
                            placeholder={entrance}
                            underlineColorAndroid='transparent'
                            onChangeText={(task) => setTask(task)}/>
                        }

                        {errorVal &&                         
                                <ErrorInputView
                                placeholder={entrance}
                                underlineColorAndroid='transparent'
                                onChangeText={(task) => setTask(task)}/>
                        }

                        <Icon
                            name='chevron-forward-circle-outline'
                            type='ionicon'
                            size={35}
                            onPress={() => newTask()}
                            style={{
                                marginRight:"15%"
                            }}
                        />
                    </TaskView>
                    {loading &&
                        <Loading>
                            <ActivityIndicator size="large" color="#694398"/>
                        </Loading>
                      }
                </ContentView>
                <FlashMessage position="bottom" />
            </InnerContainerRemake>
        </StyledContainer>
    )
}

export default Task;