import ReactDOM from "react-dom";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AtkPage, Home, LoginPage, Maplist } from ".";
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
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/maplist" element={<Maplist />} />
                    <Route path="/" element={<Home />} exact={true} />
                    <Route path="/atk/list" element={<AtkPage />} />
                    <Route path="/atk/" element={<AtkPage />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default Main;

if (document.getElementById("app")) {
    ReactDOM.render(<Main />, document.getElementById("app"));
}
