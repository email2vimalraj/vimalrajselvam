import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const MainCards = styled.div`
  column-count: 1;
  column-gap: 10px;
  margin: 10px;

  @media only screen and (min-width: 65.625em) {
    column-count: 2;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  -webkit-column-break-inside: avoid;
  padding: 10px;
  box-sizing: border-box;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <MainCards>
      <Card>
        <h1>Howdy! I'm Vimalraj</h1>
        <p>
          <span className="first-letter">I</span> started off my career as an
          occasional coder. Writing code excited me. Building UI's gave me the
          feel of a creator. I took to exploring UI a bit more seriously. My
          work took me through some interesting turns and in the process, I
          learnt test automation as well. Worked on building some automation
          frameworks in Java for a brief stint. But my love for UI never
          vanished. Eventually I have now evolved into what the industry calls
          as a "Full stack developer".
        </p>
        <p>
          I specialize in JavaScript, Java, Python and Ruby. Worked on VBScript
          during my initial life of career.
        </p>
        <p>
          At work, I am involved in building reliability/monitoring systems. For
          building them I get to play with React, GraphQL, Golang, Grafana,
          Kafka, OpenTSDB, Prometheus, ELK and many.
        </p>
        <p>
          I have discovered a new found love for Open source and web
          development. I am a Selenium and Appium enthusiast and try to chime in
          occasionally into TestNG as well through bug fixes.
        </p>
        <p>
          At home, when personal life gives me some free time, I work on
          building my own pet projects that I open source to the community.
        </p>
        <p>
          This site is all about sharing what I have learnt. You will get to
          hear about things that made me curious, some nifty hacks that I learnt
          to do some stuff (or) at other times, all those things I learnt the
          hard way by making mistakes.
        </p>
        <p>
          My intent is to share my learnings and learn from others as well. My
          sincere hope is that my posts helps you in some way or the other.
        </p>
        <p>
          If you would like to share some feedback, or want me to write about
          something that you feel is important, please do reach out to me. You
          know what they say… “The best motivation comes from a few kind words
          of encouragement”!
        </p>
      </Card>
      <Card>
        <h2>Recent Posts</h2>
        <p>Post number one</p>
        <p>Post number one</p>
      </Card>
    </MainCards>
  </Layout>
)

export default IndexPage
