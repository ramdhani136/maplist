import ReactDOM from "react-dom";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from ".";

const Users = () => {
    return <div>Users</div>;
};

function Main() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} exact={true} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Main;

if (document.getElementById("app")) {
    ReactDOM.render(<Main />, document.getElementById("app"));
}
