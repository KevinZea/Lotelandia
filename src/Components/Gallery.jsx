import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // Importa los estilos del lightbox
import {
    Box,
    Heading,
    Text,
    Flex
} from "@chakra-ui/react";

import lote1 from "../assets/lote1.jpg";
import lote2 from "../assets/lote2.jpg";
import lote3 from "../assets/lote3.jpg";
import lote4 from "../assets/lote4.jpg";
import lote5 from "../assets/lote5.jpg";
import lote6 from "../assets/lote6.jpg";
import lote7 from "../assets/lote7.jpg";
import lote8 from "../assets/lote8.jpg";
import lote9 from "../assets/lote9.jpg";
import lote10 from "../assets/lote10.jpg";
import lote11 from "../assets/lote11.jpg";


const MyGallery = ({isMobile}) => {
    const morado = "#3b0c2c"

    const photos = [
        {
            src: lote1,
            width: 1,
            height: 1,
        },
        {
            src: lote2,
            width: 1,
            height: 1,
        },
        {
            src: lote3,
            width: 1,
            height: 1,
        },
        {
            src: lote4,
            width: 1,
            height: 1,
        },
        {
            src: lote5,
            width: 1,
            height: 1,
        },
        {
            src: lote6,
            width: 1,
            height: 1,
        },
        {
            src: lote7,
            width: 1,
            height: 1,
        },
        {
            src: lote8,
            width: 1,
            height: 1,
        },
        // {
        //     src: lote9,
        //     width: 1,
        //     height: 1,
        // },
        // {
        //     src: lote10,
        //     width: 1,
        //     height: 1,
        // },
        {
            src: lote11,
            width: 1,
            height: 1,
        },
        // Agrega más imágenes aquí
    ];

    const [currentImage, setCurrentImage] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const openLightbox = (event, { photo, index }) => {
        setCurrentImage(index);
        setIsOpen(true);
    };

    const moveNext = () => {
        setCurrentImage((currentImage + 1) % photos.length);
    };

    const movePrev = () => {
        setCurrentImage((currentImage + photos.length - 1) % photos.length);
    };

    return (
        <Box
            w={"100%"}
            h={"auto"}
            p={5}
        >
            <Heading size={"lg"} color={morado}>
                Mi Galeria de Lotes
            </Heading>
            <Text color={morado}>
                Aquí puedes ver una galería de lotes que tenemos disponibles
            </Text>
            <br />
            <Gallery photos={photos} onClick={openLightbox} />
            {isOpen && (
                <Lightbox
                    mainSrc={photos[currentImage].src}
                    nextSrc={photos[(currentImage + 1) % photos.length].src}
                    prevSrc={photos[(currentImage + photos.length - 1) % photos.length].src}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={movePrev}
                    onMoveNextRequest={moveNext}
                />
            )}
        </Box>
    );
};

export default MyGallery;
