import {
  Avatar,
  Box,
  chakra,
  Container,
  Flex,
  Icon,
  SimpleGrid,
  Heading,
  Text,
  Stack,
  HStack,
  VStack,
  Button,
  Center,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react'

import { CheckIcon, ChatIcon, ArrowRightIcon } from '@chakra-ui/icons'


import Head from 'next/head';
import Image from 'next/image'

import Carousel from '../../components/carousel2'

import NavBar from '../../components/navbar' 
import Footer from '../../components/footer' 



export default function FoodPage() {
  return (
    <Box>
    <Head>
      <title>Restaurant | Great Outdoors</title>
      <meta name="description" content="Retreat.Rest.Rejuvenate" />

      <meta property="og:title" content="Great Outdoors Kalanamu" />
      <meta property="og:description" content="Eco-friendly forest resort, located only 45 minutes (about 35km) drive from Kampala" />
      <meta property="og:image" content="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716989029/tgo-logo-e1671037379448_tee1nd.png" />
      <meta property="og:image:secure_url" content="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716989029/tgo-logo-e1671037379448_tee1nd.png" />
      <meta property="og:url" content="https://greatoutdoorsuganda.com/" />
      <meta property="og:type" content="website" />


      <link rel="icon" href="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716989029/tgo-logo-e1671037379448_tee1nd.png" />
    </Head>

      <Box>
        <NavBar />
      </Box>

      <Box
        pt={{ base: 32, md: 44 }}
        // pb={{ base: 32, md: 0 }}

        // bgGradient='linear(to-br, #0e2a4e, whiteAlpha.100)'
        // bg={'#0e2a4e'}
        bg={'#0b1722'}
        // bgImage={
        //   "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101678/IMG_3959-scaled_jd1awh.jpg"
        // }
        bgSize="cover"
        bgPosition="center"
        bgAttachment="fixed"
      >

        <HeadingSection />

        <Section1 />
      </Box>

      <Box>
        <Footer />
      </Box>
    </Box>
  );
}

const HeadingSection = () => {
  return (
    <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"} p={{base:8}}>
    <chakra.h3
      fontWeight={"bold"}
      fontSize={20}
      textTransform={"uppercase"}
      color={"white"}
      fontFamily="bodyFont"
      align="center"
    >
      FARM TO PLATE
    </chakra.h3>
    <Heading
      as={"h1"}
      mb={{ base: 2, md: 10 }}
      fontSize={{ base: "5xl", md: "6xl", lg: "8xl" }}
      minHeight={"1vh"}
      fontWeight="bold"
      lineHeight="none"
      letterSpacing={{ base: "normal", md: "tight" }}
      color="purple.900"
      textAlign="center"
      fontFamily={'navBarFont'}             >
      <Text
        display={{
          base: "block",
          // lg: "inline",
        }}
        w="full"
        bgClip="text"
        color={"white"}

        // bgGradient="linear(to-r, blackAlpha.800, #0e2a4e)"
        fontWeight="extrabold"
        transition="all .65s ease"
        _hover={{
          transform: "scale(1.005)",
          filter: "brightness(120%)",
        }}
        py={6}
      >
        Restaurant
      </Text>
    </Heading>
    <chakra.h2
      margin={"auto"}
      width={"100%"}
      fontWeight={"medium"}
      fontSize={"lg"}
      color={useColorModeValue("gray.900", "gray.400")}
      mt={{ base: -2, md: -8, lg: -8 }}
      fontFamily={"bodyFont"}
      color={"white"}

      align="center"
    >
      Freshly prepared meals enjoyed in open air spaces.
 
    </chakra.h2>
  </Box>
  )
}

    const slides =[
        {   
            img: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1719928250/IMG_3683-scaled_wby9wk.jpg",
            width: 770,
            height: 300,
            caption: "Great Outdoors",
            label: "At Home in Nature",
    
        },
        {   
          img: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716990249/MG_2753-2_vkitl3.jpg",
          width: 1024,
          height: 683,
          caption: "Great Outdoors",
          label: "Cozy Cottages",
        
        },
        {   
          img: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716990366/MG_2898-2_y3khog.jpg",
          width: 1024,
          height: 683,
          caption: "Great Outdoors",
          label: "Corporate Retreats",
        
        },
        
        
      ] 

//Make this into a Carousel
const Section1 = () => {
  return (
    <Container
    maxW={{ base: "95%", md: "90%" }}
    // py={4}
    p={{base: 6, md: 12, lg: 16}}
    minHeight={{ base:'100vh', md: "110vh" }}
    // background="rgba(240,255,244,0.55)"
    bg="white"
    rounded="3xl"
    shadow="2xl"
    border={"1px"}
    borderColor={"white"}
    mt={{ base: "10vh", lg: "25vh" }}
  >
      <Carousel slides={slides} />

      <Section1Content />
    </Container>
  )
} 

const Section1Content = () => {
  return (
    <Box>

      <Box>
        <Text
        fontFamily={'navBarFont'} 
        letterSpacing={'1px'} 
        pb={{base:2, md: 2, lg: 2, xl: 2}} 
        lineHeight={{lg: '55px' ,xl:'55px'}} 
        // textColor='white'
        textColor='#0e2a4e'
        textAlign={'left'}
        fontWeight={800} 
        fontSize={{base:'35px' ,lg: '35px', xl:'50px'}}
        >
          Cottages
        </Text>
      </Box>

      <Box>
        <Text 
        textColor='#cf2e2e' fontFamily={'navBarFont'} 
        fontSize={{base:'sm', md: 'xl'}}
        pb={6}
        >
        Price from UGX 200,000 Night
        </Text>
      </Box>

      <Box>
        <Text pb={4} textColor={'gray.600'} fontFamily={'bodyFont'}  fontSize={{base:'sm', md: 'lg'}} >
        The room is in a lovely brick, stone and wood cottage, surrounded by trees. 
        It has a private patio with mesh that keeps bugs out,
         so you can stay out on the patio as long as you want in the evening without being bothered by bugs!
        </Text>
        <Text pb={4} textColor={'gray.600'} fontFamily={'bodyFont'} fontSize={{base:'sm', md: 'lg'}} >
        The patio looks out on a front garden with avocado and mango trees.
         There is a common area / lobby that is beautifully decorated with paintings of common birds in the area.
        </Text>
        <Text pb={4}  textColor={'gray.600'} fontFamily={'bodyFont'}  fontSize={{base:'sm', md: 'lg'}}>
        The room comes with a mosquito net as well, for extra protection. The sleeping space is separated 
        from the showers and toilet by a door for privacy. It is close to the wide veranda with tables, 
        which makes for good work space.
        </Text>
      </Box>

      <Box>
        <Text
        fontFamily={'navBarFont'} 
        letterSpacing={'1px'} 
        pt={{base:2, md: 2, lg: 4, xl: 4}} 
        lineHeight={{lg: '55px' ,xl:'55px'}} 
        // textColor='white'
        textColor='#0e2a4e'
        textAlign={'left'}
        fontWeight={800} 
        fontSize={{base:'lg' ,lg: 'xl', xl:'3xl'}}
        >
          Amenities
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={{ base: 4, md: 8, lg: 16 }}
          py={2}
          // mt={4}
          mx={'auto'}>
          <Box>
            <Text pb={4}  textColor={'gray.600'} fontFamily={'bodyFont'}  fontSize={{base:'sm', md: 'lg'}}>
            High speed WiFi
            </Text>
          </Box>
          <Box>
            <Text pb={4}  textColor={'gray.600'} fontFamily={'bodyFont'}  fontSize={{base:'sm', md: 'lg'}}>
            High speed WiFi
            </Text>
          </Box>
          <Box>
            <Text pb={4}   textColor={'gray.600'} fontFamily={'bodyFont'}  fontSize={{base:'sm', md: 'lg'}}>
            High speed WiFi
            </Text>
          </Box>
          <Box>
            <Text pb={4}  textColor={'gray.600'} fontFamily={'bodyFont'}  fontSize={{base:'sm', md: 'lg'}}>
            High speed WiFi
            </Text>
          </Box>
          <Box>
            <Text pb={4}  textColor={'gray.600'} fontFamily={'bodyFont'}  fontSize={{base:'sm', md: 'lg'}}>
            High speed WiFi
            </Text>
          </Box>
        </SimpleGrid>



      </Box>

      <Box>
        <Text
        fontFamily={'navBarFont'} 
        letterSpacing={'1px'} 
        pt={{base:2, md: 2, lg: 4, xl: 4}} 
        lineHeight={{lg: '55px' ,xl:'55px'}} 
        // textColor='white'
        textColor='#0e2a4e'
        textAlign={'left'}
        fontWeight={800} 
        fontSize={{base:'lg' ,lg: 'xl', xl:'3xl'}}
        >
          House Rules
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 2 }}
          spacing={'16'}
          py={2}
          // mt={4}
          // mx={'auto'}
          
          >
          <Box textColor={'gray.600'} >
            <Text pb={4}  fontFamily={'bodyFont'}  fontSize={{base:'sm', md: 'lg'}}>
            CHECK IN
            </Text>
            <VStack >
              <Text textAlign={'left'}>Check-in from 12:00 PM – anytime</Text>
              <Text>Check-in from 12:00 PM – anytime</Text>
              <Text>Check-in from 12:00 PM – anytime</Text>
            </VStack>
          </Box>
          <Box textColor={'gray.600'}>
            <Text pb={4}  fontFamily={'bodyFont'}  fontSize={{base:'sm', md: 'lg'}}>
            CHECK OUT
            </Text>
            <VStack>
              <Text>Check-in from 12:00 PM – anytime</Text>
              <Text>Check-in from 12:00 PM – anytime</Text>
              <Text>Check-in from 12:00 PM – anytime</Text>
            </VStack>
          </Box>

        </SimpleGrid>



      </Box>

      <Box>
        <Text
        fontFamily={'navBarFont'} 
        letterSpacing={'1px'} 
        pt={{base:6, md: 6, lg: 6, xl: 6}} 
        lineHeight={{lg: '55px' ,xl:'55px'}} 
        // textColor='white'
        textColor='#0e2a4e'
        textAlign={'left'}
        fontWeight={800} 
        fontSize={{base:'lg' ,lg: 'xl', xl:'3xl'}}
        >
          Special Check-in Instructions
        </Text>
        <Text pb={4}  textColor={'gray.600'} fontFamily={'bodyFont'}  fontSize={{base:'sm', md: 'lg'}} >
        List any Special Check-in Instructions here
        </Text>
      </Box>

      <Box>
        <Text
        fontFamily={'navBarFont'} 
        letterSpacing={'1px'} 
        pt={{base:2, md: 2, lg: 6, xl: 6}} 
        lineHeight={{lg: '55px' ,xl:'55px'}} 
        // textColor='white'
        textColor='#0e2a4e'
        textAlign={'left'}
        fontWeight={800} 
        fontSize={{base:'lg' ,lg: 'xl', xl:'3xl'}}
        >
          Children and Extra Beds
        </Text>
        <Text pb={4}  textColor={'gray.600'} fontFamily={'bodyFont'}  fontSize={{base:'sm', md: 'lg'}} >
        Youngsters are welcome Kids stay free! Youngsters stay free when utilizing existing sheet material; kids may not be qualified for free breakfast Rollaway/additional beds are accessible for UGX 50,000 each day
        </Text>
      </Box>

      <Box>
        <Text
        fontFamily={'navBarFont'} 
        letterSpacing={'1px'} 
        pt={{base:2, md: 2, lg: 6, xl: 6}} 
        lineHeight={{lg: '55px' ,xl:'55px'}} 
        // textColor='white'
        textColor='#0e2a4e'
        textAlign={'left'}
        fontWeight={800} 
        fontSize={{base:'lg' ,lg: 'xl', xl:'3xl'}}
        >
          Pets
        </Text>

        <Text pb={4}  textColor={'gray.600'} fontFamily={'bodyFont'}  fontSize={{base:'sm', md: 'lg'}} >
        Not Allowed
        </Text>
      </Box>

      <Box>
        <Text
        fontFamily={'navBarFont'} 
        letterSpacing={'1px'} 
        pt={{base:2, md: 2, lg: 6, xl: 6}} 
        lineHeight={{lg: '55px' ,xl:'55px'}} 
        // textColor='white'
        textColor='#0e2a4e'
        textAlign={'left'}
        fontWeight={800} 
        fontSize={{base:'lg' ,lg: 'xl', xl:'3xl'}}
        >
          Cancellations
        </Text>

        <Text pb={4}  textColor={'gray.600'} fontFamily={'bodyFont'}  fontSize={{base:'sm', md: 'lg'}} >
        Please email for cancellation policy
        </Text>



      </Box>


    </Box>   
  )
}




