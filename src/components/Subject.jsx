import subjectColors from "../subjectColors"
import styled from "@emotion/styled"


export default function Subject({name, duration}){
    return (
        <Wrapper style={{
            background: subjectColors[name],
            width: `${duration * 80}px`,
            marginLeft: '2px'
        }}>
            <span className="name">
                {name}
            </span>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 40px;
    border-radius: 47px;
    padding: 10px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px 0;
    color: white;
    .name{
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
    }
`