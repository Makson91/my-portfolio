import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Skills</SectionTitle>
            <FlexWrapper wrap="wrap" justify="center" >
                <Skill iconId="js" skillTitle="javascript"/>
                <Skill iconId="ts" skillTitle="typescript"/>
                <Skill iconId="mongo" skillTitle="mongo db"/>
                <Skill iconId="postgrest" skillTitle="postgresql"/>
                <Skill iconId="jest" skillTitle="jest"/>

                <Skill iconId="express" skillTitle="express js"/>
                <Skill iconId="nest" skillTitle="nest js"/>
                <Skill iconId="docker" skillTitle="docker"/>
                <Skill iconId="react" skillTitle="react js"/>
                <Skill iconId="reactNative" skillTitle="react native"/>

                <Skill iconId="styledComponent" skillTitle="styled components"/>
                <Skill iconId="redux" skillTitle="redux"/>
                <Skill iconId="git" skillTitle="git"/>

            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`

`