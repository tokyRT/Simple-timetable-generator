import {getAvailableDays} from "./timetable"

function generateTimetable(subjects, availableSlots, maxCourseDuration) {
    let timetable = [
        {}, //monday
        {}, //tuesday
        {}, //wednesday
        {}, //thursday
        {}, //friday
    ];
    let sorted = sortedSubjects(subjects);
    //copy of the available slots
    let availableSlotsCopy = JSON.parse(JSON.stringify(availableSlots));

    let i = 0;
    while (i < sorted.length) {
        const duration = sorted[i].durationPerWeek;
        // console.log("sorted", sorted);
        const subjectName = sorted[i].name;
        // console.log("subjectName", subjectName);
        let courseDuration = duration >= maxCourseDuration ? maxCourseDuration : duration;
        //array of available days
        const availableDays = getAvailableDays(availableSlotsCopy, timetable, subjectName, courseDuration);
        // console.log("availableDays", availableDays);
        if(availableDays.length == 0){
            i++;
            continue
        }
        let randomAvailableDay = availableDays[randomInt(0, availableDays.length - 1)]
        // console.log("randomAvailableDay", randomAvailableDay);
        //if availableSlotsCopy is empty pass to the next subject
        //smthg like "8-12" or "14-16"
        let randomSlot = null;
        // while(randomSlot == null){
            randomSlot = getRandomSlot(availableSlotsCopy, randomAvailableDay, courseDuration);
        // }
        //inserting the subject in the timetable
        // console.log("randomSlot", randomSlot);
        let newSlot = `${startSlot(randomSlot)}-${startSlot(randomSlot) + courseDuration}`;
        timetable[randomAvailableDay][newSlot] = subjectName;
        

        //remove the slot from the available slots if the duration of the slot is 0
        if(endSlot(randomSlot) - startSlot(randomSlot) == courseDuration) {
            availableSlotsCopy[randomAvailableDay].splice(availableSlotsCopy[randomAvailableDay].indexOf(randomSlot), 1);
        } 
        else{
            //updating the slot in the available slots
            availableSlotsCopy[randomAvailableDay][availableSlotsCopy[randomAvailableDay].indexOf(randomSlot)] = `${startSlot(randomSlot) + courseDuration}-${endSlot(randomSlot)}`;
        }

        //updating the duration of the subject
        sorted[i].durationPerWeek -= courseDuration;
        //if the duration of the subject is 0, pass to the next subject
        if (sorted[i].durationPerWeek == 0) {
            i++;
        }
    }

    return timetable;
}

function getRandomSlot(availableSlots, day, courseDuration) {
    let slots = []
    for (let slot of availableSlots[day]) {
        // console.log("slot", slot);
        // console.log("endSlot(slot) - startSlot(slot)", endSlot(slot) - startSlot(slot) >= courseDuration);
        if (endSlot(slot) - startSlot(slot) >= courseDuration) {
            slots.push(slot);
        }
    }
    let randomIndex = randomInt(0, slots.length - 1);
    return slots[randomIndex]               
}


function sortedSubjects(subjects) {
    return subjects.sort((a, b) => b.durationPerWeek - a.durationPerWeek)
}


function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function startSlot(slot) {
    return parseInt(slot.split("-")[0])
}
function endSlot(slot) {
    return parseInt(slot.split("-")[1])
}

export {
    generateTimetable,
    sortedSubjects,
    randomInt,
}