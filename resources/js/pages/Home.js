import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Customerlist } from "../components/Organisms";
import GoogleMapReact from "google-map-react";
import { ListMenu, Marker, Popup } from "../components/Moleculs";
import _ from "lodash";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LogoutIcon from "@mui/icons-material/Logout";
import LanguageIcon from "@mui/icons-material/Language";

function Home() {
    const [customerList, setCustomerList] = useState([]);
    const [center, setCenter] = useState({ lat: -7.797068, lng: 110.371754 });
    const [select, setSelect] = useState({});
    const [value, setValue] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [popup, setPopup] = useState(false);
    const [dataPopup, setDataPopUp] = useState({});

    useEffect(() => {
        fetch(
            "https://raw.githubusercontent.com/algosigma/js-reactjs/master/homestays.json"
        )
            .then((res) => res.json())
            .then((data) => {
                setCustomerList(data);
            });
    }, []);

    const selectData = (data) => {
        if (data) {
            setCenter({ lat: data.lat, lng: data.lng });
            setSelect(data);
        }
    };

    const isData = (data) => {
        if (select === data) {
            return true;
        }
    };

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    const toggleDisabled = () => {
        setIsActive(false);
    };

    const popupActive = () => {
        setPopup(true);
    };

    const popupDisabled = () => {
        setPopup(false);
    };

    const filterdata = (data) => {
        return _.filter(data, function (query) {
            var nama = value
                ? query.nama.toLowerCase().includes(value.toLowerCase())
                : true;
            // area = value
            //     ? query.harga.toLowerCase().includes(value.toLowerCase())
            //     : true;

            return nama;
        });
    };

    return (
        <>
            <Popup
                dataPopup={dataPopup}
                isActive={popup}
                popupDisabled={popupDisabled}
            />
            <HomeWrapper isPopup={popup}>
                <HomeMain>
                    <Search>
                        {isActive ? (
                            <CloseIcon
                                onClick={toggleMenu}
                                style={{
                                    fontSize: "30px",
                                    marginRight: "10px",
                                    marginLeft: "5px",
                                    color: "black",
                                    cursor: "pointer",
                                }}
                            />
                        ) : (
                            <MenuIcon
                                onClick={toggleMenu}
                                style={{
                                    fontSize: "30px",
                                    marginRight: "10px",
                                    marginLeft: "5px",
                                    color: "black",
                                    cursor: "pointer",
                                }}
                            />
                        )}

                        <SearchPanel onClick={toggleDisabled}>
                            <TextSearch
                                onChange={(e) => setValue(e.target.value)}
                                type="text"
                                placeholder="Cari lokasi .."
                            />
                        </SearchPanel>
                    </Search>
                    <WrapperMenu active={isActive}>
                        <div>
                            <ListMenu
                                setPopup={setPopup}
                                setIsActive={setIsActive}
                                nama="Tambah Lokasi"
                                Icon={AddLocationAltIcon}
                                setDataPopUp={setDataPopUp}
                            />
                            <ListMenu
                                setPopup={setPopup}
                                setIsActive={setIsActive}
                                nama="Daftar Area"
                                Icon={LanguageIcon}
                                setDataPopUp={setDataPopUp}
                            />
                            {/* <ListMenu
                            toggleMenu={toggleDisabled}
                            nama="Daftar Kendaraan"
                            Icon={LocalShippingIcon}
                        /> */}
                            <ListMenu
                                setPopup={setPopup}
                                setIsActive={setIsActive}
                                nama="Pengaturan"
                                Icon={SettingsIcon}
                                setDataPopUp={setDataPopUp}
                            />
                            <ListMenu
                                setIsActive={setIsActive}
                                nama="Keluar"
                                Icon={LogoutIcon}
                            />
                        </div>
                        <CreatedBy>
                            &copy; (IT) PT. Ekatunggal Tunas Mandiri - 2021
                        </CreatedBy>
                    </WrapperMenu>
                    {filterdata(customerList).length > 0 ? (
                        <ContentCustomer>
                            {filterdata(customerList).map((list) => {
                                return (
                                    <Customerlist
                                        select={isData(list)}
                                        toggleMenu={toggleDisabled}
                                        selectData={selectData}
                                        key={list.id}
                                        data={list}
                                    />
                                );
                            })}
                        </ContentCustomer>
                    ) : (
                        <NoData>Lokasi tidak ditemukan </NoData>
                    )}
                </HomeMain>
                <Maps onClick={toggleDisabled}>
                    <GoogleMapReact center={center} zoom={15}>
                        {customerList.map((list) => {
                            return (
                                <Marker
                                    select={isData(list)}
                                    key={list.id}
                                    lat={list.lat}
                                    lng={list.lng}
                                    text={list.nama}
                                />
                            );
                        })}
                    </GoogleMapReact>
                </Maps>
            </HomeWrapper>
        </>
    );
}

export default Home;

const HomeWrapper = styled.div`
    display: flex;
    position: ${({ isPopup }) => (isPopup ? "fixed" : "none")};
    @media screen and (max-width: 720px) {
        flex-direction: column;
    }
`;

const HomeMain = styled.div`
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    background-color: whitesmoke;
    padding: 0.5%;
`;

const ContentCustomer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    z-index: 900;

    @media screen and (max-width: 720px) {
        margin-bottom: 20px;
    }
`;

const Maps = styled.div`
    flex-grow: 1;
    height: 100vh;
    top: 0;
    position: sticky;
    background-color: white;
`;

const Search = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    position: sticky;
    top: 0px;
    background-color: whitesmoke;
    z-index: 1000;
    margin-top: -20px;
    display: flex;
    align-items: center;
    @media screen and (max-width: 720px) {
        width: 98%;
    }
`;

const SearchPanel = styled.div`
    border: solid 1px #ccc;
    width: 100%;
    height: 40px;
    margin-top: 10px;
    background-color: white;
    border-radius: 2px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`;

const TextSearch = styled.input`
    /* color: #bbb; */
    font-size: 13px;
    height: 30px;
    padding-left: 2%;
    flex: 1;
    border: none;
    margin-left: 1%;
    margin-right: 1%;
`;

const NoData = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #bbb;
    font-size: 0.95em;
`;

const WrapperMenu = styled.div`
    border: solid 1px #ddd;
    width: 290px;
    height: 91vh;
    background-color: white;
    position: fixed;
    z-index: 2000;
    top: 60px;
    margin-left: ${({ active }) => (active ? "-6px" : "-300px")};
    transition: all 0.5s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 720px) {
        width: 102%;
        margin-left: ${({ active }) => (active ? "-6px" : "-102%")};
    }
`;

const CreatedBy = styled.div`
    font-size: 0.9em;
    text-align: center;
    opacity: 0.3;
    margin-bottom: 20px;
`;
