import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import SubscribeForm from '../components/subscribeform'

const MainCards = styled.div`
  grid-area: postslist;
  column-count: 1;
  column-gap: 10px;
  margin: 10px;
`

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  grid-template-areas: 'postslist subscribeform';
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
  text-transform: uppercase;
  font-size: 12px;
  color: grey;
  margin-bottom: 5px;
`

const PostTitle = styled.span`
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 10px;
`

const PostExcerpt = styled.span`
  font-size: 16px;
  color: grey;
`

const PostsPage = () => (
  <Layout>
    <SEO
      title="Posts"
      keywords={[`posts`, `blog`, `blogs`, `articles`, 'writeups']}
    />

    <PostsContainer>
      <MainCards>
        <Card>
          <Tag>Technology</Tag>
          <PostTitle>
            Facebook: Where Friendships Go to Never Quite Die
          </PostTitle>
          <PostExcerpt>
            On its 15th anniversary, a look at how the site has changed social
            life by keeping weak connections on life support forever
          </PostExcerpt>
        </Card>

        <Card>
          <Tag>Technology</Tag>
          <PostTitle>
            Facebook: Where Friendships Go to Never Quite Die
          </PostTitle>
          <PostExcerpt>
            On its 15th anniversary, a look at how the site has changed social
            life by keeping weak connections on life support forever
          </PostExcerpt>
        </Card>
      </MainCards>

      <RightSide>
        <SubscribeForm />
      </RightSide>
    </PostsContainer>
  </Layout>
)

export default PostsPage
