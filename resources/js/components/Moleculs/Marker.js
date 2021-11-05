import React from "react";
import styled from "styled-components";

const Marker = ({ text, select }) => {
    return <MainMarker select={select}>{text}</MainMarker>;
};

export default Marker;

const MainMarker = styled.div`
    border: solid 1.5px black;
    width: 100px;
    text-align: center;
    font-weight: bold;
    padding: 5px;
    border-radius: 3px;
    font-size: 10px;
    background-color: ${({ select }) => (select ? "#ffff99" : "#e5e5ff")};
`;
