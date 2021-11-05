import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Customerlist } from "../components/Organisms";
import GoogleMapReact from "google-map-react";
import { Marker } from "../components/Moleculs";
import _ from "lodash";
import MenuIcon from "@mui/icons-material/Menu";

function Home() {
    const [customerList, setCustomerList] = useState([]);
    const [center, setCenter] = useState({ lat: -7.797068, lng: 110.371754 });
    const [select, setSelect] = useState({});
    const [value, setValue] = useState("");

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
        <HomeWrapper>
            <HomeMain>
                <Search>
                    <MenuIcon
                        style={{
                            fontSize: "30px",
                            marginRight: "10px",
                            marginLeft: "5px",
                            color: "black",
                            cursor: "pointer",
                        }}
                    />
                    <SearchPanel>
                        <TextSearch
                            onChange={(e) => setValue(e.target.value)}
                            type="text"
                            placeholder="Cari lokasi .."
                        />
                    </SearchPanel>
                </Search>
                <ContentCustomer>
                    {filterdata(customerList).map((list) => {
                        return (
                            <Customerlist
                                selectData={selectData}
                                key={list.id}
                                data={list}
                            />
                        );
                    })}
                </ContentCustomer>
            </HomeMain>
            <Maps>
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
    );
}

export default Home;

const HomeWrapper = styled.div`
    display: flex;
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
