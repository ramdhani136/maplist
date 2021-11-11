import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

const SelectList = ({ data, width, onClick, getValue, saveValue }) => {
    return (
        <WrapInput width={width}>
            <Label>{data.name}</Label>
            <div
                onMouseLeave={() => {
                    data.setSelectAktif(false);
                    data.setValue(saveValue);
                }}
            >
                <Input
                    onChange={(e) => data.setValue(e.target.value)}
                    value={data.value}
                    data={data}
                    onClick={() => {
                        onClick();
                        data.setSelectAktif(true);
                    }}
                    onMouseEnter={() => {
                        onClick();
                        data.setSelectAktif(true);
                    }}
                    type={data.type}
                    placeholder={data.ph}
                    name={data.nameInput}
                />
                <CloseIcon
                    onClick={() => data.setValue("")}
                    style={{
                        position: "absolute",
                        marginLeft: "-30px",
                        marginTop: "8px",
                        fontSize: "20px",
                        color: "#ddd",
                    }}
                />
                {data.aktif && (
                    <Ulist>
                        {data.data &&
                            data.data.map((list) => {
                                return (
                                    <IsList
                                        onClick={() => {
                                            getValue(list);
                                            data.setSelectAktif(false);
                                        }}
                                        key={list.id}
                                    >
                                        {list.name}
                                    </IsList>
                                );
                            })}

                        <IsList
                            style={{ color: "#ddd" }}
                            onClick={() => {
                                getValue(list);
                                data.setSelectAktif(false);
                            }}
                        >
                            <AddIcon
                                style={{
                                    fontSize: "15px",
                                    color: "#ddd",
                                    marginTop: "-2px",
                                }}
                            />
                            Tambah {data.name}
                        </IsList>
                    </Ulist>
                )}
            </div>
        </WrapInput>
    );
};

export default SelectList;
const WrapInput = styled.div`
    width: ${({ width }) => (width ? width : "100%")};
    margin-bottom: 20px;
    cursor: pointer;
    height: auto;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const Label = styled.div`
    font-size: 0.93em;
    color: #bbb;
    margin-bottom: 5px;
`;

const Input = styled.input`
    width: 100%;
    height: 36px;
    border: ${({ data }) => (data.valid ? "solid 1px red" : " solid 1px #ddd")};
    padding-left: 3%;
    padding-right: 3%;
    font-size: 0.9em;
    background-color: white;
    border-radius: 2px;
    ::-webkit-input-placeholder {
        color: #eee;
    }
`;

const Ulist = styled.div`
    width: 100%;
    border: solid 1px #ccc;
    max-height: 260px;
    /* position: absolute; */
    background-color: white;
    overflow-y: scroll;
    float: left;
`;

const IsList = styled.ul`
    width: 107%;
    /* border-bottom: solid 1px whitesmoke; */
    padding-top: 14px;
    padding-bottom: 14px;
    margin-bottom: 0px;
    font-size: 0.9em;
    margin-left: -7%;
    color: #232323;
    :hover {
        background-color: #fafafa;
        border-top: solid 1px whitesmoke;
        border-bottom: solid 1px whitesmoke;
    }
`;
