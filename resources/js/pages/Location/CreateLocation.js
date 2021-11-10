import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
    BrowseImage,
    FieldInput,
    SelectList,
    TextArea,
} from "../../components/Atoms";
import { Api_Url, BASE_URL } from "../../config";
import _ from "lodash";
import axios from "axios";
import Swal from "sweetalert2";

const CreateLocation = ({
    setbtnAktif,
    btnClick,
    setBtnClick,
    popupDisabled,
    data,
    reset,
    setReset,
}) => {
    const defaultValue = {
        name: "",
        addr: "",
        lat: "",
        lng: "",
        id_area: "",
        phone: "",
        pic: "",
        description: "",
    };

    const [previewImg, setPreviewImg] = useState("");
    const [value, setValue] = useState(defaultValue);
    const [areas, setAreas] = useState([]);
    const [validName, setValidName] = useState(true);
    const [validLat, setValidLat] = useState(true);
    const [validLng, setvalidLng] = useState(true);
    const [validArea, setValidArea] = useState(true);
    const [selectAktif, setSelectAktif] = useState(false);
    const [valueArea, setValueArea] = useState("");
    const [saveValue, setSaveValue] = useState("");
    const [clearImage, setClearImage] = useState(false);
    const [image, setImage] = useState("");

    const handleName = (e) => {
        setValue({ ...value, name: e });
    };

    const handleAddr = (e) => {
        setValue({ ...value, addr: e });
    };

    const handleLat = (e) => {
        setValue({ ...value, lat: e });
    };

    const handleLng = (e) => {
        setValue({ ...value, lng: e });
    };

    const handlePic = (e) => {
        setValue({ ...value, pic: e });
    };

    const handleDesc = (e) => {
        setValue({ ...value, description: e });
    };

    const handlePhone = (e) => {
        setValue({ ...value, phone: e });
    };

    const handleArea = (e) => {
        setSaveValue(e.name);
        setValueArea(e.name);
        setValue({ ...value, id_area: e.id });
    };

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setPreviewImg(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
        setImage(e.target.files[0]);
    };

    const getAreas = () => {
        fetch(`${Api_Url}area`)
            .then((res) => res.json())
            .then((data) => {
                setAreas(data.data);
            });
    };

    const isValid = () => {
        if (
            value.name === undefined ||
            value.name === "" ||
            value.name === null
        ) {
            setValidName(true);
        } else {
            setValidName(false);
        }

        if (value.lat === undefined || value.lat === "" || value.lat === null) {
            setValidLat(true);
        } else {
            setValidLat(false);
        }

        if (value.lng === undefined || value.lng === "" || value.lng === null) {
            setvalidLng(true);
        } else {
            setvalidLng(false);
        }

        if (
            value.id_area === undefined ||
            value.id_area === "" ||
            value.id_area === null
        ) {
            setValidArea(true);
        } else {
            setValidArea(false);
        }
    };

    useEffect(() => {
        if (
            previewImg === "" ||
            previewImg === null ||
            previewImg === undefined
        ) {
            setPreviewImg(`${BASE_URL}storage/images/noimage.png`);
        }
    }, [previewImg]);

    useEffect(() => {
        isValid();
        if (
            validName === false &&
            validArea === false &&
            validLat === false &&
            validLng === false
        ) {
            setbtnAktif(true);
        } else {
            setbtnAktif(false);
        }
    });

    const filterdata = (data) => {
        return _.filter(data, function (query) {
            var name = valueArea
                ? query.name.toLowerCase().includes(valueArea.toLowerCase())
                : true;
            return name;
        });
    };

    const resetForm = () => {
        setValue({
            name: "",
            addr: "",
            lat: "",
            lng: "",
            id_area: "",
            phone: "",
            pic: "",
            description: "",
        });
        setValueArea("");
        setSaveValue("");
        setBtnClick(false);
        setPreviewImg("");
        popupDisabled();
        setClearImage(true);
        setImage("");
    };

    const onSubmit = () => {
        const inData = new FormData();
        {
            image && inData.append("file", image);
        }
        inData.append("name", value.name);
        inData.append("addr", value.addr);
        inData.append("lat", value.lat);
        inData.append("lng", value.lng);
        inData.append("id_area", value.id_area);
        inData.append("description", value.description);
        inData.append("pic", value.pic);
        inData.append("phone", value.phone);
        axios
            .post(`${Api_Url}locations`, inData, {
                headers: {
                    "content-type": "multipart/form-data",
                },
            })
            .then((res) => {
                Swal.fire("Sukses!", "Berhasil menambahkan lokasi", "success");
                resetForm();
            })
            .catch((err) => {
                setBtnClick(false);
                alert("Nama lokasi sudah diinput sebelumnya!");
            });
    };

    useEffect(() => {
        if (btnClick) {
            onSubmit();
        }
    }, [btnClick]);

    useEffect(() => {
        if (data) {
            setValue(data);
            setPreviewImg(`${BASE_URL}storage/images/${data.uri}`);
            setValueArea(data.area);
            setSaveValue(data.area);
        }
    }, [data]);

    useEffect(() => {
        if (reset) {
            resetForm();
            setReset(false);
        }
    }, [reset]);

    return (
        <form>
            <WrapperCL>
                <CLleft>
                    <FieldInput
                        getValue={handleName}
                        data={{
                            name: "Nama Lokasi",
                            type: "text",
                            ph: "Cth: Ekspedisi Mala",
                            valid: validName,
                            value: value.name,
                            nameInput: "name",
                        }}
                        width="94%"
                    />
                    <TextArea
                        getValue={handleAddr}
                        width="94%"
                        data={{
                            ph: "Cth: Jl.Raya Bogor No.212",
                            name: "Alamat",
                            value: value.addr,
                            nameInput: "addr",
                        }}
                    />
                    <FieldInput
                        getValue={handleLat}
                        data={{
                            name: "Kordinat (Lat)",
                            type: "number",
                            ph: "Cth : 2.3839 ",
                            valid: validLat,
                            value: value.lat,
                            nameInput: "lat",
                        }}
                        width="94%"
                    />
                    <FieldInput
                        getValue={handleLng}
                        data={{
                            name: "Kordinat (Lng)",
                            type: "number",
                            ph: "Cth : 0.3839 ",
                            valid: validLng,
                            value: value.lng,
                            nameInput: "lng",
                        }}
                        width="94%"
                    />
                    <FieldInput
                        getValue={handlePic}
                        data={{
                            name: "PIC",
                            type: "text",
                            ph: "Cth: Ryan Isti",
                            value: value.pic,
                            nameInput: "pic",
                        }}
                        width="94%"
                    />
                    <TextArea
                        getValue={handleDesc}
                        width="94%"
                        data={{
                            ph: "Cth: Mobil double tidak bisa masuk",
                            name: "Keterangan",
                            value: value.description,
                            nameInput: "description",
                        }}
                    />
                </CLleft>
                <CLRight>
                    <FieldInput
                        getValue={handlePhone}
                        data={{
                            name: "Phone",
                            type: "text",
                            ph: "Cth: 021-8273823",
                            value: value.phone,
                            nameInput: "phone",
                        }}
                        width="94%"
                    />

                    <SelectList
                        saveValue={saveValue}
                        getValue={handleArea}
                        onClick={getAreas}
                        data={{
                            name: "Group Area",
                            type: "text",
                            ph: "Pilih Area",
                            data: filterdata(areas),
                            aktif: selectAktif,
                            value: valueArea,
                            valid: validArea,
                            setSelectAktif: setSelectAktif,
                            setValue: setValueArea,
                            nameInput: "id_area",
                        }}
                        width="94%"
                    />
                    <BrowseImage
                        onChange={imageHandler}
                        data={{
                            name: "Gambar Lokasi",
                            type: "file",
                            nameInput: "file",
                        }}
                        width="94%"
                        clearImage={clearImage}
                    />

                    <ImgPreview src={previewImg} />
                </CLRight>
            </WrapperCL>
        </form>
    );
};

export default CreateLocation;

const WrapperCL = styled.div`
    width: 96%;
    height: auto;
    margin: 3%;
    margin-top: 10px;
    display: flex;
`;

const CLleft = styled.div`
    flex: 1;
`;

const CLRight = styled.div`
    flex: 1;
`;

const ImgPreview = styled.img`
    width: 80%;
    border: solid 1px #ccc;
    object-fit: "contain";
`;
