import { DASHBOARD_TUT,
        DASHBOARD_TUT_FAILED,
        DASHBOARD_TUT_SUCCESS } from "../actions/types"; 

const dashboardTutorialData = {
    tutorialDone: false
}

const dashboardTutorialReducer = (state = dashboardTutorialData, action) => {
    switch (action.type){
        case DASHBOARD_TUT:
            return{
                ...state,
                tutorialDone: action.payload
            };
        case DASHBOARD_TUT_FAILED:
            return{
                ...state,
                tutorialDone: true
            };
        case DASHBOARD_TUT_SUCCESS:
            return{
                ...state,
                tutorialDone: true
            };
        default:
            return state;
    }

}

export default dashboardTutorialReducer;