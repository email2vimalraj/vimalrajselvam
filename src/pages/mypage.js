import React from 'react'
import styled, { css } from 'styled-components'

const HeaderFooterStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas:
    'header'
    'main'
    'footer';
  height: 100vh;
`

const Header = styled.header`
  grid-area: header;
  ${HeaderFooterStyle}
`

const Main = styled.main`
  grid-area: main;
`

const Footer = styled.footer`
  grid-area: footer;
  ${HeaderFooterStyle}
`

export default () => (
  <GridContainer>
    <Header>
      <h1>Vimalraj Selvam</h1>
      <div>
        <span>About me</span>
        <span>Posts</span>
      </div>
    </Header>
    <Main />
    <Footer />
  </GridContainer>
)
