import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import {Text, View} from 'react-native';

import {
    StyledContainer,
    InnerContainer, 
    ErrorText,
    ErrorMessage,
} from '../../components/styles';
import { useDispatch, useSelector } from "react-redux";
import { initializeMenstruationAfterLogin } from "../../src/actions/menstruation/menstruation";

import DashBoardBottomMenu from "../../components/DashboardBottomMenu";
import CalenderInitial from "../Menstruation/CalendarInitial";
import Infonotice_Menstruation from "../Menstruation/Infonotice_Menstruation";
import CyclePeriod1 from "../Menstruation/CyclePeriod1";
import CyclePeriod2 from "../Menstruation/CyclePeriod2";
import MonthlyCalendar from '../Menstruation/MonthlyCalendar';
import YearlyCalendar from '../Menstruation/YearlyCalendar';


const Cycle = ({navigation}) => {
    const dispatch = useDispatch();
    const [openedPage, setOpenedPage] = useState(true); // so that it only checks once when you open the page
    const userData = useSelector(state => state.userName);
    const menstruationData = useSelector(state => state.menstruationInfo);
    const networkError = useSelector(state => state.networkAvailability); 
    if (!menstruationData.initialized && openedPage){
        console.log('initializing!')
        dispatch(initializeMenstruationAfterLogin(userData.userId));
        setOpenedPage(false);
    }
    
    //All states etc concerning the first time case!
    const [firstPage, setfirstPage] = useState(0);
    const [startDate, setStartDate] = useState(undefined);
    const [cycleLength, setCycleLength] = useState(undefined);
    const [periodLength, setPeriodLength] = useState(undefined);
    const mensFirstTimeData = {
        userId: userData.userId,
        lastPeriodStart: startDate,
        periodLength: periodLength,
        periodCycleLength: cycleLength,
        regular: 0 //int for the enum true for the backend
    };
    const FirstTime = [
        {
            page: 0,
            pageName: "Infonotice_Menstruation",
            nextPage: 1,
            answer: undefined,
            screen: <Infonotice_Menstruation firstPage={firstPage} setFirstPage={setfirstPage}/>
        },
        {
            page: 1,
            pageName: "CalenderInitial",
            nextPage: 2,
            answer: startDate,
            screen: <CalenderInitial firstPage={firstPage} setFirstPage={setfirstPage} selectedDate={startDate} setSelectedDate={setStartDate}/>
        },
        {
            page: 2,
            pageName: "CyclePeriod1",
            nextPage: 3,
            answer: cycleLength,
            screen: <CyclePeriod1 firstPage={firstPage} setFirstPage={setfirstPage} DaySelected={cycleLength} SetDaySelected={setCycleLength}/>
        },
        {
            page: 3,
            pageName: "CyclePeriod2",
            nextPage: undefined,
            answer: periodLength,
            screen: <CyclePeriod2   firstPage={firstPage} setFirstPage={setfirstPage} 
                                    DaySelected={periodLength} SetDaySelected={setPeriodLength}
                                    allMensData={mensFirstTimeData}
                                    />
        }
    ];


    //All pages concerning time != first time
    const [secondPage, setSecondPage] = useState(0);
    const pageNav = {
        MonthlyCalendar: 0,
        YearlyCalendar: 1,
        Mood: 2,
        Period: 3
    }
    const pages =[
        {
            page: 0,
            pageName: "MonthlyCalendar",
            screen: <MonthlyCalendar pageNav={pageNav} setPage={setSecondPage}/>
        },
        {
            page: 1,
            pageName: "YearlyCalendar",
            screen: <YearlyCalendar pageNav={pageNav} setPage={setSecondPage}/>
        },
        {
            page: 2,
            pageName: "Mood",
            screen: <Text>Mood screen needs to be implemented</Text>
        },
        {
            page: 3,
            pageName: "Period",
            screen: <Text>Period screen needs to be implemented</Text>
        }
    ]


    return(
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer style={{height: "60%",flex: 0}}>
                {networkError.error && 
                            <ErrorMessage>
                                <ErrorText>No network connection. Please try again later.</ErrorText>
                            </ErrorMessage>}
                {menstruationData.firstTime && (firstPage<4) &&
                    FirstTime[firstPage].screen
                    }
                {!menstruationData.firstTime &&
                pages[secondPage].screen}
            </InnerContainer>
            <DashBoardBottomMenu currentScreen={"Cycle"} navigation={navigation}/>
        </StyledContainer>
    )
};

export default Cycle;
