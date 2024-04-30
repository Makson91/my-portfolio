import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <SocialIconList>
                    <SocialIconLink href={"#"}>
                        <Box>
                            <Icon iconId={"gmail"} width={"38"} height={"38"} viewBox={"-7 -7 38 38"}/>
                            <SocialIconText>gmail</SocialIconText>
                        </Box>
                    </SocialIconLink>

                    <SocialIconLink href={"#"}>
                        <Box>
                            <Icon iconId={"linkedin"} width={"38"} height={"38"} viewBox={"-7 -7 38 38"}/>
                            <SocialIconText>linkedin</SocialIconText>
                        </Box>
                    </SocialIconLink>

                    <SocialIconLink href={"#"}>
                        <Box>
                            <Icon iconId={"github"} width={"38"} height={"38"} viewBox={"-11 -12 120 120"}/>
                            <SocialIconText>github</SocialIconText>
                        </Box>
                    </SocialIconLink>
                </SocialIconList>

                <FlexWrapper gap={"48px"}>
                    <SocialIconLink href={"#"}>
                        <SocialIconText>Projects</SocialIconText>
                    </SocialIconLink>

                    <SocialIconLink href={"#"}>
                        <SocialIconText>Contact</SocialIconText>
                    </SocialIconLink>
                </FlexWrapper>
                <Copyright>WEB DEVELOPER 2021</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
background-color: #041F31;
`
const SocialIconList = styled.ul`
    display: flex;
    gap: 73px;
    margin-bottom: 49px;
    padding-left: 0;
`

const SocialIconLink = styled.a`

`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SocialIconText = styled.span`
    color: var(--text, #BDEBEA);
    text-align: center;
    font-family: Montserrat, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 11.105px; /* 92.544% */
    letter-spacing: 1.44px;
    text-transform: uppercase;
`

const Copyright = styled.small`
    margin-top: 40px;
    margin-bottom: 100px;
    color: var(--text, #BDEBEA);
    text-align: center;
    font-family: Montserrat, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 185.714% */
    letter-spacing: 0.56px;
`