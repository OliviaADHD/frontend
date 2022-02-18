import { ADD_EVENT,
CHANGE_EVENT, DELETE_EVENT } from "../actions/types";

const eventData = {
    // like a dictionairy of value (continuous integer, no rep) - 
    // eventObject pair, event Object {startDate, endDate, eventTitle, eventDetails}
    '02/18/22' : {
    1: {"startDate": new Date('January 19, 2022 17:00:00'),
        "endDate": new Date('January 19, 2022 17:30:00'),
        "eventTitle": "MyTestEvent!",
        "eventDetails":"all these things I need to do",
        "remindMe": true,
        "location": undefined,
        "category": []},
    2: {"startDate": new Date('December 17, 2020 09:00:00'),
    "endDate": new Date('December 17, 2020 09:30:00'),
    "eventTitle": "MyTestEvent 2!",
    "eventDetails":"all these things I need to do",
    "remindMe": true,
    "location": undefined,
    "category": []},
    3: {"startDate": new Date('December 17, 2020 09:30:00'),
    "endDate": new Date('December 17, 2020 10:30:00'),
    "eventTitle": "MyTestEvent 3!",
    "eventDetails":"all these things I need to do, yep, so so much stuff",
    "remindMe": true,
    "location": undefined,
    "category": []},
    4: {"startDate": new Date('December 17, 2020 09:30:00'),
    "endDate": new Date('December 17, 2020 10:30:00'),
    "eventTitle": "MyTestEvent 4!",
    "eventDetails":"all these things I need to do, yep, so so much stuff",
    "remindMe": true,
    "location": undefined,
    "category": []},
    5: {"startDate": new Date('December 17, 2020 09:30:00'),
    "endDate": new Date('December 17, 2020 10:30:00'),
    "eventTitle": "MyTestEvent 5!",
    "eventDetails":"all these things I need to do, yep, so so much stuff",
    "remindMe": true,
    "location": undefined,
    "category": []},
    6: {"startDate": new Date('December 17, 2020 09:30:00'),
    "endDate": new Date('December 17, 2020 10:30:00'),
    "eventTitle": "MyTestEvent 6!",
    "eventDetails":"all these things I need to do, yep, so so much stuff",
    "remindMe": true,
    "location": undefined,
    "category": []
        }
    },
    '02/19/22': {
        1: {"startDate": new Date('January 19, 2022 17:00:00'),
        "endDate": new Date('January 19, 2022 17:30:00'),
        "eventTitle": "MyTestEventSecondDAy",
        "eventDetails":"some details",
        "remindMe": true,
        "location": undefined,
        "category": []},
    }

};

const upcomingEventsReducer = (state=eventData, action) => {
    switch (action.type) {
        case DELETE_EVENT:
            delete state[action.payload.eventId];
            return state;
        default:
            return state;
    }
}

export default upcomingEventsReducer;

