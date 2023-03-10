import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 16px 0;
    gap: 8px;
`;

export const Item = styled.li`
    display: inline-block;
    width: 100%;
`;

export const MovieLink = styled(NavLink)`
    display: inline-block;
    padding: 4px 16px;
    color: black;
    text-decoration: none;

    :hover,
    :focus {
        color: #8a38c5;
    }
`;