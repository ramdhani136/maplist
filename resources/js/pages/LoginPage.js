import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { Api_Url } from "../config";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState({});
    const [type, setType] = useState("password");

    const onLogin = async () => {
        await axios
            .post(`${Api_Url}login`, value)
            .then((response) => {
                //set token on localStorage
                localStorage.setItem("token", response.data.token);

                //redirect to dashboard
                navigate("/");
            })
            .catch((error) => {
                //assign error to state "validation"
                // setValidation(error.response.data);
            });
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            //redirect page dashboard
            navigate("/");
        }
    });

    return (
        <Wrapper>
            <Content>
                <Form>
                    <Title>Login</Title>
                    <FormGroup>
                        <Label>Username :</Label>
                        <Input
                            type="text"
                            onChange={(e) =>
                                setValue({ ...value, email: e.target.value })
                            }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password :</Label>
                        <Input
                            type={type}
                            onChange={(e) =>
                                setValue({ ...value, password: e.target.value })
                            }
                        />
                        {type === "password" && (
                            <VisibilityIcon
                                onClick={() => setType("text")}
                                style={{
                                    position: "absolute",
                                    marginTop: "43px",
                                    fontSize: "15px",
                                    marginLeft: "300px",
                                    cursor: "pointer",
                                    color: "#ddd",
                                }}
                            />
                        )}
                        {type === "text" && (
                            <VisibilityOffIcon
                                onClick={() => setType("password")}
                                style={{
                                    position: "absolute",
                                    marginTop: "43px",
                                    fontSize: "15px",
                                    marginLeft: "300px",
                                    cursor: "pointer",
                                    color: "#ddd",
                                }}
                            />
                        )}
                    </FormGroup>
                    <Button onClick={onLogin}>Login</Button>
                </Form>
            </Content>
        </Wrapper>
    );
};

export default LoginPage;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    background-color: #1f2531;
`;

const Content = styled.div`
    margin-top: 40px;
    width: 400px;
    height: 390px;
    border: solid 1px gray;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Form = styled.div`
    width: 90%;
    flex: 0.95;
    margin-top: 20px;
    border: solid 1.5px #ddd;
    border-radius: 5px;
`;

const Title = styled.h3`
    padding: 15px;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 10px;
`;

const Label = styled.label`
    font-weight: 800;
    font-size: 0.95em;
`;

const Input = styled.input`
    padding: 8px;
    border: solid 1px #f6b172;
    border-radius: 3px;
    position: relative;
`;

const Button = styled.div`
    cursor: pointer;
    border: solid 1px #cbae7a;
    margin: 15px;
    margin-top: 30px;
    text-align: center;
    padding-top: 6px;
    background-color: #f6d384;
    padding-bottom: 6px;
    border-radius: 2px;
    color: gray;
    :hover {
        background-color: #ddbd76;
        border: solid 1px #b0975e;
    }
`;
