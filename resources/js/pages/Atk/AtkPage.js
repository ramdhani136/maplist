import React, { useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { HeaderMain } from "../../components/Organisms";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
// import SaveIcon from "@mui/icons-material/Save";
// import PrintIcon from "@mui/icons-material/Print";
// import ShareIcon from "@mui/icons-material/Share";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Link } from "react-router-dom";

const AtkView = () => {
    const actions = [
        { icon: <NoteAddOutlinedIcon />, name: "New" },
        { icon: <FileCopyIcon />, name: "Duplicate" },
        { icon: <DeleteOutlineOutlinedIcon />, name: "Delete" },
    ];
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <UpHeader>
                <TitleMenu>
                    <TitleLeft>
                        {" "}
                        <Link style={{ color: "#aaa" }} to="/atk">
                            General Affair
                        </Link>{" "}
                        {">"}{" "}
                        <Link style={{ color: "#aaa" }} to="/atk/list">
                            Stationary
                        </Link>
                    </TitleLeft>
                    <TitleRight>
                        <Button>New</Button>
                    </TitleRight>
                </TitleMenu>
            </UpHeader>
            <Wrapper>
                <FilterMain></FilterMain>
                <Content>
                    <Header>
                        <Input placeholder="Code" />
                        <Input placeholder="Item Name" />
                        <Input placeholder="Uom" />
                        <Input placeholder="Status" />
                    </Header>
                </Content>

                <SpeedDial
                    ariaLabel="SpeedDial uncontrolled open example"
                    sx={{ position: "fixed", bottom: 20, right: 35 }}
                    icon={<SpeedDialIcon />}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    open={open}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={handleClose}
                        />
                    ))}
                </SpeedDial>
            </Wrapper>
        </>
    );
};

const AtkPage = () => {
    return (
        <>
            <Helmet>
                <title>Stationary - Ekatunggal Tunas Mandiri</title>
            </Helmet>
            <HeaderMain View={AtkView} />
        </>
    );
};

export default AtkPage;

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
`;

const FilterMain = styled.div`
    border-right: solid 1px #e0e2e4;
    width: 23.4%;
    height: 100vh;
    position: sticky;
    background-color: white;
    left: 0;
    top: 55px;
`;

const Content = styled.div`
    width: 67.7%;
    background-color: white;
    height: 1000px;
    border-right: solid 1px #e0e2e4;
`;

const Header = styled.div`
    width: 100%;
    height: 57px;
    display: flex;
    background-color: #f5f7fa;
    border-bottom: solid 1px #e0e2e4;
    align-items: center;
    padding-left: 2%;
    position: sticky;

    top: 55px;
`;

const Input = styled.input`
    border: solid 1px #ccc;
    border-radius: 3px;
    padding: 7px;
    font-size: 0.86em;
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 10px;
    color: gray;
    ::placeholder {
        color: #ddd;
    }
    :focus {
        outline: none;
    }
`;

const UpHeader = styled.div`
    width: 100%;
    height: 70px;
    border-bottom: solid 1px #e0e2e4;
    display: flex;
    align-items: center;
    padding-left: 8%;
    padding-right: 8%;
`;

const TitleMenu = styled.div`
    flex: 1;
    font-size: 0.93em;
    color: #aaa;
    cursor: pointer;
    display: flex;
`;

const TitleLeft = styled.div`
    flex: 1;
`;
const TitleRight = styled.div`
    flex: 1;
    display: flex;
    justify-content: end;
`;

const Button = styled.div`
    border: solid 1px #ddd;
    padding: 5px 13px 5px 13px;
    border-radius: 3px;
    margin-right: 10px;
    background-color: #f5f7fa;
    color: gray;
    :hover {
        background-color: whitesmoke;
        transform: scale(1.035);
    }
    /* color: white; */
`;
