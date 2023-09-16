import React from 'react';
import Header from "../Components/Header";
import Anons from "../Components/Anons";
import FilmsList from "../Components/FilmsList";
import {useMediaQuery} from "@chakra-ui/react";

const Main = () => {

    const [isMobile] = useMediaQuery("(max-width: 768px)");

    return (
        <div className={`${isMobile ? 'mainContainerMobile' : 'mainContainer'}`} >
            <Header />
            <Anons />
            <FilmsList />
        </div>
    );
};

export default Main;