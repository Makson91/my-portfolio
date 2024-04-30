import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Project} from "./project/Project";
import projectImage from "../../../assets/images/project.webp"


export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <Container>
            <FlexWrapper wrap="wrap" gap="28px">
                <Project src={projectImage}
                         title="TITLE PROJECT"
                         skillTag={["Javascript", "PostgreSQL", "React", "redux"]}
                         description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/>
                <Project src={projectImage}
                         title="I N S I G H T G R A M"
                         skillTag={["Javascript", "React Native", "redux"]}
                         description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/>
                <Project src={projectImage}
                         title="TITLE PROJECT"
                         skillTag={["Javascript", "PostgreSQL", "React", "redux"]}
                         description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/>
                <Project src={projectImage}
                         title="I N S I G H T G R A M"
                         skillTag={["Javascript", "React Native", "redux"]}
                         description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/>
            </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    background-color: #041F31;
    padding-left: 189px;
    padding-bottom: 140px;
    
`
const Container = styled.div`
margin-top: 32px;
`