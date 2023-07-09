import subjectColors from "../subjectColors"
import styled from "@emotion/styled"

const left = (start) => {
    let step = start - 8;
    if(start >= 14) step -= 1;
    return step * 72;

}

export default function Subject({name, start, end}){
    return (
        <Wrapper style={{
            background: subjectColors[name],
            width: `${(end-start) * 72}px`,
            // marginLeft: '2px',
            left: `${left(start)}px`
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
    position: absolute;
    .name{
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
    }
`