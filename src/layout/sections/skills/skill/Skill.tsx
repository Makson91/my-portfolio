import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string
    skillTitle: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
                <Icon iconId={props.iconId}/>
                <SkillTitle>{props.skillTitle}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    display: flex;
    width: 20%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const SkillTitle = styled.h4`
    color: var(--text, #BDEBEA);
    font-family: Montserrat, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.166px;
    text-transform: uppercase;
`

