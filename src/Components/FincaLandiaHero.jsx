import React from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    Button,
    VStack,
    HStack,
    Grid,
    GridItem,
    Icon,
    Badge,
    Flex,
    useBreakpointValue
} from '@chakra-ui/react';
import {
    FaMapMarkerAlt,
    FaHandshake,
    FaShieldAlt,
    FaCreditCard,
    FaLeaf,
    FaRoad,
    FaWater,
    FaBolt,
    FaPhoneAlt,
    FaWhatsapp,
    FaCheckCircle
} from 'react-icons/fa';

const FincaLandiaHero = () => {
    const stackDirection = useBreakpointValue({ base: 'column', lg: 'row' });
    const gridColumns = useBreakpointValue({ base: 1, md: 2, lg: 3 });
    const phoneNumber = '573115125189';
    const defaultMessage = encodeURIComponent('Hola, me gustaría saber más sobre tus servicios.'); // Codifica el mensaje para URL
    const handleClick = () => {
        // Construye la URL de WhatsApp
        const waUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;
        // Redirecciona al usuario a WhatsApp
        window.open(waUrl, '_blank');
    };

    const ventajas = [
        {
            icon: FaMapMarkerAlt,
            titulo: "Ubicaciones Premium",
            descripcion: "Terrenos en las mejores zonas con alta valorización"
        },
        {
            icon: FaCreditCard,
            titulo: "Precios Económicos",
            descripcion: "Los mejores precios del mercado con facilidades de pago"
        },
        {
            icon: FaShieldAlt,
            titulo: "Documentación Legal",
            descripcion: "Títulos completamente legales y al día"
        },
        {
            icon: FaHandshake,
            titulo: "Asesoría Profesional",
            descripcion: "Acompañamiento completo en todo el proceso"
        },
        {
            icon: FaRoad,
            titulo: "Vías de Acceso",
            descripcion: "Fácil acceso y vías pavimentadas"
        },
        {
            icon: FaLeaf,
            titulo: "Entorno Natural",
            descripcion: "Rodeados de naturaleza y aire puro"
        }
    ];

    const servicios = [
        { icon: FaWater, texto: "Agua potable" },
        { icon: FaBolt, texto: "Energía eléctrica" },
        { icon: FaRoad, texto: "Vías pavimentadas" },
    ];

    return (
        <Box bg="linear-gradient(135deg, #FFF8DC 0%, #FFFACD 50%, #F0E68C 100%)" minH="100vh" py={8}>
            <Container maxW="7xl" px={4}>
                {/* Header Principal */}
                <VStack spacing={6} textAlign="center" mb={12}>
                    <Badge
                        colorScheme="yellow"
                        variant="solid"
                        px={4}
                        py={2}
                        borderRadius="full"
                        fontSize="sm"
                        fontWeight="bold"
                    >
                        🏡 LA MEJOR INVERSIÓN DE TU VIDA
                    </Badge>

                    <Heading
                        as="h1"
                        size="2xl"
                        color="gray.800"
                        fontWeight="black"
                        lineHeight="shorter"
                        maxW="4xl"
                    >
                        Encuentra tu terreno ideal con{' '}
                        <Text as="span" color="#DAA520" textShadow="2px 2px 4px rgba(0,0,0,0.1)">
                            Finca Landia
                        </Text>
                    </Heading>

                    <Text
                        fontSize="xl"
                        color="gray.600"
                        maxW="2xl"
                        lineHeight="tall"
                        fontWeight="medium"
                    >
                        Terrenos y lotes económicos en las mejores zonas.
                        Invierte en tu futuro con total seguridad y respaldo legal.
                    </Text>

                    <HStack spacing={4} flexWrap="wrap" justify="center">
                        <Button
                            size="lg"
                            bg="#DAA520"
                            color="white"
                            _hover={{ bg: "#B8860B", transform: "translateY(-2px)" }}
                            _active={{ transform: "translateY(0)" }}
                            leftIcon={<FaPhoneAlt />}
                            borderRadius="full"
                            px={8}
                            py={6}
                            fontSize="md"
                            fontWeight="bold"
                            boxShadow="0 4px 15px rgba(218, 165, 32, 0.3)"
                            transition="all 0.3s ease"
                            href="tel:3115125189"
                        >
                            Llamar Ahora
                        </Button>

                        <Button
                            size="lg"
                            bg="#25D366"
                            color="white"
                            _hover={{ bg: "#1DA851", transform: "translateY(-2px)" }}
                            _active={{ transform: "translateY(0)" }}
                            leftIcon={<FaWhatsapp />}
                            borderRadius="full"
                            px={8}
                            py={6}
                            fontSize="md"
                            fontWeight="bold"
                            boxShadow="0 4px 15px rgba(37, 211, 102, 0.3)"
                            transition="all 0.3s ease"
                            onClick={handleClick}
                        >
                            WhatsApp
                        </Button>
                    </HStack>
                </VStack>

                {/* Servicios Destacados */}
                <Box mb={16}>
                    <Flex
                        direction={stackDirection}
                        bg="white"
                        borderRadius="2xl"
                        p={8}
                        boxShadow="0 20px 60px rgba(0,0,0,0.1)"
                        border="3px solid"
                        borderColor="#DAA520"
                        align="center"
                        justify="space-between"
                        gap={6}
                    >
                        <VStack align="flex-start" spacing={4} flex={1}>
                            <Badge colorScheme="yellow" variant="outline" fontSize="xs" px={3} py={1}>
                                ✨ INCLUIDO EN TODOS LOS LOTES
                            </Badge>
                            <Heading size="lg" color="gray.800" fontWeight="bold">
                                Servicios Garantizados
                            </Heading>
                            <Text color="gray.600" fontSize="md">
                                Todos nuestros terrenos cuentan con servicios básicos instalados
                            </Text>
                        </VStack>

                        <Grid templateColumns={`repeat(${Math.min(servicios.length, 2)}, 1fr)`} gap={6} flex={1}>
                            {servicios.map((servicio, index) => (
                                <GridItem key={index}>
                                    <HStack
                                        spacing={3}
                                        p={4}
                                        bg="yellow.50"
                                        borderRadius="xl"
                                        border="2px solid"
                                        borderColor="yellow.200"
                                        _hover={{
                                            bg: "yellow.100",
                                            borderColor: "#DAA520",
                                            transform: "translateY(-2px)"
                                        }}
                                        transition="all 0.3s ease"
                                    >
                                        <Icon as={servicio.icon} color="#DAA520" boxSize={5} />
                                        <Text fontWeight="semibold" color="gray.700" fontSize="sm">
                                            {servicio.texto}
                                        </Text>
                                    </HStack>
                                </GridItem>
                            ))}
                        </Grid>
                    </Flex>
                </Box>

                {/* Ventajas Grid */}
                <VStack spacing={8} mb={16}>
                    <VStack spacing={3} textAlign="center">
                        <Badge colorScheme="yellow" variant="solid" px={4} py={2} borderRadius="full">
                            🏆 NUESTRAS VENTAJAS
                        </Badge>
                        <Heading size="xl" color="gray.800" fontWeight="bold">
                            ¿Por qué elegir Finca Landia?
                        </Heading>
                        <Text color="gray.600" fontSize="lg" maxW="2xl">
                            Somos líderes en venta de terrenos con más de 10 años de experiencia
                        </Text>
                    </VStack>

                    <Grid templateColumns={`repeat(${gridColumns}, 1fr)`} gap={8} w="full">
                        {ventajas.map((ventaja, index) => (
                            <GridItem key={index}>
                                <VStack
                                    spacing={4}
                                    p={8}
                                    bg="white"
                                    borderRadius="2xl"
                                    boxShadow="0 10px 30px rgba(0,0,0,0.1)"
                                    border="2px solid transparent"
                                    _hover={{
                                        borderColor: "#DAA520",
                                        transform: "translateY(-5px)",
                                        boxShadow: "0 20px 40px rgba(218, 165, 32, 0.2)"
                                    }}
                                    transition="all 0.3s ease"
                                    h="full"
                                    justify="flex-start"
                                >
                                    <Box
                                        p={4}
                                        bg="yellow.50"
                                        borderRadius="full"
                                        border="3px solid"
                                        borderColor="#DAA520"
                                    >
                                        <Icon as={ventaja.icon} boxSize={8} color="#DAA520" />
                                    </Box>

                                    <VStack spacing={2} textAlign="center">
                                        <Heading size="md" color="gray.800" fontWeight="bold">
                                            {ventaja.titulo}
                                        </Heading>
                                        <Text color="gray.600" fontSize="sm" lineHeight="tall">
                                            {ventaja.descripcion}
                                        </Text>
                                    </VStack>
                                </VStack>
                            </GridItem>
                        ))}
                    </Grid>
                </VStack>

                {/* Call to Action Final */}
                <Box
                    bg="linear-gradient(135deg, #DAA520 0%, #B8860B 100%)"
                    borderRadius="3xl"
                    p={10}
                    textAlign="center"
                    color="white"
                    position="relative"
                    overflow="hidden"
                >
                    {/* <Box
                        position="absolute"
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                        bgImage="url('data:image/svg+xml,<svg xmlns=\" http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grain\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"><circle cx=\"50\" cy=\"50\" r=\"1\" fill=\"white\" opacity=\"0.1\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grain)\"/></svg>')"
                        opacity={0.3}
                    >
                    </Box> */}

                    <VStack spacing={6} position="relative" zIndex={1}>
                        <Badge
                            bg="white"
                            color="#DAA520"
                            px={6}
                            py={2}
                            borderRadius="full"
                            fontSize="sm"
                            fontWeight="bold"
                        >
                            🚀 OFERTA LIMITADA
                        </Badge>

                        <Heading size="xl" fontWeight="black" textShadow="2px 2px 4px rgba(0,0,0,0.3)">
                            ¡Tu terreno ideal te está esperando!
                        </Heading>

                        <Text fontSize="lg" opacity={0.9} maxW="2xl" lineHeight="tall">
                            No pierdas la oportunidad de invertir en tu futuro.
                            Contamos con financiación flexible y asesoría personalizada.
                        </Text>

                        <HStack spacing={4} flexWrap="wrap" justify="center">
                            <Button
                                size="xl"
                                bg="white"
                                color="#DAA520"
                                _hover={{ bg: "gray.50", transform: "translateY(-3px)" }}
                                _active={{ transform: "translateY(0)" }}
                                leftIcon={<FaCheckCircle />}
                                borderRadius="full"
                                px={10}
                                py={8}
                                fontSize="lg"
                                fontWeight="bold"
                                boxShadow="0 6px 20px rgba(0,0,0,0.2)"
                                transition="all 0.3s ease"
                            >
                                Ver Terrenos Disponibles
                            </Button>

                            <Button
                                size="xl"
                                variant="outline"
                                borderColor="white"
                                color="white"
                                _hover={{
                                    bg: "white",
                                    color: "#DAA520",
                                    transform: "translateY(-3px)"
                                }}
                                _active={{ transform: "translateY(0)" }}
                                leftIcon={<FaPhoneAlt />}
                                borderRadius="full"
                                px={10}
                                py={8}
                                fontSize="lg"
                                fontWeight="bold"
                                borderWidth="2px"
                                transition="all 0.3s ease"
                                href="tel:3115125189"
                                
                            >
                                Agendar Visita
                            </Button>
                        </HStack>
                    </VStack>
                </Box>
            </Container>
        </Box>
    );
};

export default FincaLandiaHero;