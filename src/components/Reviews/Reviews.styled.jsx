import styled from "styled-components";

export const ListReview = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style: none;
    max-width: 1024px;
    border: 1px solid black;
    padding: 8px 20px;
    text-align: justify;
`;

export const Author = styled.b`
    display: inline-block;
    margin-bottom: 10px;
`;