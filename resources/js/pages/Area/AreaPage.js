import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { Api_Url } from "../../config";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import _ from "lodash";
import Swal from "sweetalert2";

const AreaPage = ({ popupDisabled }) => {
    const [area, setArea] = useState([]);
    const [value, setValue] = useState("");

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

    const filterdata = (data) => {
        return _.filter(data, function (query) {
            var name = value
                ? query.name.toLowerCase().includes(value.toLowerCase())
                : true;

            return name;
        });
    };

    const onDelete = (id) => {
        popupDisabled(true);
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success ml-2 ",
                cancelButton: "btn btn-danger",
            },
            buttonsStyling: false,
        });

        swalWithBootstrapButtons
            .fire({
                title: "Kamu yakin?",
                text: "Ingin menghapus area ini!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Iya, yakin deh!",
                cancelButtonText: "Nggak, batalin!",
                reverseButtons: true,
            })
            .then((result) => {
                if (result.isConfirmed) {
                    axios
                        .delete(`${Api_Url}area/${id}`)
                        .then((res) => {
                            getArea();
                            swalWithBootstrapButtons.fire(
                                "Deleted!",
                                "Area berhasil di hapus.",
                                "success"
                            );
                        })
                        .catch((err) => {
                            console.error(err);
                            swalWithBootstrapButtons.fire(
                                "Error!",
                                "Gagal menghapus, area ini sudah di gunakan oleh data lokasi :)",
                                "error"
                            );
                        });
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        "Cancelled",
                        "Kamu batal menghapus area ini :)",
                        "error"
                    );
                }
            });
    };

    useEffect(() => {
        getArea();
    }, []);

    return (
        <Wrapper>
            <Panel>
                <div style={{ marginLeft: "5%" }}>
                    <InputSearch
                        placeholder="Pencarian"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <CloseIcon
                        onClick={() => setValue("")}
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
                            <th style={{ width: "15%", textAlign: "left" }}>
                                Status
                            </th>
                            <th style={{ width: "20%", textAlign: "center" }}>
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody style={{ width: "100%" }}>
                        {filterdata(area).map((item, nomor) => {
                            return (
                                <tr
                                    key={nomor}
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
                                    <td style={{ textAlign: "left" }}>
                                        <FiberManualRecordIcon
                                            style={{
                                                fontSize: "12px",
                                                marginTop: "-3px",
                                                marginRight: "5px",
                                                color:
                                                    item.status === "Y"
                                                        ? "#98d95b"
                                                        : "#f75c5d",
                                            }}
                                        />
                                        {item.status === "Y"
                                            ? "Aktif"
                                            : "Disabled"}
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        <DeleteForeverOutlinedIcon
                                            onClick={() => onDelete(item.id)}
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
                {filterdata(area).length < 1 && (
                    <div
                        style={{
                            width: "100%",
                            textAlign: "center",
                            marginTop: "130px",
                            color: "#ddd",
                            fontSize: "0.96em",
                        }}
                    >
                        Tidak ada data yang di temukan
                    </div>
                )}
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
