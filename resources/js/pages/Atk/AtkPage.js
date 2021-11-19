import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { HeaderMain } from "../../components/Organisms";

const AtkView = () => {
    return (
        <Wrapper>
            <FilterMain>d</FilterMain>
            <Content>d</Content>
        </Wrapper>
    );
};

const AtkPage = () => {
    return (
        <>
            <Helmet>
                <title>ATK List - Ekatunggal Tunas Mandiri</title>
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
    border-right: solid 1px #eee;
    width: 23%;
    height: 100vh;
    position: sticky;
    background-color: white;
    left: 0;
    top: 50px;
`;

const Content = styled.div`
    width: 77%;
    background-color: white;
    height: 1000px;
`;
