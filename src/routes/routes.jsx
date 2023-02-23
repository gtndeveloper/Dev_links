import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound'

export default () => (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
)
