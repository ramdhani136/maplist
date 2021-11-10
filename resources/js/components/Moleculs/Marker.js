import React from "react";
import styled from "styled-components";

const Marker = ({ text, select }) => {
    return <MainMarker select={select}>{text}</MainMarker>;
};

export default Marker;

const MainMarker = styled.div`
    border: solid 1px #1f1f1f;
    width: 100px;
    text-align: center;
    font-weight: bold;
    padding: 5px;
    border-radius: 2px;
    font-size: 10px;
    background-color: ${({ select }) => (select ? "#232323" : "whitesmoke")};
    color: ${({ select }) => (select ? "white" : "black")};
`;
