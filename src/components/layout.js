import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import 'medium.css/medium.css'

import Header from './header'
import Content from './content'
import './layout.css'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr;
  grid-template-areas:
    'header'
    'main';
  height: 100vh;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <GridContainer>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>{children}</Content>
      </GridContainer>
    )}
  />
)

export default Layout
