import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Flex, Heading, Image, Box, Text, useMediaQuery} from "@chakra-ui/react";
import {IFilm} from "../types/IFilm";
import {useParams} from "react-router-dom";

interface InfoType{
    id: number;
    title: string;
    name: string;
}

const FilmPage = () => {

    const id = useParams();
    const [film, setFilm] = useState({} as IFilm);
    const [info, setInfo] = useState([] as InfoType[]);
    const [isMobile] = useMediaQuery("(max-width: 768px)");

    const fetchMoviesSpider = async () => {
        const response = await axios.get(`https://www.omdbapi.com/?i=${id.id}&apikey=b90ce38c`);
        setFilm(response.data);
    };

    useEffect(() => {
        fetchMoviesSpider();
    }, []);


    useEffect(() => {
        setInfo([
            { id: 1, title: 'Genre', name: film.Genre },
            { id: 2, title: 'Date', name: film.Released },
            { id: 3, title: 'Country', name: film.Country },
            { id: 4, title: 'Director', name: film.Director },
            { id: 5, title: 'Awards', name: film.Awards },
            { id: 6, title: 'Actors', name: film.Actors },
            { id: 7, title: 'Runtime', name: film.Runtime },
        ]);
    }, [film]);


    return (
        <div className='mainContainer' >
            {
                Object.keys(film).length > 0
                ?  <Box as={isMobile ? Box : Flex} textAlign={`${isMobile ? 'center' : 'left'}`}>
                        <Image mr='3%' w={`${isMobile ? '55%' : '30%'}`} borderRadius='20px' objectFit='contain' src={film?.Poster} />
                        <Box>
                            <Heading fontSize='40px' >{film.Title}</Heading>
                            {
                                info.map(item => (
                                    <Flex mt='10px' alignItems='center' >
                                        <Text fontSize='18px' mr='10px' fontWeight='bold' >{item.title}: </Text>
                                        <Text fontSize='17px' >{item.name}</Text>
                                    </Flex>
                                ))
                            }
                            <Box mt='20px' >
                                <Text >What the movie is about</Text>
                                <Text mt='10px' fontSize='16px' >{film.Plot}</Text>
                            </Box>
                        </Box>
                    </Box>
                : <Text>Loading</Text>
            }
        </div>
    );
};

export default FilmPage;