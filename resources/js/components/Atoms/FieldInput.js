import React from "react";
import styled from "styled-components";

const FieldInput = ({ width, data }) => {
    return (
        <WrapInput width={width}>
            <Label>{data.name}</Label>
            <Input type={data.type} placeholder={data.ph} />
        </WrapInput>
    );
};

export default FieldInput;

const WrapInput = styled.div`
    width: ${({ width }) => (width ? width : "100%")};
    margin-bottom: 20px;
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
    padding-left: 2%;
    padding-right: 2%;
    font-size: 0.9em;
    ::-webkit-input-placeholder {
        color: #eee;
    }
`;
