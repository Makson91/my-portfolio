import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={"space-between"} align="center">
                    <TextBlock>
                        <MainTitle>WEB DEVELOPER</MainTitle>
                        <Name>John Doe</Name>
                        <Text>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam consequat sunt.</Text>
                        <Button>Contact Me</Button>
                    </TextBlock>


                        <Photo src={photo} alt=""/>

                </FlexWrapper>
            </Container>

        </StyledMain>
    );
};

const StyledMain = styled.section`
    background-color: #041F31;
`

const TextBlock = styled.div`
    max-width: 514px;
    font-family: Montserrat, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 0.64px;
`

const MainTitle = styled.h1`
    padding-bottom: 10px;
    color: #D7E5EC;
    font-family: Tinos, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const Name = styled.h3`
    padding-bottom: 11px;
    font-size: 72px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    background: ${theme.colors.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const Text = styled.p`
padding-bottom: 29px;
`

const Photo = styled.img`
    object-fit: cover;
    max-width: 417px;
`