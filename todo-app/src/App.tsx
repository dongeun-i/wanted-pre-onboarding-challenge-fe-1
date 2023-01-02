import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import { PageList } from "./pages/page_list";

const App: React.FunctionComponent<any> = () => {
    const [isLogin, setisLogin] = useState<boolean>(false);
    return <PageList isLogin={isLogin} />;
};

export default App;
