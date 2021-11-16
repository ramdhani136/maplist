import React, { useState } from "react";
import styled from "styled-components";
import { BASE_URL } from "../../config";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import RoomIcon from "@mui/icons-material/Room";
import Swal from "sweetalert2";

const Customerlist = ({
    data,
    selectData,
    toggleMenu,
    select,
    setPopup,
    page,
    setDataPopUp,
    nama,
    action,
}) => {
    const handleClick = () => {
        selectData(data);
        toggleMenu();
    };

    const onCopy = () => {
        navigator.clipboard.writeText(
            `https://maps.google.com/maps?q=${data.lat}%2C${data.lng}&z=17&hl=id`
        );
        Swal.fire(
            "Copied!",
            "Url maps di copy , klik paste untuk memindahkan!",
            "success"
        );
    };

    const getCordinate = () => {
        navigator.clipboard.writeText(`${data.lat},${data.lng}`);
        Swal.fire(
            "Copied!",
            "Kordinat berhasil di copy , klik paste untuk memindahkan!",
            "success"
        );
    };

    return (
        <>
            <CLWrapper select={select}>
                <div>
                    {data.uri ? (
                        <Img
                            onClick={handleClick}
                            select={select}
                            src={`${BASE_URL}storage/images/${data.uri}`}
                        />
                    ) : (
                        <Img
                            onClick={handleClick}
                            select={select}
                            src={`${BASE_URL}storage/images/noimage.png`}
                        />
                    )}
                    <Area
                        onClick={() => {
                            setPopup(true);
                            setDataPopUp({
                                title: nama,
                                page: page,
                                data: data,
                                action: action,
                            });
                            toggleMenu();
                        }}
                        select={select}
                    >
                        <a>{data.name}</a> -{" "}
                        <a style={{ color: "#ffc107" }}>{data.area}</a>
                    </Area>
                </div>
                {/* <Title>{data.name}</Title> */}
                <HoverAksi onClick={() => onCopy()}>
                    <InsertLinkIcon
                        style={{
                            color: "gray",
                            cursor: "pointer",
                            fontSize: "20px",
                        }}
                    />
                </HoverAksi>

                <CopyKord onClick={() => getCordinate()}>
                    <RoomIcon
                        style={{
                            color: "gray",
                            cursor: "pointer",
                            fontSize: "13px",
                            margin: "3px",
                        }}
                    />
                </CopyKord>
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
        transform: scale(1.06);
        opacity: 0.9;
    }
    transform: ${({ select }) => (select ? "scale(1.05)" : "none")};
    position: relative;
`;

const Img = styled.img`
    width: 100%;
    height: 155px;
    object-fit: cover;
    border: ${({ select }) => (select ? "solid 1.5px #ffff99" : "none")};
    border-bottom: none;
    @media screen and (max-width: 720px) {
        height: 120px;
    }
`;

// const Title = styled.div`
//     width: 100%;
//     height: auto;
//     margin-top: 5px;
//     font-weight: bold;
//     font-size: 0.9em;
// `;

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
    border: ${({ select }) => (select ? "solid 1.5px #ffff99" : "none")};
    border-top: none;
    font-size: 0.85em;
`;

const HoverAksi = styled.div`
    position: absolute;
    width: 23px;
    height: 23px;
    top: 0;
    right: 0;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    color: "#ffc107";
    font-size: 0.9em;
    padding-left: 5%;
    padding-right: 5%;
    opacity: 0.75;
`;

const CopyKord = styled.div`
    position: absolute;
    width: 23px;
    height: 23px;
    top: 0;
    right: 23px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    color: "#ffc107";
    font-size: 0.9em;
    padding-left: 5%;
    padding-right: 5%;
    opacity: 0.75;
`;
