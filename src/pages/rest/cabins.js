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

import * as Icons from "react-icons/fa";


import Head from 'next/head';
import Image from 'next/image'

import Carousel from '../../components/carousel3'

import NavBar from '../../components/navbar' 
import Footer from '../../components/footer' 
import Link from 'next/link'

const slides =[
  {   
      img: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724104810/IMG_3701-scaled_agc8bi.jpg",
      width: 770,
      height: 300,
      caption: "Great Outdoors",
      label: "At Home in Nature",

  },
  {   
    img: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101795/A7300731-1024x654_xcwntd.jpg",
    width: 1024,
    height: 654,
    caption: "Great Outdoors",
    label: "Cozy Cottages",
  
  },
  {   
    img: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101810/A7300734-1024x645_xt0ed2.jpg",
    width: 1024,
    height: 645,
    caption: "Great Outdoors",
    label: "Corporate Retreats",
  
  },
  {   
    img: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101661/IMG_4475-1024x683_t0ijli.jpg",
    width: 1024,
    height: 645,
    caption: "Great Outdoors",
    label: "Corporate Retreats",
  
  },
  
  
] 

export default function CabinsPage() {
  return (
    <Box>
    <Head>
      <title>Cabins | Great Outdoors</title>
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
        // bgSize="cover"
        // bgPosition="center"
        // bgAttachment="fixed"
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
      ACCOMMODATION
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
        Cabins
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
      A lovely brick, stone and wood cottage, surrounded by trees. 
    </chakra.h2>
  </Box>
  )
}

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
  const Feature = (props) => {

    const DynamicFaIcon = ({ name }) => {
      // console.log('ICON!!')
      // console.log(name)
      const IconComponent = Icons[name];
      // console.log(IconComponent)
  
    
      if (!IconComponent) { // Return a default one
        return <Icons.FaCameraRetro size={24} />;
        // return <Icons.FaBeer />;

      }
    
      return <IconComponent size={24} color='#0e2a4e'  />;
    };
  

    return (
      <Flex mb={2} >
        <Flex shrink={0}>
          <Flex
            alignItems="center"
            justifyContent="center"
            h={{base:12, md: 24}}
            w={{base:12, md: 10}}
            rounded="md"
            _light={{ bg: "brand.500" }}
            color="gray.900"
          >


      
      <Box mr="4" boxSize={{base:'1em', md:'2em'}} >
        {/* <DynamicFaIcon name="FaCameraRetro" /> */}
        {/* <DynamicFaIcon name="FaGlassMartini" /> */}
        {/* <DynamicFaIcon name="FaCameraRetro" /> */}
        {/* <DynamicFaIcon name="FaBatteryFull" /> */}
        {/* <DynamicFaIcon name="FaLeaf" /> */}

        {/* <DynamicFaIcon name="FaBusinessTime" /> */}
        {/* <DynamicFaIcon name="FaBatteryFull" /> */}
        {/* <DynamicFaIcon name="FaUserClock" /> */}
        <DynamicFaIcon name={props.icon} />



      </Box>
      

            
          {/* <Icon
            mr={{base: 4, md: 6}}
            fontSize={{base: 18, md: 10}}
            // fontSize="16"

            boxSize={{base:'1em', md:'2em'}}
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          /> */}
        


          </Flex>
        </Flex>
        <Box ml={2}>
        <Text
        fontFamily={'navBarFont'} 
        letterSpacing={'1px'} 
        pt={{base:2, md: 2, lg: 4, xl: 4}} 
        lineHeight={{lg: '55px' ,xl:'55px'}} 
        // textColor='white'
        textColor='#0e2a4e'
        textAlign={'left'}
        fontWeight={600} 
        fontSize={{base:'md' ,lg: 'lg', xl:'lg'}}
        >
            {props.title}
          </Text>
          <Text 
                textColor={'gray.600'}
                fontFamily={'bodyFont'}  
                fontSize={{base:'sm', md: 'lg'}} 
                py={2} fontWeight={400}>
            {props.children}
          </Text>
        </Box>
      </Flex>
    );
  };


  return (
    <Box>

      <Box>
        <Text
        fontFamily={'navBarFont'} 
        letterSpacing={'1px'} 
        pb={{base:2, md: 2, lg: 4, xl: 4}} 
        lineHeight={{lg: '55px' ,xl:'55px'}} 
        // textColor='white'
        textColor='#0e2a4e'
        textAlign={'left'}
        fontWeight={800} 
        fontSize={{base:'35px' ,lg: '35px', xl:'50px'}}
        >
          Cabins
        </Text>
      </Box>

      <Box>
        <Text 
        textColor='#cf2e2e' fontFamily={'bodyFont'} 
        fontSize={{base:'sm', md: 'xl'}}
        pb={4}
        >
        Price from UGX 200,000 Night
        </Text>
      </Box>

      <Flex pb={8}>
        <Button  colorScheme={'red'} size={{base: 'sm', md: 'lg'}} fontFamily='bodyFont'>
          <Link href='/reservations' fontSize={{base: '7px', md: 'sm'}} >
          Book Now
          </Link>
        </Button>
      </Flex>

      <Box pb={{base: 12, md: 16}}>
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

      <Divider />

      <Box pt={12}>
        <Text
        fontFamily={'navBarFont'} 
        letterSpacing={'1px'} 
        py={{base:2, md: 2, lg: 4, xl: 4}} 
        lineHeight={{lg: '55px' ,xl:'55px'}} 
        // textColor='white'
        textColor='#0e2a4e'
        textAlign={'left'}
        fontWeight={800} 
        fontSize={{base:'xl' ,lg: 'xl', xl:'3xl'}}
        >
          Amenities
        </Text>


        <Box mt={{base: 4, lg: 2}}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: "grid" }}
              gridTemplateColumns={{ base:"repeat(3,1fr)",  md: "repeat(3,1fr)" }}
              gridColumnGap={{ md: 2 }}
              gridRowGap={{ md: 2 }}
            >
              <Feature
                title="Balcony or Terrace"
                icon={'FaTree'}
              >
                
              </Feature>

              <Feature
                title="Tea served every evening"
                icon={
                  'FaWind'
                }
              >
              </Feature>

              <Feature
                title="Shower"
                icon={
                  'FaRegLemon'
                }
              >
              </Feature>

              <Feature
                title="King size bed"
                icon={
                  'FaSwimmingPool'
                }
              >
              </Feature>

              <Feature
                title="Wifi"
                icon={
                  'FaWifi'
                }
              >
              </Feature>
            </Stack>
          </Box>

        {/* <SimpleGrid
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
        </SimpleGrid> */}



      </Box>

      <Box py={8}>
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

      <Box pb={6}>
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

      <Box pb={4}>
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

      <Box pb={4}>
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

      <Box pb={4}>
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

      <Box py={4}>
      <Button
        maxW={{base:'2xl', md:'6xl'}}
        as="a"
        colorScheme="red"
        // variant='outline'
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        // border={'2px'}
        rounded='lg'
        href='/reservations'
        fontFamily='bodyFont'
        // shadow={'lg'}
        // textColor={ 'white'}


        w={{
            base: "full",
            sm: "full",
        }}
        mb={{
            base: 2,
            sm: 0,
        }}
        size="lg"
        cursor="pointer"
        // fontFamily="Helvetica"

        >                        
          Book Now
        </Button>
      </Box>


    </Box>   
  )
}




