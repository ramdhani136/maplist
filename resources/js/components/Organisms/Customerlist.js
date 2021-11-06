import React, { useState } from "react";
import styled from "styled-components";

const Customerlist = ({ data, selectData, toggleMenu, select }) => {
    const handleClick = () => {
        selectData(data);
        toggleMenu();
    };

    return (
        <>
            <CLWrapper onClick={handleClick}>
                <div>
                    <Img select={select} src={data.fotoUrl} />
                    <Area select={select}>{data.harga}</Area>
                </div>
                <Title>{data.nama}</Title>
            </CLWrapper>
        </>
    );
};

export default Customerlist;

const CLWrapper = styled.div`
    width: 47%;
    height: auto;
    margin: 1.5%;
    cursor: pointer;
    transition: transform 0.1s;
    :hover {
        transform: scale(1.04);
        opacity: 0.9;
    }
`;

const Img = styled.img`
    width: 100%;
    height: 155px;
    object-fit: cover;
    border: ${({ select }) => (select ? "solid 1.5px #232323" : "none")};
    border-bottom: none;
    @media screen and (max-width: 720px) {
        height: 120px;
    }
`;

const Title = styled.div`
    width: 100%;
    height: auto;
    margin-top: 5px;
    font-weight: bold;
    font-size: 0.9em;
`;

const Area = styled.div`
    width: auto;
    height: auto;
    border: solid 1px #ccc;
    position: relative;
    background-color: white;
    padding: 5px;
    color: black;
    font-weight: bold;
    font-size: 13px;
    text-align: center;
    border: ${({ select }) => (select ? "solid 1.5px #232323" : "none")};
    border-top: none;
`;
