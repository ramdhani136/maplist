import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const BrowseImage = ({ width, data, onChange, clearImage }) => {
    const browseRef = useRef();

    useEffect(() => {
        if (clearImage) {
            browseRef.current.value = "";
        }
    }, [clearImage]);

    return (
        <WrapInput width={width}>
            <Label>{data.name}</Label>
            <Input
                onChange={onChange}
                // onChange={(e) => getValue(e.target.value)}
                type={data.type}
                placeholder={data.ph}
                name={data.nameInput}
                ref={browseRef}
                accept="image/*"
            />
        </WrapInput>
    );
};

export default BrowseImage;
const WrapInput = styled.div`
    width: ${({ width }) => (width ? width : "100%")};
    /* margin-bottom: 20px; */
`;

const Label = styled.div`
    font-size: 0.93em;
    color: #bbb;
    margin-bottom: 5px;
`;

const Input = styled.input`
    border-radius: 2px;
    width: 100%;
    height: 36px;
    font-size: 0.9em;
    color: #eee;
    ::-webkit-input-placeholder {
        color: #eee;
    }
`;
