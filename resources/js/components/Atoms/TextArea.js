import React from "react";
import styled from "styled-components";

const TextArea = ({ width, data }) => {
    return (
        <WrapInput width={width}>
            <Label>{data.name}</Label>
            <Textarea placeholder={data.ph} />
        </WrapInput>
    );
};

export default TextArea;

const WrapInput = styled.div`
    width: ${({ width }) => (width ? width : "100%")};
    margin-bottom: 20px;
`;

const Label = styled.div`
    font-size: 0.93em;
    color: #bbb;
    margin-bottom: 5px;
`;

const Textarea = styled.textarea`
    width: 100%;
    height: 80px;
    border: solid 1px #ddd;
    padding: 3%;
    font-size: 0.9em;
    border-radius: 2px;
    ::-webkit-input-placeholder {
        color: #eee;
    }
`;
