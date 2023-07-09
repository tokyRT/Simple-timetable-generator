import {availableSlotsByDuration} from "./timetable"
function isTaughtOnThatDay(timetable, day, subjectName) {
    return Object.values(timetable[day]).includes(subjectName)
}
function canBeTaughtOnThatDay(timetable, day, subjectName, courseDuration, availableSlots=[]) {
    //check previous and next day to avoid consecutive subject
    if (day > 0 && day < 4) {
        if (isTaughtOnThatDay(timetable, day, subjectName) || isTaughtOnThatDay(timetable, day - 1, subjectName) || isTaughtOnThatDay(timetable, day + 1, subjectName)) return false
    } else if (day == 0) {
        if (isTaughtOnThatDay(timetable, day, subjectName) || isTaughtOnThatDay(timetable, day + 1, subjectName)) return false
    } else { //day == 4
        if (isTaughtOnThatDay(timetable, day, subjectName) || isTaughtOnThatDay(timetable, day - 1, subjectName)) return false
    }
    //check available slot for that day 
    // let slots = availableSlots[day]
    // if(slots == undefined) return false
    // for (const slot of slots) {
    //     if(endSlot(slot) - startSlot(slot) >= courseDuration) return true
    // }
    if(availableSlotsByDuration(availableSlots, day, courseDuration).length == 0) return false

    return true;
}
function startSlot(slot) {
    return parseInt(slot.split("-")[0])
}
function endSlot(slot) {
    return parseInt(slot.split("-")[1])
}

export {canBeTaughtOnThatDay, isTaughtOnThatDay};
