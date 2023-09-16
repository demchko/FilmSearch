import React, {FC, useEffect, useState} from 'react';
import {Box, Flex, Heading, Image, Input, Text, useMediaQuery} from "@chakra-ui/react";
import axios from "axios";
import {IFilmArr} from "../types/IFilmArr";
import {useNavigate} from "react-router-dom";

const Header:FC = () => {

    const [search, setSearch] = useState('');
    const [result, setResult] = useState<IFilmArr[]>([]);
    const nav = useNavigate();

    const [isMobile] = useMediaQuery("(max-width: 768px)");

    const fetchServer = async() => {
        const response = await axios.get(`http://www.omdbapi.com/?s=${search}&apikey=b90ce38c`);
        setResult(response.data.Search);
    }

    useEffect(() => {
        fetchServer();
    }, [search]);


    return (
        <Flex justifyContent='space-between' alignItems='center' >
            {
                !isMobile && <Heading>FilmsNow</Heading>
            }
            <Input w={`${isMobile && '100%'}`} value={search} onChange={e => setSearch(e.target.value)} border='none' color='white' bg='#162032' p='10px' borderRadius='15px' placeholder="I'm looking for.."  />
            {
               search
                   ?  <Box p='5px' borderRadius='15px' boxShadow='3px 3px 3px white' bg='#293246' w={`${isMobile ? '90%' : '40%'}`} position='absolute' zIndex='999'  top='12%' right='1%' >
                       {
                           result?.length
                           ?result.map(item => (
                               <Flex cursor='pointer' onClick={() => nav(`/film/${item.imdbID}`)} mt='10px' alignItems='center' >
                                   <Image src={item.Poster} w='50px' h='50px' borderRadius='100%' objectFit='cover' />
                                   <Text >{item.Title}</Text>
                               </Flex>
                           ))
                           : <Text>Не знайдено</Text>
                       }
                   </Box>
                : <></>
            }
        </Flex>
    );
};

export default Header;