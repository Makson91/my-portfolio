import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper justify="space-around" align="center">
                <TextBlock>
                    <MainTitle>WEB DEVELOPER</MainTitle>
                    <Name>John Doe</Name>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                        duis enim velit mollit. Exercitation veniam consequat sunt.</p>
                    <button>Contact Me</button>
                </TextBlock>

                <div>
                    <Photo src={photo} alt=""/>
                </div>
            </FlexWrapper>
        </StyledMain>
    );
};

const Photo = styled.img`
    object-fit: cover;
    width: 417px;
`

const StyledMain = styled.div`
    background-color: red;
`
const TextBlock = styled.p`
    max-width: 514px;
`
const MainTitle = styled.h1`
    color: #D7E5EC;
    font-family: Tinos, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const Name = styled.h3`
    font-family: Montserrat, sans-serif;
    font-size: 72px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    background: var(--gradient, linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`