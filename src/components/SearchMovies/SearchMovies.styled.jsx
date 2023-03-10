import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 8px 0;
`;

export const Form = styled.form`
    display: flex;
    width: 450px;
`;

export const Input = styled.input`
    display: block;
    outline: none;
    position: relative;
    z-index: 2;
    width: 100%;
    height: 20px;
    padding: 8px 16px;
    border: 1px solid black;
`;

export const Btn = styled.button`
    display: inline-block;
    position: relative;
    color: #dc90d9;
    text-align: center;
    vertical-align: baseline;
    cursor: pointer;
    background-color: white;
    border: 1px solid black;
    padding: 8px 16px;
`;