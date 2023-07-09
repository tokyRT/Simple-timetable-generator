import { create } from "zustand"
import { generateTimetable } from "./utils/generate"

const useStore = create((set, get) => {
    return {
        subjects: [
            {
                name: "Algorithme",
                durationPerWeek: 6
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
                durationPerWeek: 4
            },
            {
                name: "Communication",
                durationPerWeek: 4
            },
            {
                name: "Anglais",
                durationPerWeek: 2
            },
        ],
        setSubjectDurationPerWeek: (name, duration) => {
            const subjects = get().subjects
            const index = subjects.findIndex(subject => subject.name === name)
            subjects[index].durationPerWeek = duration
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
            const subjects = JSON.parse(JSON.stringify(get().subjects))
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