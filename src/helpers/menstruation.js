import { Colors } from "../css/styles";

export function makeDateString(date){
    var month = date.getMonth() + 1;
    var monthStr = (month<10)? "0"+month:""+month;
    var day = date.getDate();
    var dayStr = (day<10)? "0"+day: ""+day;
    
    var retstr = date.getFullYear()+"-"+monthStr+"-"+dayStr;
    //console.log(retstr, date);
    return retstr
};

export function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

export function calculateNextPeriods(numberOfPeriods, startDate,lenCycles, lenPeriods){
    let redSelected = {selected: true, selectedColor: Colors.red};
    let orangeSelected = {selected: true, selectedColor: Colors.purple};
    var returnObject = {};
    //make a datetime object from the startDate
    let datepieces = startDate[0].split('/');
    var startDateFormatted = new Date(datepieces[2], datepieces[1], datepieces[0]);
    //console.log(lenCycles, lenPeriods);
    
    //make lenCycle and lenPeriod. for the moment just take the last value
    const lenCycle = lenCycles[lenCycles.length -1];
    const lenPeriod = lenPeriods[lenPeriods.length -1];

    // now iterate over the 'number of Periods' to make all the dates!
    for (let i = 0; i < numberOfPeriods; i++) {
        console.log('Time ', i, 'day', startDateFormatted);
        returnObject[makeDateString(startDateFormatted)] = redSelected; // add the start
        // add for each day in the period:
        for (let p = 1; p < lenPeriod; p++) {
            console.log('period time', p);
            startDateFormatted = addDays(startDateFormatted, 1);
            returnObject[makeDateString(startDateFormatted)] = redSelected; // add period day
        }
        startDateFormatted = addDays(startDateFormatted, lenCycle-lenPeriod);
        //date.setDate(date.getDate() + days); increment by the number of days
    }
    //console.log(returnObject);
    
    return returnObject
}