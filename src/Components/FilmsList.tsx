import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Box, Button, Flex, Image, Text, useMediaQuery} from "@chakra-ui/react";
import {IFilmArr} from "../types/IFilmArr";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const FilmsList = () => {

    const [films, setFilms] = useState<IFilmArr[]>([]);
    const [more, setMore] = useState(false);
    const [isMobile] = useMediaQuery("(max-width: 768px)");


    const nav = useNavigate();

    const fetchMoviesSpider = async () => {
        const response = await axios.get('https://www.omdbapi.com/?s=spider&apikey=b90ce38c');
        setFilms((prevFilms) => [...prevFilms, ...response.data.Search.slice(0, 3)]);
    };

    const fetchMoviesMatrix = async () => {
        const response = await axios.get('https://www.omdbapi.com/?s=matrix&apikey=b90ce38c');
        setFilms((prevFilms) => [...prevFilms, ...response.data.Search.slice(0, 3)]);
    };

    const fetchMoviesYou = async () => {
        const response = await axios.get('https://www.omdbapi.com/?s=you&apikey=b90ce38c');
        setFilms((prevFilms) => [...prevFilms, ...response.data.Search.slice(0, 4)]);
    };

    const fetchMoviesDark = async () => {
        const response = await axios.get('https://www.omdbapi.com/?s=dark&apikey=b90ce38c');
        setFilms((prevFilms) => [...prevFilms, ...response.data.Search.slice(0, 5)]);
    };

    const fetchMoviesPolice = async () => {
        const response = await axios.get('https://www.omdbapi.com/?s=police&apikey=b90ce38c');
        setFilms((prevFilms) => [...prevFilms, ...response.data.Search.slice(0, 5)]);
    };

    useEffect(() => {
        fetchMoviesSpider();
        fetchMoviesMatrix();
        fetchMoviesYou();
        fetchMoviesDark();
        fetchMoviesPolice();
    }, []);


    return (
        <div >
            <Flex mt='15px' flexWrap='wrap' justifyContent='center' alignItems='center' gap={20}>
                {
                    more
                    ? films.map(item => (
                            <Box onClick={() => nav(`/film/${item.imdbID}`)} cursor='pointer' w={`${isMobile ? '65%' : '18%'}`} h='45vh' >
                                <Box borderRadius={15} w='100%' h='90%' overflow='hidden' >
                                    <Image transition='all ease 0.6s' className='anonsImage' _hover={{filter: 'blur(5px)', transition: 'all ease 0.6s'}} w='100%' h='100%' borderRadius={15} objectFit='cover' key={item.imdbID} src={item.Poster} />
                                </Box>
                                <Text fontSize='16px' >{item.Title}</Text>
                            </Box>
                        ))
                    : films.slice(0, 15).map(item => (
                            <Box onClick={() => nav(`/film/${item.imdbID}`)} cursor='pointer' w={`${isMobile ? '65%' : '18%'}`} h='45vh' >
                                <Box borderRadius={15} w='100%' h='90%' overflow='hidden' >
                                    <Image transition='all ease 0.6s' className='anonsImage' _hover={{filter: 'blur(5px)', transition: 'all ease 0.6s'}} w='100%' h='100%' borderRadius={15} objectFit='cover' key={item.imdbID} src={item.Poster} />
                                </Box>
                                <Text fontSize='16px' >{item.Title}</Text>
                            </Box>
                        ))
                }
            </Flex>
            <Flex mt='15px' justifyContent='center' alignItems='center' >
                <Button onClick={() => setMore(!more)} cursor='pointer' border='none' borderRadius={15} bg='#162032' p='15px' transition='all ease 0.4s' _hover={{backgroundColor: '#3182ed', transition: 'all ease 0.4s'}} >{more ? 'Show less' : 'Load more'}</Button>
            </Flex>
        </div>
    );
};

export default FilmsList;