import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 0 auto;
    padding: 0;

`;

export const Item = styled.li`
    position: relative;
`;

export const Profile = styled.img`
    width: 280px;
    height: 320px;
    border-radius: 12px;
    object-fit: cover;
`;