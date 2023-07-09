import { create } from "zustand"

const useStore = create((set, get) => {
    return {
        subjects: [
            {
                name: "Algorithme",
                durationPerweek: 3
            },
            {
                name: "SGBD",
                durationPerweek: 2
            },
            {
                name: "Dev Web",
                durationPerweek: 2
            },
            {
                name: "Admin Sys et reseau",
                durationPerweek: 2
            },
            {
                name: "Communication",
                durationPerweek: 2
            },
            {
                name: "Anglais",
                durationPerweek: 2
            },
        ],
        setSubjectDurationPerWeek: (name, duration) => {
            const subjects = get().subjects
            const index = subjects.findIndex(subject => subject.name === name)
            subjects[index].durationPerweek = duration
            set({
                subjects: subjects
            })
        }
    }
})


export default useStore