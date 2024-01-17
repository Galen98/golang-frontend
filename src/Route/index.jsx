import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Addnew from "../Pages/Addnew";
import React, { useEffect, useState } from 'react';
export default function RoutesIndex(){

    return(
        <>
        <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/addnew" element={<Addnew />} />
        </Routes>
        </>
    )
}