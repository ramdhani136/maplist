import React from "react";
import styled from "styled-components";
import { FieldInput } from "../../components/Atoms";

const CreateLocation = () => {
    return (
        <WrapperCL>
            <CLleft>
                <FieldInput
                    tykle
                    data={{
                        name: "Nama Lokasi",
                        type: "text",
                        ph: "Cth: Ekspedisi Mala",
                    }}
                    width="94%"
                />
                <FieldInput
                    data={{
                        name: "Alamat",
                        type: "text",
                        ph: "Cth : Jl. Raya Bogor No.212 ...",
                    }}
                    width="94%"
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
            </CLleft>
            <CLRight>
                <FieldInput
                    tykle
                    data={{
                        name: "PIC",
                        type: "text",
                        ph: "Cth: Ryan Isti",
                    }}
                    width="94%"
                />
                <FieldInput
                    tykle
                    data={{
                        name: "Phone",
                        type: "text",
                        ph: "Cth: 021-8273823",
                    }}
                    width="94%"
                />
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
