import React from "react";
import {
    Box,
    Heading,
    Text
} from "@chakra-ui/react";
import introduction from "../assets/introduction.jpg";
import portada from "../assets/portada.jpg";


const Introduction = () => {
    const amarillo = "#ffc300"
    const blanco = "#faf4e0"

    return (
        <Box
            w={"100%"}
            h={"120vh"}
            bgImage={portada}
            bgSize={"cover"}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
            // filter={"brightness(50%)"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            pos={"relative"}
            zIndex={-1}
        >
            <Box>
                <Heading
                    color={blanco}
                    fontSize={"5xl"}
                    textAlign={"center"}
                    zIndex={1}
                    textShadow={"2px 2px 4px #000000"}
                >
                    Finca <Text color={amarillo}>Raíz</Text>
                </Heading>
            </Box>

        </Box>
    );
}

export default Introduction;