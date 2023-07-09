import { canBeTaughtOnThatDay } from "./subject"


function startSlot(slot) {
    return parseInt(slot.split("-")[0])
}
function endSlot(slot) {
    return parseInt(slot.split("-")[1])
}


function availableSlotsByDuration(timetable, day, courseDuration) {
    let slots = []
    let daySlot = Object.keys(timetable[day])
    if (daySlot.length == 0) {
        return ["8-12", "14-18"]
    }
    if (daySlot.length == 1) {
        if (endSlot(daySlot[0]) - startSlot(daySlot[0]) >= courseDuration) return daySlot
        else return []
    }
    let hours = [8, 9, 10, 11, 14, 15, 16, 17]
    for (const slot of daySlot) {
        for (let h = startSlot(slot); h < endSlot(slot); h++) {
            //remove h from hours
            hours.splice(hours.indexOf(h), 1)
        }
    }
    let interval = []
    for (const h of hours) {
        slots.push(`${h}-${h + 1}`)
    }

    //merge consecutive hour
    // console.log("slots", slots)
    if (slots.length <= 1) return slots
    let merged = [slots[0]]
    let j = 0
    // console.log("slots", slots);
    for (let i = 0; i < slots.length - 1; i++) {
        // console.log("merged", merged);
        if (endSlot(slots[i]) == startSlot(slots[i + 1]) && endSlot(merged[j]) == startSlot(slots[i + 1])) {
            merged[j] = `${startSlot(merged[j])}-${endSlot(slots[i + 1])}`
        } else {
            merged.push(slots[i + 1]);
            j += 1
        }
    }

    //filter by duration
    merged = merged.filter(slot => {
        return endSlot(slot) - startSlot(slot) >= courseDuration
    })
    return merged
}

function getAvailableDays(availableSlots, timetable, subjectName, courseDuration) {
    let availableDays = [];
    //if timetable is empty
    if (timetable.every(day => Object.keys(day).length == 0)) {
        return [0, 2, 4]
    }
    for (let day = 0; day < 5; day++) {
        if (canBeTaughtOnThatDay(timetable, day, subjectName, courseDuration, availableSlots)) {
            availableDays.push(day);
        }
    }
    return availableDays;
}
export {getAvailableDays, availableSlotsByDuration};