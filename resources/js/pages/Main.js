import ReactDOM from "react-dom";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home, LoginPage } from ".";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const Users = () => {
    return <div>Users</div>;
};

function Main() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage />} exact={true} />
                    <Route path="/" element={<Home />} exact={true} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default Main;

if (document.getElementById("app")) {
    ReactDOM.render(<Main />, document.getElementById("app"));
}
