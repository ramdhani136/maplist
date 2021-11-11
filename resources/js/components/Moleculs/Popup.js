import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { AreaPage, CreateLocation } from "../../pages/";

const Popup = ({ isActive, popupDisabled, dataPopup }) => {
    const [btnAktif, setbtnAktif] = useState(false);
    const [btnClick, setBtnClick] = useState(false);
    const [reset, setReset] = useState(false);
    const [isAction, setIsAction] = useState("");
    const [btnUpdate, setBtnUpdate] = useState(false);

    return (
        <Main isActive={isActive}>
            <Wrapper
                onClick={() => {
                    popupDisabled();
                    setReset(true);
                }}
            ></Wrapper>
            <Content>
                <TitleHeader>
                    {dataPopup.title}
                    <div style={{ display: "flex" }}>
                        {dataPopup.page === "CreateLocation" &&
                        btnAktif &&
                        dataPopup.action === "create" ? (
                            <Button
                                onClick={() => {
                                    setBtnClick(true);
                                    setIsAction("post");
                                }}
                            >
                                Simpan
                            </Button>
                        ) : null}

                        {dataPopup.page === "CreateLocation" &&
                        btnAktif &&
                        dataPopup.action === "update" &&
                        btnUpdate ? (
                            <Button
                                onClick={() => {
                                    setBtnClick(true);
                                    setIsAction("put");
                                }}
                            >
                                Simpan
                            </Button>
                        ) : null}

                        {dataPopup.page === "CreateLocation" &&
                        dataPopup.action === "update" ? (
                            <ButtonDel
                                onClick={() => {
                                    setBtnClick(true);
                                    setIsAction("delete");
                                }}
                            >
                                Hapus
                            </ButtonDel>
                        ) : null}
                        <CloseIcon
                            onClick={() => {
                                popupDisabled();
                                setReset(true);
                            }}
                            style={{ cursor: "pointer", fontSize: "25px" }}
                        />
                    </div>
                </TitleHeader>
                <IsContent>
                    {dataPopup.page === "CreateLocation" && (
                        <CreateLocation
                            data={dataPopup.data}
                            btnClick={btnClick}
                            setBtnClick={setBtnClick}
                            setbtnAktif={setbtnAktif}
                            popupDisabled={popupDisabled}
                            reset={reset}
                            setReset={setReset}
                            isAction={isAction}
                            setBtnUpdate={setBtnUpdate}
                        />
                    )}
                    {dataPopup.page === "AreaPage" && <AreaPage />}
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

const Button = styled.div`
    border: solid 1px #28a658;
    margin-right: 5px;
    padding: 5px;
    border-radius: 2px;
    cursor: pointer;
    font-size: 0.9em;
    padding-left: 9px;
    padding-right: 9px;
    background-color: #2db962;
    color: white;

    :hover {
        transform: scale(1.03);
        opacity: 0.9;
    }
    transform: ${({ select }) => (select ? "scale(1.05)" : "none")};
`;

const ButtonDel = styled.div`
    border: solid 1px #bd2e3f;
    margin-right: 20px;
    padding: 5px;
    border-radius: 2px;
    cursor: pointer;
    font-size: 0.9em;
    padding-left: 9px;
    padding-right: 9px;
    background-color: #d33446;
    color: white;

    :hover {
        transform: scale(1.03);
        opacity: 0.9;
    }
    transform: ${({ select }) => (select ? "scale(1.05)" : "none")};
`;
