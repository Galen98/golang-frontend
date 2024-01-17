import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Addnew from "../Pages/Addnew";
import Edit from "../Pages/Edit";
import React, { useEffect, useState } from 'react';
export default function RoutesIndex(){

    return(
        <>
        <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/addnew" element={<Addnew />} />
        <Route path="/edit/:id" element={<Edit />} />
        </Routes>
        </>
    )
}