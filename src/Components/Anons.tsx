import React, {FC, useEffect, useState} from 'react';
import {Box, Image, Text} from "@chakra-ui/react";
import axios from "axios";

const Anons:FC = () => {

    return (
        <Box position='relative' mt='3%' overflow='hidden' borderRadius='30px' w='100%' h='55vh' >
            <Image _hover={{transition: 'all ease 0.6s'}} transition='all ease 0.6s' className='anonsImage' w='100%' h='100%' borderRadius='30px' objectFit='cover' src='/anons.jpg' />
            <Text fontWeight='600' position='absolute' left='5%' bottom='13%' fontSize='50px' color='white'>Venom</Text>
        </Box>
    );
};

export default Anons;