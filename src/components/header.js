import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

const HeaderStyle = styled.header`
  grid-area: header;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`

const Title = styled.a`
  font-family: 'Lora';
  font-size: 16px;
  letter-spacing: -0.03px;
  line-height: 1.58;
  text-decoration: none;
  padding: 5px;
  margin-top: 0;

  @media only screen and (min-width: 46.875em) {
    font-size: 21px;
  }
`

const NavLinks = styled.ul`
  list-style-type: none;
  display: none;

  @media only screen and (min-width: 46.875em) {
    display: block;
  }
`

const NavListItem = styled.li`
  display: inline;
  padding: 0 10px;
`

const NavLink = styled.a`
  text-decoration: none;
  padding: 5px;

  &:hover {
    background-color: #eee;
    border-radius: 5px;
  }
`

const Icons = styled.div`
  display: none;
  a {
    padding: 5px;

    &:hover {
      background-color: #eee;
      border-radius: 5px;
    }
  }

  @media only screen and (min-width: 46.875em) {
    display: block;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderStyle>
    <Title>{siteTitle}</Title>
    <NavLinks>
      <NavListItem>
        <NavLink href="/about">About me</NavLink>
      </NavListItem>
      <NavListItem>
        <NavLink href="/posts">Posts</NavLink>
      </NavListItem>
    </NavLinks>
    <Icons>
      <a href="/">
        <FaLinkedin />
      </a>
      <a href="/">
        <FaTwitter />
      </a>
      <a href="/">
        <FaGithub />
      </a>
    </Icons>
  </HeaderStyle>
)

export default Header
