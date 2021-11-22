import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import Avatar from "@mui/material/Avatar";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slices/UserSlice";
import { useNavigate } from "react-router";

const HeaderMain = ({ View }) => {
    const [isSearch, setIsSearch] = useState(false);
    const [activeSlide, setActiveSlide] = useState({
        ms: false,
        bel: false,
        sett: false,
    });
    const [value, setValue] = useState("");

    const user = useSelector(selectUser);
    const navigate = useNavigate();

    return (
        <>
            <Header>
                <Logo>
                    <a>EtmSystem</a>
                </Logo>
                <MainCenter>
                    <Search
                        onClick={() => setIsSearch(true)}
                        onMouseLeave={() => setIsSearch(false)}
                    >
                        <InputSearch
                            onChange={(e) => setValue(e.target.value)}
                            value={value}
                            placeholder="Search your menu"
                        />
                        <SearchIcon
                            style={{
                                marginRight: "5px",
                                fontSize: "23px",
                                color: "#bbb",
                            }}
                        />
                        {isSearch && (
                            <WrapperList>
                                <ListSearch
                                    onClick={() => {
                                        navigate("/maplist");
                                        setIsSearch(false);
                                        setValue("");
                                    }}
                                >
                                    Mapping Customer List
                                </ListSearch>
                                <ListSearch
                                    onClick={() => {
                                        navigate("/stationary");
                                        setIsSearch(false);
                                        setValue("");
                                    }}
                                >
                                    Stationary List
                                </ListSearch>
                            </WrapperList>
                        )}
                    </Search>
                </MainCenter>
                <Menu>
                    <Badge
                        invisible={true}
                        variant="dot"
                        color="primary"
                        style={{
                            cursor: "pointer",
                        }}
                    >
                        <TextsmsOutlinedIcon
                            color="action"
                            style={{
                                fontSize: "18px",
                                marginRight: "3px",
                            }}
                        />
                    </Badge>
                    <Badge
                        style={{ marginLeft: "20px", cursor: "pointer" }}
                        invisible={false}
                        variant="dot"
                        color="primary"
                    >
                        <NotificationsNoneIcon
                            color="action"
                            style={{
                                fontSize: "18px",
                                marginRight: "-3px",
                            }}
                        />
                    </Badge>

                    <Avatar
                        src=""
                        style={{
                            marginLeft: "70px",
                            cursor: "pointer",
                        }}
                        sx={{ width: 37, height: 37 }}
                    >
                        IR
                    </Avatar>
                    <a
                        style={{
                            cursor: "pointer",
                            marginLeft: "10px",
                            color: "#666",
                            fontSize: "0.9em",
                            fontWeight: "300",
                        }}
                    >
                        Hi, Ilham
                    </a>
                    {!activeSlide.sett && (
                        <ArrowDropDownOutlinedIcon
                            onClick={() =>
                                setActiveSlide({
                                    ms: false,
                                    bel: false,
                                    sett: !activeSlide.sett,
                                })
                            }
                            style={{ color: "gray", cursor: "pointer" }}
                        />
                    )}
                    {activeSlide.sett && (
                        <ArrowDropUpOutlinedIcon
                            onClick={() =>
                                setActiveSlide({
                                    ms: false,
                                    bel: false,
                                    sett: !activeSlide.sett,
                                })
                            }
                            style={{ color: "gray", cursor: "pointer" }}
                        />
                    )}
                    <SlideSetting
                        active={activeSlide.sett}
                        onMouseLeave={() =>
                            setActiveSlide({
                                ms: false,
                                bel: false,
                                sett: false,
                            })
                        }
                    >
                        <ListSetting>Profile</ListSetting>
                        <ListSetting>Sign Out</ListSetting>
                    </SlideSetting>
                </Menu>
            </Header>
            {/* <SlideMenu></SlideMenu> */}
            <Content>
                <View />
            </Content>
        </>
    );
};

export default HeaderMain;

const Header = styled.div`
    width: 100%;
    height: 55px;
    background-color: #fff;
    border: solid 1px #e0e2e4;
    display: flex;
    padding-left: 8%;
    padding-right: 8%;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 1000;
`;

const Logo = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@1,900&display=swap");
    flex: 0.8;
    font-weight: 700;
    font-size: 22px;
    font-family: "Bodoni Moda", serif;
    color: #3c4d7c;
`;

const MainCenter = styled.div`
    flex: 1.2;
    display: flex;
    justify-content: left;
`;

const Menu = styled.div`
    flex: 1;
    display: flex;
    justify-content: end;
    align-items: center;
    position: relative;
    z-index: 999;
    background-color: white;
`;

const SlideSetting = styled.div`
    width: 60%;
    height: auto;
    border: solid 1px #eee;
    border-top: none;
    position: absolute;
    top: 46px;
    background-color: white;
    z-index: 900;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    display: ${({ active }) => (active ? "block" : "none")};
`;

const ListSetting = styled.div`
    width: 100%;
    padding: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 0.87em;
    color: #888;

    :hover {
        /* background-color: #f5f7fa; */
        cursor: pointer;
        color: #000;
    }
`;

const Search = styled.div`
    border: solid 1px #ccc;
    height: 38px;
    width: 91%;
    border-radius: 2px;
    background-color: white;
    align-items: center;
    position: relative;
    z-index: 100;
`;

const WrapperList = styled.div`
    margin-top: 4px;
    border: solid 1px #ddd;
    background-color: white;
    width: 100%;
    height: auto;
    max-height: 300px;
    position: "absolute";
    z-index: 99;
    overflow-y: scroll;
    padding-top: 0.5px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
`;

const ListSearch = styled.div`
    padding: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 0.85em;
    color: black;

    :hover {
        background-color: #fffdfa;
        cursor: pointer;
        border-top: solid 1px #fffbf0;
        border-bottom: solid 1px #fffbf0;
    }
`;

const InputSearch = styled.input`
    flex: 1;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 0.9em;
    border: none;
    width: 92%;
    height: 90%;
    @import url("https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@1,900&family=Lato:ital,wght@1,300&display=swap");
    font-family: "Bodoni Moda", serif;
    font-family: "Lato", sans-serif;
    ::-webkit-input-placeholder {
        color: #ddd;
    }
    :focus {
        outline: none;
    }
`;

const SlideMenu = styled.div`
    width: 22%;
    height: 100%;
    border-right: solid 1px #e0e2e4;
    position: fixed;
    background-color: white;
    z-index: 1001;
`;

const Content = styled.div`
    margin-top: 55px;
    width: 100%;
    height: 1000px;
`;
