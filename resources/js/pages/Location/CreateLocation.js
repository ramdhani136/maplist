import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FieldInput, SelectList, TextArea } from "../../components/Atoms";
import { Api_Url, BASE_URL } from "../../config";

const CreateLocation = () => {
    const [previewImg, setPreviewImg] = useState("");
    const [value, setValue] = useState({});
    const [areas, setAreas] = useState([]);
    const [selectAktif, setSelectAktif] = useState(false);

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setPreviewImg(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    const getAreas = () => {
        fetch(`${Api_Url}area`)
            .then((res) => res.json())
            .then((data) => {
                setAreas(data.data);
            });
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

    return (
        <WrapperCL>
            <CLleft>
                <FieldInput
                    data={{
                        name: "Nama Lokasi",
                        type: "text",
                        ph: "Cth: Ekspedisi Mala",
                    }}
                    width="94%"
                />
                <TextArea
                    width="94%"
                    data={{ ph: "Cth: Jl.Raya Bogor No.212", name: "Alamat" }}
                />
                <FieldInput
                    data={{
                        name: "Kordinat (Lat)",
                        type: "text",
                        ph: "Cth : 2.3839 ",
                    }}
                    width="94%"
                />
                <FieldInput
                    data={{
                        name: "Kordinat (Lng)",
                        type: "text",
                        ph: "Cth : 0.3839 ",
                    }}
                    width="94%"
                />
                <FieldInput
                    data={{
                        name: "PIC",
                        type: "text",
                        ph: "Cth: Ryan Isti",
                    }}
                    width="94%"
                />
                <TextArea
                    width="94%"
                    data={{
                        ph: "Cth: Mobil double tidak bisa masuk",
                        name: "Keterangan",
                    }}
                />
            </CLleft>
            <CLRight>
                <FieldInput
                    data={{
                        name: "Phone",
                        type: "text",
                        ph: "Cth: 021-8273823",
                    }}
                    width="94%"
                />

                <SelectList
                    onClick={getAreas}
                    data={{
                        name: "Group Area",
                        type: "text",
                        ph: "Pilih Area",
                        data: areas,
                        aktif: selectAktif,
                        setSelectAktif: setSelectAktif,
                    }}
                    width="94%"
                />
                <FieldInput
                    onChange={imageHandler}
                    data={{
                        name: "Gambar Lokasi",
                        type: "file",
                        nameInput: "file",
                    }}
                    width="94%"
                />

                <ImgPreview src={previewImg} />
            </CLRight>
        </WrapperCL>
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
