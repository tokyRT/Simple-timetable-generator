import { create } from "zustand"
import { generateTimetable } from "./utils/generate"

const useStore = create((set, get) => {
    return {
        subjects: [
            {
                name: "Algorithme",
                durationPerWeek: 3
            },
            {
                name: "SGBD",
                durationPerWeek: 2
            },
            {
                name: "Dev Web",
                durationPerWeek: 2
            },
            {
                name: "Admin Sys et reseau",
                durationPerWeek: 2
            },
            {
                name: "Communication",
                durationPerWeek: 2
            },
            {
                name: "Anglais",
                durationPerWeek: 2
            },
        ],
        setSubjectDurationPerWeek: (name, duration) => {
            const subjects = get().subjects
            const index = subjects.findIndex(subject => subject.name === name)
            subjects[index].durationPerweek = duration
            set({
                subjects: subjects
            })
        }, 
        timetable: [
            {}, //monday
            {}, //tuesday
            {}, //wednesday
            {}, //thursday
            {}, //friday
        ],
        generateTimetable: () => {
            const subjects = get().subjects
            const availableSlots = [
                ["8-12", "14-18"],
                ["8-12", "14-18"],
                ["8-12", "14-18"],
                ["8-12", "14-18"],
                ["8-12", "14-18"],
            ]
            const maxCourseDuration = 2
            const timetable = generateTimetable(subjects, availableSlots, maxCourseDuration)
            set({
                timetable: timetable
            })
        }
    }
})


export default useStore