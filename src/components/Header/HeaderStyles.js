import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    #container {
      margin-top: 210px;
    }

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const Span = styled.span`
  font-size: 2rem;
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  display: flex;
  grid-area: 1 / 1 / 2 / 3;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  padding-left: 21px;
  justify-content: flex-start;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 6;
    margin: -12px 9px 1px -52px;
  }

  @media ${(props) => props.theme.breakpoints.xlg} {
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    padding-right: 31px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-right: -63px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 1 / 3 / 6;
    margin: 5px 9px 1px 36px;
    gap: 10px;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 8;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  margin-right: 15px;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 5 / 2 / 6;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: #fbfbfb;
  transition: 0.4s ease;
  text-decoration: none;
  padding: 0.5rem 1rem;

  &:hover {
    background-color: #222d45;
  }
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    li a {
        font-size: 18px;
      }
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
    font-size: 16px;
  }
`;

// Social Icons
export const SocialIconGit = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50%;
  padding: 4px 4px 0px 4px;
  &:hover {
    background-color: #dbe1e6;
    color: black;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 36px 4px 0px 4px;
  }
`;

export const SocialIconLinkedIn = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50%;
  padding: 4px 4px 0px 4px;
  &:hover {
    background-color: #dbe1e6;
    color: #0966c2;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 36px 4px 0px 4px;
  }
`;

// footer social icons
export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50%;
  /* padding: 30px 10px 3px 10px; */
  &:hover {
    transform: scale(1.3);
    cursor: pointer;
  }

  .git-header {
    padding: 30px 10px 3px 10px;
    background-color: #dbe1e6;
    color: black;
  }
`;
