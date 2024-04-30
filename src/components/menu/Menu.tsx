import React from 'react';
import styled from "styled-components";

// type MenuPropsType = {
//     tagItems: Array<string>
// }

export const Menu = (props: { tagItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.tagItems.map((item, index) => {
                    return <li key={index}>
                        <a href="">{item}</a>
                    </li>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
           
    }
`