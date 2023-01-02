import React, { lazy, useEffect } from "react";
import { useNavigate } from "react-router";
import { Routes, Route } from "react-router-dom";

const LoginPage = lazy(() => import("./login.page"));

type pageListType = {
    isLogin: boolean;
};

export const PageList = (props: pageListType) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!props.isLogin) {
            navigate("/login", { replace: true });
        }
    }, [props.isLogin]);
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
    );
};
