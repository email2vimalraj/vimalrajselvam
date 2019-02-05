import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import SubscribeForm from '../components/subscribeform'

const MainCards = styled.div`
  grid-area: postslist;
  column-count: 1;
  column-gap: 10px;
`

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'postslist'
    'subscribeform';

  @media only screen and (min-width: 46.875em) {
    grid-template-columns: 1fr 320px;
    grid-template-areas: 'postslist subscribeform';
  }
`

const RightSide = styled.div`
  grid-area: subscribeform;
  margin: 10px;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  -webkit-column-break-inside: avoid;
  padding: 20px;
  box-sizing: border-box;
`

const Tag = styled.span`
  display: flex;
  text-transform: uppercase;
  font-size: 12px;
  color: grey;
  margin-bottom: 5px;
  justify-content: flex-end;
`

const PostTitle = styled.h1``

const PostContent = styled.div``

const PostPage = () => (
  <Layout>
    <SEO title="Post" keywords={[`post`, `blog`, `article`, 'writeup']} />

    <PostsContainer>
      <MainCards>
        <Card>
          <PostTitle>
            Facebook: Where Friendships Go to Never Quite Die
          </PostTitle>
          <PostContent>
            <p>
              <span className="first-letter">W</span>hile I don’t feel like
              coding React without hooks, react-cache still seems to be still
              far away. Surely, caching in data fetching important, nevertheless
              I would like to seek possibilities of implementations only with
              React Hooks. These might be obsoleted in the future, but I want
              something today, that is “useFetch”. This could be still useful
              without react-cache in case sophisticated caching is not
              necessary.
            </p>
          </PostContent>
          <Tag>Technology</Tag>
        </Card>
      </MainCards>

      <RightSide>
        <SubscribeForm />
      </RightSide>
    </PostsContainer>
  </Layout>
)

export default PostPage
