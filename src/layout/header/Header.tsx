import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";

export const Header = () => {
    return (
        <StyledHeader>
            <a href="">Home</a>

            <Menu/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: green;
    display: flex;
    justify-content: space-between;
    align-items: center;
`