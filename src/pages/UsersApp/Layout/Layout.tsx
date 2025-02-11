import { useNavigate } from "react-router-dom"

import { LayoutProps } from "./types"
import {
  LayoutWrapper,
  Header,
  HeaderLogoContainer,
  HeaderLogo,
  NavContainer,
  Main,
  Footer,
  StyledNavLink,
  StyledLink,
  FooterNavContainer,
} from "./styles"
import Logo from '../../../assets/foto/logo.jpg';


function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()

  const goToHomePage = () => navigate("/")

  return (
    <LayoutWrapper>
      <Header>
        <HeaderLogoContainer onClick={goToHomePage}>
          <HeaderLogo src={Logo}/>
        </HeaderLogoContainer>
        <NavContainer>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/"
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/users"
          >
            Users
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/lesson17"
          >
            Lesson 17
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/hw17"
          >
            HW 17
          </StyledNavLink>          
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/lesson18"
          >
            Lesson 18
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/hw18"
          >
            HW 18
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <HeaderLogoContainer onClick={goToHomePage}>
          <HeaderLogo src={Logo}/>
        </HeaderLogoContainer>
        <FooterNavContainer>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/users">Users</StyledLink>
          <StyledLink to="/lesson17">Lesson 17</StyledLink>
          <StyledLink to="/hw17">HW 17</StyledLink>
          <StyledLink to="/lesson18">Lesson 18</StyledLink>
          <StyledLink to="/hw18">HW 18</StyledLink>
        </FooterNavContainer>
      </Footer>
    </LayoutWrapper>
  )
}

export default Layout