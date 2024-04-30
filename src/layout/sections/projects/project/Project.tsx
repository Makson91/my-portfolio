import React from 'react';
import styled from "styled-components";
import {Menu} from "../../../../components/menu/Menu";

type ProjectPropsType = {
    src: string
    title: string
    description: string
    skillTag: Array<string>
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src} alt=""/>
            <Box>
                <ProjectTitle>{props.title}</ProjectTitle>
                <Menu tagItems={props.skillTag}/>
                <ProjectDescription>{props.description}</ProjectDescription>
            </Box>
        </StyledProject>
    )
};

const StyledProject = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 522px;
    width: 100%;
    background-color: #222525;
`

const Box = styled.div`
padding-left: 26px;
`

const Image = styled.img`
    width: 100%;
    height: 388px;
`

const ProjectTitle = styled.h4`
    color: var(--title, #D9F2F2);
    font-family: Montserrat, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`
const ProjectDescription = styled.p`
    color: var(--text, #BDEBEA);
    font-family: Montserrat, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 0.64px;
`