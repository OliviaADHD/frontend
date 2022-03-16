import { ADD_EVENT,
CHANGE_EVENT, DELETE_EVENT } from "../actions/types";

const eventData = {
    '02/19/22': {
        1: {"startDate": new Date('January 19, 2022 17:00:00'),
        "endDate": new Date('January 19, 2022 17:30:00'),
        "eventTitle": "MyTestEventSecondDAy",
        "eventDetails":"some details",
        "remindMe": true,
        "remindMeWhen": undefined,
        "location": undefined,
        "category": []},
    }

};

const upcomingEventsReducer = (state=eventData, action) => {
    switch (action.type) {
        case DELETE_EVENT:
            delete state[action.payload.date][action.payload.eventId];
            return state;
        case CHANGE_EVENT:
            state[action.payload.date][action.payload.eventId] = {
                "startDate": action.payload.startDate,
                "endDate": action.payload.endDate,
                "eventTitle": action.payload.title,
                "eventDetails": action.payload.details,
                "remindMe" : action.payload.remindMe,
                "remindMeWhen": action.payload.remindMeWhen,
                "location": action.payload.location,
                "category": action.payload.category
            }
            return state;
        case ADD_EVENT:
            if (state[action.payload.date] === undefined){
                state[action.payload.date] = {1: {
                    "startDate": action.payload.startDate,
                    "endDate": action.payload.endDate,
                    "eventTitle": action.payload.title,
                    "eventDetails": action.payload.details,
                    "remindMe" : action.payload.remindMe,
                    "remindMeWhen": undefined,
                    "location": action.payload.location,
                    "category": []
                }}
            } else {
                const possKeys = Object.keys(state[action.payload.date]);
                const max = Math.max(...possKeys);
                state[action.payload.date][max+1] = {
                    "startDate": action.payload.startDate,
                    "endDate": action.payload.endDate,
                    "eventTitle": action.payload.title,
                    "remindMe" : action.payload.remindMe,
                    "remindMeWhen": undefined,
                    "location": action.payload.location,
                    "category": []
                }
            }
            return state;
        default:
            return state;
    }
}

export default upcomingEventsReducer;

