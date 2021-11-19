import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home - Ekatunggal Tunas Mandiri</title>
            </Helmet>
            <Wrapper>Home</Wrapper>
        </>
    );
};

export default Home;

const Wrapper = styled.div``;
