import React from 'react';
import styled from "styled-components";

type ProjectPropsType = {
    title: string
    description: string
    skillTag: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <img src="" alt=""/>
            <ProjectTitle>{props.title}</ProjectTitle>
            <div>
                <button>{props.skillTag}</button>
                <button>{props.skillTag}</button>
                <button>{props.skillTag}</button>
                <button>{props.skillTag}</button>
            </div>
            <ProjectDescription>{props.description}</ProjectDescription>
        </StyledProject>
    )
        ;
};

const StyledProject = styled.div`

`
const ProjectTitle = styled.h4`

`
const ProjectDescription = styled.p`

`