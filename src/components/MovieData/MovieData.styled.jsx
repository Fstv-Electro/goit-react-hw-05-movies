import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const ContainerMovie = styled.div`
    padding: 8px 48px;
`;

export const Box = styled.div`
    display: flex;
    gap: 16px;
    max-width: 1024px;
    padding: 20px 12px;
    border: 1px solid black;
    border-radius: 8px;
    max-width: 1600px;
`;

export const Poster = styled.img`
    width: 280px;
    height: 320px;
    border-radius: 12px;
    object-fit: cover;
`;

export const BoxDataMovie = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding: 0 20px;
`;

export const ListGenres = styled.ul`
    display: flex;
    list-style: none;
    gap: 10px;
`;

export const ListLink = styled.ul`
    list-style: none;
`;

export const Title = styled.p`
    margin: 20px 0;
    font-weight: 500;
`;

export const Links = styled(NavLink)`
    display: inline-block;
    padding: 4px 10px;
    margin-bottom: 10px;
    border-radius: 8px;
    color: black;
    text-decoration: none;
    text-align: center;
    width: 80px;
    border: 1px solid black;
`;