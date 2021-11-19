import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { HeaderMain } from "../../components/Organisms";

const AtkView = () => {
    return (
        <Wrapper>
            <FilterMain></FilterMain>
            <Content>
                <Header></Header>
            </Content>
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
    border-right: solid 1px #e0e2e4;
    width: 23.4%;
    height: 100vh;
    position: sticky;
    background-color: white;
    left: 0;
    top: 55px;
`;

const Content = styled.div`
    width: 66%;
    background-color: white;
    height: 1000px;
    border-right: solid 1px #e0e2e4;
`;

const Header = styled.div`
    width: 100%;
    height: 50px;
    background-color: #f5f7fa;
    border-bottom: solid 1px #e0e2e4;
`;
