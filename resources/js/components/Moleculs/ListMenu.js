import React from "react";
import styled from "styled-components";

const ListMenu = ({
    nama,
    Icon,
    setIsActive,
    setPopup,
    setDataPopUp,
    page,
}) => {
    return (
        <>
            <ListMenuWrapper
                onClick={() => {
                    setPopup(true);
                    setIsActive(false);
                    setDataPopUp({ title: nama, page: page });
                }}
            >
                <Icon
                    style={{
                        fontSize: "17px",
                        color: "#aaa",
                        marginRight: "10px",
                    }}
                />
                <a>{nama}</a>
            </ListMenuWrapper>
        </>
    );
};

export default ListMenu;

const ListMenuWrapper = styled.div`
    border-bottom: solid 1px #ddd;
    padding: 13px;
    font-size: 0.9em;
    cursor: pointer;
    align-items: center;
    display: flex;
    /* justify-content: space-between; */
    transition: transform 0.1s;
    :hover {
        transform: scale(1.035);
    }
    @media screen and (max-width: 720px) {
        padding: 20px;
        font-size: 1em;
    }
`;
