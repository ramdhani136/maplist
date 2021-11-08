import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { CreateLocation } from "../../pages/";

const Popup = ({ isActive, popupDisabled, dataPopup }) => {
    return (
        <Main isActive={isActive}>
            <Wrapper onClick={popupDisabled}></Wrapper>
            <Content>
                <TitleHeader>
                    {dataPopup.title}
                    <CloseIcon
                        onClick={popupDisabled}
                        style={{ cursor: "pointer", fontSize: "25px" }}
                    />
                </TitleHeader>
                <IsContent>
                    {dataPopup.page === "CreateLocation" && <CreateLocation />}
                </IsContent>
            </Content>
        </Main>
    );
};

export default Popup;

const Main = styled.div`
    position: relative;
    display: ${({ isActive }) => (isActive ? "block" : "none")};
    transition: all 2s ease-in;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;
    opacity: 0.7;
    position: fixed;
    z-index: 3000;
`;

const Content = styled.div`
    width: 70%;
    height: 97vh;
    background-color: white;
    position: absolute;
    z-index: 4000;
    left: 15%;
    top: 5px;
    border: solid 1px #535353;
    position: fixed;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 720px) {
        width: 95%;
        left: 2.5%;
    }
`;

const TitleHeader = styled.div`
    width: 100%;
    height: 50px;
    font-weight: bold;
    border-bottom: solid 1px whitesmoke;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 3%;
    padding-right: 3%;
    font-size: 1em;
`;

const IsContent = styled.div`
    overflow-y: scroll;
    flex: 1;
`;
