import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { Api_Url } from "../../config";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const AreaPage = () => {
    const [area, setArea] = useState([]);

    const getArea = () => {
        axios
            .get(`${Api_Url}area`)
            .then((res) => {
                setArea(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getArea();
    }, []);

    return (
        <Wrapper>
            <Panel>
                <div style={{ marginLeft: "5%" }}>
                    <InputSearch placeholder="Pencarian" />
                    <CloseIcon
                        style={{
                            fontSize: "20px",
                            color: "#ddd",
                            marginLeft: "-30px",
                            cursor: "pointer",
                        }}
                    />
                </div>
                <ButtonCreate>Tambah Area</ButtonCreate>
            </Panel>
            <UlList>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead
                        style={{
                            width: "100%",
                            position: "sticky",
                            top: "0px",
                            backgroundColor: "#f6fafd",
                            borderBottom: "solid 1px whitesmoke",
                            color: "#555",
                            fontSize: "0.93em",
                        }}
                    >
                        <tr
                            style={{
                                width: "100%",
                            }}
                        >
                            <th
                                style={{
                                    width: "15%",
                                    textAlign: "center",
                                    height: "45px",
                                    backgroundClip: "padding-box",
                                }}
                            >
                                No
                            </th>
                            <th style={{ width: "50%", textAlign: "left" }}>
                                Nama
                            </th>
                            <th style={{ width: "15%", textAlign: "center" }}>
                                Status
                            </th>
                            <th style={{ width: "20%", textAlign: "center" }}>
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody style={{ width: "100%" }}>
                        {area.map((item, nomor) => {
                            return (
                                <tr
                                    style={{
                                        width: "100%",
                                        borderBottom: "solid 1px whitesmoke",
                                        fontSize: "0.91em",
                                        color: "#676767",
                                        cursor: "pointer",
                                    }}
                                >
                                    <td
                                        style={{
                                            textAlign: "center",
                                            height: "41px",
                                        }}
                                    >
                                        {nomor + 1}
                                    </td>
                                    <td style={{ textAlign: "left" }}>
                                        {item.name}
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        {item.status === "Y"
                                            ? "Aktif"
                                            : "Disabled"}
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        <DeleteForeverOutlinedIcon
                                            style={{
                                                color: "#dc3547",
                                                fontSize: "23",
                                            }}
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </UlList>
        </Wrapper>
    );
};

export default AreaPage;

const Wrapper = styled.div`
    width: 100%;
    height: auto;
`;

const Panel = styled.div`
    width: 100%;
    height: 50px;
    position: sticky;
    top: 0px;
    background-color: white;
    border-bottom: solid 1px whitesmoke;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const UlList = styled.div`
    width: 91%;
    height: 72vh;
    margin-left: 5%;
    margin-top: 10px;
    border: solid 1px whitesmoke;
    overflow-y: scroll;
`;

const InputSearch = styled.input`
    border: solid 1px #ddd;
    width: 380px;
    height: 38px;
    padding: 10px;
    font-size: 0.9em;
    border-radius: 2px;
    ::-webkit-input-placeholder {
        color: #eee;
    }
`;

const ButtonCreate = styled.div`
    border: solid 1px #28a658;
    margin-right: 40px;
    padding: 6px;
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
`;

const List = styled.div`
    width: 100%;
    height: 40px;
    border: solid 1px #ddd;
`;
