import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Button = styled.button`
    display: inline-flex; 
    padding: 12px 20px 13px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 6px;
    background: ${theme.colors.gradient};

    color: #252728;
    text-align: center;
    font-family: Montserrat, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`