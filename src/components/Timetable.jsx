import styled from "@emotion/styled"
import { Heading } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import Subject from "./Subject"
import useStore from "../store"
import { useEffect } from "react"

const selector = state => ({
    subjects: state.subjects,
    timetable: state.timetable,
    generateTimetable: state.generateTimetable,

})

export default function Timetable() {
    const { timetable, generateTimetable } = useStore(selector)
    const handleGenerate = () => {
        generateTimetable()
    }
    useEffect(() => {
        console.log(timetable);
    }, [timetable])
    return (
        <Wrapper>
            <div className="title">
                <Heading size={'lg'}>Timetable</Heading>
                <Button colorScheme='purple' onClick={handleGenerate}>Regenerate</Button>
            </div>
            <div className="timetable">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th><span>8h</span></th>
                            <th><span>9h</span></th>
                            <th><span>10h</span></th>
                            <th><span>11h</span></th>
                            <th><span>12h</span></th>
                            <th><span>14h</span></th>
                            <th><span>15h</span></th>
                            <th><span>16h</span></th>
                            <th><span>17h</span></th>
                            <th><span>18h</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span>Lundi</span></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><span>Mardi</span></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><span>Mercredi</span></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><span>jeudi</span></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><span>vendredi</span></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                    </tbody>
                </table>
                <div className="subjects">
                    {
                        timetable.map((day, index) => (
                            <div className="day" key={index}>
                                {
                                    Object.keys(day).map((hour, index) => (
                                        <Subject
                                            className="subject"
                                            key={index}
                                            name={day[hour]}
                                            start={hour.split('-')[0]}
                                            end={hour.split('-')[1]}
                                        />
                                    ))
                                }
                            </div>
                        ))

                    }
                </div>
            </div>
        </Wrapper>
    )

}

const Wrapper = styled.div`
    width: 100%;
    background: #FFF;
    border-radius: 15px;
    padding: 20px;
    .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2{
            color: #805AD5;
            font-weight: 500;
            font-size: 24px;
        }
    }
    .timetable{
        position: relative;
        table{
            /* width: 100%; */
            margin-top: 40px;
            border-collapse: collapse;
            th{
                text-align: left;
                height: 30px;
                span{
                    transform: translateX(-10px);
                    font-weight: 600;
                    font-size: 14px;
                    color: #767676;
                }
            }
            td{
                border: 1px solid #F2F2F2;
                height: 80px;
                width: 72px;
                &:first-of-type{
                    /* text-align: right; */
                    padding: 20px;
                    width: 100px;
                    font-weight: 600;
                    font-size: 14px;
                    color: #767676;
                }
                &:last-child{
                    /* border: none;
                    width: 1px; */
                }
            }
        }
        .subjects{
            border: 1px solid red;
            height: calc(100% - 30px);
            width: calc(100% - 100px);
            position: absolute;
            top: 30px;
            left: 100px;
            .day{
                position: relative;
                height: 80px;
            }
        }
    }
`