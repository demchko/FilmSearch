import React, {FC, useEffect} from 'react';
import './App.css';
import Main from "./pages/Main";
import FilmPage from "./pages/FilmPage";
import {Route, Routes} from "react-router-dom";

const App:FC = () => {

    return (
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/film/:id' element={<FilmPage />} />
            </Routes>
    );
};
export default App;