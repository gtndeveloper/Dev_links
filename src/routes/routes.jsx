import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Links from '../pages/Links';
import NotFound from '../pages/NotFound'

export default () => (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/links' element={<Links />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
)
