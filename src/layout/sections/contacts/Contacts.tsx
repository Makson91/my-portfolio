import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contacts</SectionTitle>
            <StyledForm>
                <label htmlFor={"name"}>Name</label>
                <Field id={"name"} placeholder={"Your name"} aria-label={"sss"}/>

                <label htmlFor={"email"}>email</label>
                <Field id={"email"} placeholder={"value"}/>

                <label htmlFor={"message"}>Message</label>
                <Field id={"message"} placeholder={"Hi, i will..."} as={"textarea"}/>
                <Button type={"submit"}>submit</Button>
            </StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    background-color: #041F31;
`
const StyledForm = styled.form`
max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`
const Field = styled.input`

`
const Button = styled.button`
    margin-bottom: 190px;

`