import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    margin: 0;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #fff3f3;
    padding: 20px;

    > nav {
        display: flex;
    }
`;

export const Links = styled(NavLink)`
    padding: 4px 16px;
    color: black;
    text-decoration: none;

    &.active {
        color: #fff;
        background-color: #8a38c5;
    }
`;