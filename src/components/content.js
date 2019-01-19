import React from 'react'
import styled from 'styled-components'

const Main = styled.main`
  grid-area: main;
  overflow: auto;
`

const Content = ({ children }) => <Main>{children}</Main>

export default Content
