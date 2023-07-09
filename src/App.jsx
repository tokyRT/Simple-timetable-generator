import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import styled from "@emotion/styled"
import SubjectsPanel from './components/SubjectsPanel'
import Timetable from './components/Timetable'

function App() {

  return (
    <ChakraProvider>
      <Wrapper>
        <main>
          <SubjectsPanel/>
          <Timetable/>
        </main>
      </Wrapper>
    </ChakraProvider>
  )
}

export default App

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F3F3F3;
  min-width: 1250px;
  overflow: auto;
  main{
    max-width: 1200px;
    width: 100%;
    height: 606px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
`