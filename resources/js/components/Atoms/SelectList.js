import React from "react";
import styled from "styled-components";

const SelectList = ({ data, width, onClick }) => {
    return (
        <WrapInput width={width}>
            <Label>{data.name}</Label>
            <div
                style={{
                    width: "100%",
                    position: "relative",
                }}
            >
                <Input
                    onClick={() => {
                        onClick();
                        data.setSelectAktif(true);
                    }}
                    type={data.type}
                    placeholder={data.ph}
                    name={data.nameInput}
                />
                {data.aktif && (
                    <Ulist>
                        {data.data &&
                            data.data.map((list) => {
                                return (
                                    <IsList key={list.id}>{list.name}</IsList>
                                );
                            })}
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
`;

const Label = styled.div`
    font-size: 0.93em;
    color: #bbb;
    margin-bottom: 5px;
`;

const Input = styled.input`
    width: 100%;
    height: 40px;
    border: solid 1px #ddd;
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
    max-height: 290px;
    position: absolute;
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
`;
