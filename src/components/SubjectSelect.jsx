import styled from "@emotion/styled"
import { Select } from '@chakra-ui/react'
import subjectColors from "../subjectColors"
import useStore from "../store"
const selector = state => ({
    setSubjectDurationPerWeek: state.setSubjectDurationPerWeek
})
export default function SubjectSelect({ subject }) {
    const {setSubjectDurationPerWeek} = useStore(selector)
    const handleOnChange = (e) =>{
        setSubjectDurationPerWeek(subject.name, e.target.value)
    }
    return (
        <Wrapper style={{
            background: subjectColors[subject.name]
        }}>
            <span className="name">
                {subject.name}
            </span>
            <Select
                variant='filled'
                width={'65px'}
                color={'black'}
                size={'sm'}
                bg='white'
                borderRadius={'7px'}
                value={subject.durationPerWeek}
                onChange={handleOnChange}
            >
                <option value="2">2h</option>
                <option value="3">3h</option>
                <option value="4">4h</option>
                <option value="5">5h</option>
                <option value="6">6h</option>
            </Select>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 45px;
    border-radius: 47px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px 0;
    color: white;
    .name{
        /* font-size: 12px; */
        font-style: normal;
        font-weight: 600;
    }
    select{
        &:focus{
            background-color: white;
        }
    }
`