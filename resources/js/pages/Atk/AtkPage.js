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
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
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
                    <Table>
                        <thead>
                            <Row>
                                <TitleColumn
                                    style={{ width: "10%", paddingLeft: "5%" }}
                                >
                                    No
                                </TitleColumn>
                                <TitleColumn style={{ width: "10%" }}>
                                    Code
                                </TitleColumn>
                                <TitleColumn style={{ width: "12%" }}>
                                    Status
                                </TitleColumn>
                                <TitleColumn style={{ width: "23%" }}>
                                    Name
                                </TitleColumn>
                                <TitleColumn style={{ width: "12%" }}>
                                    Qty
                                </TitleColumn>
                                <TitleColumn style={{ width: "10%" }}>
                                    Uom
                                </TitleColumn>
                            </Row>
                        </thead>
                        <tbody>
                            {" "}
                            <Row>
                                <Column style={{ paddingLeft: "5%" }}>1</Column>
                                <Column>ATK0001</Column>
                                <Column>
                                    <FiberManualRecordIcon
                                        style={{
                                            fontSize: "13px",
                                            marginTop: "-3px",
                                            marginRight: "5px",
                                            color: "#98D85B",
                                        }}
                                    />
                                    <a
                                        style={{
                                            color: "#707780",
                                            fontWeight: "600",
                                        }}
                                    >
                                        Approved
                                    </a>
                                </Column>
                                <Column
                                    style={{
                                        fontWeight: "600",
                                        color: "#36414C",
                                    }}
                                >
                                    Pulpen Standard Hitam
                                </Column>
                                <Column>123</Column>
                                <Column>Pcs</Column>
                            </Row>
                            <Row>
                                <Column style={{ paddingLeft: "5%" }}>2</Column>
                                <Column>ATK0002</Column>
                                <Column>
                                    <FiberManualRecordIcon
                                        style={{
                                            fontSize: "13px",
                                            marginTop: "-3px",
                                            marginRight: "5px",
                                            color: "#98D85B",
                                        }}
                                    />
                                    <a
                                        style={{
                                            color: "#707780",
                                            fontWeight: "600",
                                        }}
                                    >
                                        Approved
                                    </a>
                                </Column>
                                <Column
                                    style={{
                                        fontWeight: "600",
                                        color: "#36414C",
                                    }}
                                >
                                    Pulpen Standard Biru
                                </Column>
                                <Column>234</Column>
                                <Column>Pcs</Column>
                            </Row>
                            <Row>
                                <Column style={{ paddingLeft: "5%" }}>3</Column>
                                <Column>ATK0003</Column>
                                <Column>
                                    <FiberManualRecordIcon
                                        style={{
                                            fontSize: "13px",
                                            marginTop: "-3px",
                                            marginRight: "5px",
                                            color: "#98D85B",
                                        }}
                                    />
                                    <a
                                        style={{
                                            color: "#707780",
                                            fontWeight: "600",
                                        }}
                                    >
                                        Approved
                                    </a>
                                </Column>
                                <Column
                                    style={{
                                        fontWeight: "600",
                                        color: "#36414C",
                                    }}
                                >
                                    Pulpen Standard Merah
                                </Column>
                                <Column>1003</Column>
                                <Column>Pcs</Column>
                            </Row>
                            <Row>
                                <Column style={{ paddingLeft: "5%" }}>4</Column>
                                <Column>ATK0004</Column>
                                <Column>
                                    <FiberManualRecordIcon
                                        style={{
                                            fontSize: "13px",
                                            marginTop: "-3px",
                                            marginRight: "5px",
                                            color: "#98D85B",
                                        }}
                                    />
                                    <a
                                        style={{
                                            color: "#707780",
                                            fontWeight: "600",
                                        }}
                                    >
                                        Approved
                                    </a>
                                </Column>
                                <Column
                                    style={{
                                        fontWeight: "600",
                                        color: "#36414C",
                                    }}
                                >
                                    Pulpen Standard Hijau
                                </Column>
                                <Column>384</Column>
                                <Column>Pcs</Column>
                            </Row>
                            <Row>
                                <Column style={{ paddingLeft: "5%" }}>5</Column>
                                <Column>ATK0005</Column>
                                <Column>
                                    <FiberManualRecordIcon
                                        style={{
                                            fontSize: "13px",
                                            marginTop: "-3px",
                                            marginRight: "5px",
                                            color: "#98D85B",
                                        }}
                                    />
                                    <a
                                        style={{
                                            color: "#707780",
                                            fontWeight: "600",
                                        }}
                                    >
                                        Approved
                                    </a>
                                </Column>
                                <Column
                                    style={{
                                        fontWeight: "600",
                                        color: "#36414C",
                                    }}
                                >
                                    Kertas A4 Sidu
                                </Column>
                                <Column>913</Column>
                                <Column>Rim</Column>
                            </Row>
                            <Row>
                                <Column style={{ paddingLeft: "5%" }}>6</Column>
                                <Column>ATK0006</Column>
                                <Column>
                                    <FiberManualRecordIcon
                                        style={{
                                            fontSize: "13px",
                                            marginTop: "-3px",
                                            marginRight: "5px",
                                            color: "#98D85B",
                                        }}
                                    />
                                    <a
                                        style={{
                                            color: "#707780",
                                            fontWeight: "600",
                                        }}
                                    >
                                        Approved
                                    </a>
                                </Column>
                                <Column
                                    style={{
                                        fontWeight: "600",
                                        color: "#36414C",
                                    }}
                                >
                                    Kertas F4 Sidu
                                </Column>
                                <Column>29</Column>
                                <Column>Rim</Column>
                            </Row>
                            <Row>
                                <Column style={{ paddingLeft: "5%" }}>7</Column>
                                <Column>ATK0007</Column>
                                <Column>
                                    <FiberManualRecordIcon
                                        style={{
                                            fontSize: "13px",
                                            marginTop: "-3px",
                                            marginRight: "5px",
                                            color: "#98D85B",
                                        }}
                                    />
                                    <a
                                        style={{
                                            color: "#707780",
                                            fontWeight: "600",
                                        }}
                                    >
                                        Approved
                                    </a>
                                </Column>
                                <Column
                                    style={{
                                        fontWeight: "600",
                                        color: "#36414C",
                                    }}
                                >
                                    Staples 5R
                                </Column>
                                <Column>91</Column>
                                <Column>Pack</Column>
                            </Row>
                            <Row>
                                <Column style={{ paddingLeft: "5%" }}>8</Column>
                                <Column>ATK0008</Column>
                                <Column>
                                    <FiberManualRecordIcon
                                        style={{
                                            fontSize: "13px",
                                            marginTop: "-3px",
                                            marginRight: "5px",
                                            color: "#FF5858",
                                        }}
                                    />
                                    <a
                                        style={{
                                            color: "#707780",
                                            fontWeight: "600",
                                        }}
                                    >
                                        Disabled
                                    </a>
                                </Column>
                                <Column
                                    style={{
                                        fontWeight: "600",
                                        color: "#36414C",
                                    }}
                                >
                                    Map Gantung A4
                                </Column>
                                <Column>40</Column>
                                <Column>Lembar</Column>
                            </Row>
                            <Row>
                                <Column style={{ paddingLeft: "5%" }}>9</Column>
                                <Column>ATK0009</Column>
                                <Column>
                                    <FiberManualRecordIcon
                                        style={{
                                            fontSize: "13px",
                                            marginTop: "-3px",
                                            marginRight: "5px",
                                            color: "#98D85B",
                                        }}
                                    />
                                    <a
                                        style={{
                                            color: "#707780",
                                            fontWeight: "600",
                                        }}
                                    >
                                        Approved
                                    </a>
                                </Column>
                                <Column
                                    style={{
                                        fontWeight: "600",
                                        color: "#36414C",
                                    }}
                                >
                                    Penghapus Karet
                                </Column>
                                <Column>38</Column>
                                <Column>Pcs</Column>
                            </Row>
                        </tbody>
                    </Table>
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
    height: auto;
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

const Table = styled.table`
    width: 100%;
`;

const Row = styled.tr`
    border-bottom: solid 1px #e5e9eb;
    color: #aaa;
    font-size: 0.93em;
    cursor: pointer;
    background-color: #fff;
    :hover {
        background-color: #f7fafc;
    }
`;

const TitleColumn = styled.th`
    height: 45px;
    font-size: 0.96em;
    color: #888;
    font-weight: normal;
    background-color: #fbfcfe;
`;

const Column = styled.td`
    height: 45px;
`;
