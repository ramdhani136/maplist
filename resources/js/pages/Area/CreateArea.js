import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { FieldInput } from "../../components/Atoms";
import Swal from "sweetalert2";
import axios from "axios";
import { Api_Url } from "../../config";

const CreateArea = ({ setFormArea, setIsInsertArea, data, setDataArea }) => {
    const defaultValue = { name: "", status: "Y" };
    const [value, setValue] = useState(defaultValue);
    const [input, setInput] = useState("");

    const handleInput = (e) => {
        setInput(e);
        setValue({ ...value, name: e });
    };

    const valid = () => {
        if (input) {
            return false;
        } else {
            return true;
        }
    };

    const onSubmit = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success ml-2",
                cancelButton: "btn btn-danger",
                customClass: {
                    container: "my-swal",
                },
            },
            buttonsStyling: false,
        });

        swalWithBootstrapButtons
            .fire({
                title: "Kamu yakin?",
                text: "Ingin menambahkan area ini!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Iya, Yakin!",
                cancelButtonText: "Nggak jadi!",
                reverseButtons: true,
            })
            .then((result) => {
                if (result.isConfirmed) {
                    axios
                        .post(`${Api_Url}area`, value)
                        .then((res) => {
                            setIsInsertArea(true);
                            setValue({ name: "", status: "Y" });
                            setFormArea(false);
                            swalWithBootstrapButtons.fire(
                                "Sukses!",
                                "Data area berhasil di tambahkan.",
                                "success"
                            );
                        })
                        .catch((err) => {
                            swalWithBootstrapButtons.fire(
                                "Error!",
                                "gagal manambahkan data.",
                                "error"
                            );
                        });
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        "Cancel",
                        "Batal menambahkan data  :)",
                        "error"
                    );
                }
            });
    };

    const onUpdate = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success ml-2",
                cancelButton: "btn btn-danger",
                customClass: {
                    container: "my-swal",
                },
            },
            buttonsStyling: false,
        });

        swalWithBootstrapButtons
            .fire({
                title: "Kamu yakin?",
                text: "Ingin merubah data ini!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Iya, Yakin!",
                cancelButtonText: "Nggak jadi!",
                reverseButtons: true,
            })
            .then((result) => {
                if (result.isConfirmed) {
                    axios
                        .put(`${Api_Url}area/${value.id}`, {
                            name: value.name,
                            status: value.status,
                        })
                        .then((res) => {
                            setIsInsertArea(true);
                            setValue({ name: "", status: "Y" });
                            setFormArea(false);
                            setDataArea({});
                            swalWithBootstrapButtons.fire(
                                "Sukses!",
                                "Data area berhasil di perbarui.",
                                "success"
                            );
                        })
                        .catch((err) => {
                            swalWithBootstrapButtons.fire(
                                "Error!",
                                "Gagal merubah data.",
                                "error"
                            );
                        });
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        "Cancel",
                        "Batal merubah data  :)",
                        "error"
                    );
                }
            });
    };

    useEffect(() => {
        if (data) {
            setValue(data);
            setInput(data.name);
        } else {
            setValue(defaultValue);
            setInput("");
        }
    }, [data]);

    return (
        <>
            <Main>
                <Wrapper
                    onClick={() => {
                        setFormArea(false);
                        setValue(defaultValue);
                        setDataArea({});
                    }}
                ></Wrapper>
                <Form>
                    <Title>
                        <a style={{ color: "#666", fontWeight: "bold" }}>
                            Form Area
                        </a>
                        <CloseIcon
                            onClick={() => {
                                setFormArea(false);
                                setValue(defaultValue);
                                setDataArea({});
                            }}
                            style={{
                                paddingRight: "10px",
                                fontSize: "30px",
                                cursor: "pointer",
                            }}
                        />
                    </Title>
                    <Content>
                        <FieldInput
                            getValue={handleInput}
                            data={{
                                name: "Nama",
                                type: "text",
                                ph: "Cth : Bogor Barat ",
                                valid: valid(),
                                nameInput: "name",
                                value: value.name,
                            }}
                            width="100%"
                        />
                        <SelectInput
                            onChange={(e) =>
                                setValue({ ...value, status: e.target.value })
                            }
                            name="status"
                            value={value.status}
                        >
                            <option value="Y">Aktif</option>
                            <option value="N">Disabled</option>
                        </SelectInput>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "right",
                            }}
                        >
                            <Button
                                style={{ opacity: value.name ? "1" : "0.7" }}
                                onClick={
                                    value.name
                                        ? data.id
                                            ? onUpdate
                                            : onSubmit
                                        : null
                                }
                            >
                                Simpan
                            </Button>
                        </div>
                    </Content>
                </Form>
            </Main>
        </>
    );
};

export default CreateArea;

const Main = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1022;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.7;
`;

const Form = styled.div`
    width: 35%;
    height: auto;
    background-color: white;
    border-radius: 2px;
    position: absolute;
    border: solid 1px black;
    top: 10px;
    /* top: -240px; */
    left: 32.5%;
    padding-bottom: 10px;
`;

const Title = styled.div`
    width: 100%;
    height: 40px;
    border-bottom: solid 1px whitesmoke;
    display: flex;
    align-items: center;
    color: #bbb;
    font-size: 0.9em;
    padding-left: 20px;
    justify-content: space-between;
`;

const Content = styled.div`
    width: 90%;
    height: auto;
    margin-top: 5px;
    margin-left: 5%;
    margin-right: 5%;
`;

const Button = styled.div`
    width: 80px;
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
    text-align: center;

    :hover {
        transform: scale(1.03);
        opacity: 0.9;
    }
`;

const SelectInput = styled.select`
    border: solid 1px #ddd;
    width: 100%;
    margin-bottom: 20px;
    padding: 6px;
    font-size: 0.9em;
`;
