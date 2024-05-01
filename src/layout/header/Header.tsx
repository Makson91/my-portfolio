import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Button} from "../../components/Button";
import {theme} from "../../styles/Theme";

// const items = ["Projects","Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <FlexWrapper gap={"748px"}>
                        <StyledLink href="">Home</StyledLink>
                        <StyledLink href="">Projects</StyledLink>
                        {/*<StyledLink href="">Contact</StyledLink>*/}

                        {/*<Menu tagItems={items}/>*/}
                    </FlexWrapper>
                    <Button>Contact</Button>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: ${theme.colors.primaryBg};
    padding-top: 27px;
`

const StyledLink = styled.a`
    color: ${theme.colors.font};
    font-family: Montserrat, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`
