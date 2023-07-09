import styled from "@emotion/styled"
import { Heading } from '@chakra-ui/react'
import useStore from "../store"
import SubjectSelect from "./SubjectSelect"

const selector = state => ({
    subjects: state.subjects
})

export default function SubjectsPanel() {
    const { subjects } = useStore(selector)
    return (
        <Wrapper>
            <Heading size={'lg'}>Subjects</Heading>
            <div className="subjects">
                {
                    subjects.map(subject => (
                        <SubjectSelect key={subject.name} subject={subject} />
                    ))
                }
            </div>
        </Wrapper>
    )

}

const Wrapper = styled.div`
    width: 301px;
    background: #FFF;
    border-radius: 15px;
    flex-shrink: 0;
    padding: 20px;
    h2{
        color: #805AD5;
        font-weight: 500;
        font-size: 24px;
    }
    .subjects{
        margin-top: 40px;
    }
`