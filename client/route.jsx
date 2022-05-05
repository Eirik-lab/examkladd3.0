import {BrowserRouter, Route, Routes} from "react-router-dom";
import ReactDOM from "react-dom";
import React from "react";
import {FrontPage} from "./index";
import {Login} from "./index";

function Application() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FrontPage />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<Application />, document.getElementById("app"));
