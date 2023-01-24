import styled from "styled-components";

export const ProfilePicStyles = styled.div`
  #header-profile-pic {
    width: 400px;
    max-width: 100%;
    max-height: 400px;
    position: absolute;
    margin: -39px 0px 0px 140px;
  }
  @media ${(props) => props.theme.breakpoints.xlg} {
    width: 40%;
    position: absolute;
    margin: 10px 0px 0px 20px;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 40%;
    position: absolute;
    margin: -35px 0px 0px -31px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 40%;
    position: absolute;
    margin: px 0px 0px -40px;
  }
`;
