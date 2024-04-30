import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <SectionTitle>About me</SectionTitle>
            <Text>
                The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a
                sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a chamber
                built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains were placed
                within this chamber during the Neolithic period, representing at least nine or ten individuals.
            </Text>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    display: flex;
    flex-direction: column;
    padding-left: 189px;
    padding-bottom: 130px;
`

const Text = styled.p`
    max-width: 843px;
    color: var(--text, #BDEBEA);
    font-family: Montserrat, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 144.444% */
    letter-spacing: 0.72px;
`