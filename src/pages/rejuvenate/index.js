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

import NavBar from '../../components/navbar' 
import Footer from '../../components/footer' 



export default function RejuvenatePage() {
  return (
    <Box>
      <Head>
        <title>Rejuvenate | Great Outdoors</title>
        <meta name="description" content="Retreat.Rest.Rejuvenate" />

        <meta property="og:title" content="Great Outdoors Kalanamu" />
        <meta
          property="og:description"
          content="Eco-friendly forest resort, located only 45 minutes (about 35km) drive from Kampala"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716989029/tgo-logo-e1671037379448_tee1nd.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716989029/tgo-logo-e1671037379448_tee1nd.png"
        />
        <meta property="og:url" content="https://greatoutdoorsuganda.com/" />
        <meta property="og:type" content="website" />

        <link
          rel="icon"
          href="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716989029/tgo-logo-e1671037379448_tee1nd.png"
        />
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
        <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"} p={{base:8}}>
          <chakra.h3
            fontWeight={"bold"}
            fontSize={20}
            textTransform={"uppercase"}
            color={"white"}
            fontFamily="bodyFont"
            align="center"
          >
            GET BACK IN TOUCH WITH YOURSELF
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
              Rejuvenate
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
            Relax, breathe in deep, and bask in the freshness of the Great Outdoors!

          </chakra.h2>
        </Box>

        <Section1 />

        <Section2 />

        <Section3 />

        <Section4 />

        <Section5 />


      </Box>

      <Box>
        <Footer />
      </Box>
    </Box>
  );
}

const Section1 = () => {


  return (
    <Container
    maxW={{ base: "95%", md: "90%" }}
    py={4}
    minHeight={{ base:'190vh', md: "110vh" }}
    // background="rgba(240,255,244,0.55)"
    // bg="whiteAlpha.700"
    bgImage={
    "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724943928/IMG_9060-2_hbfqd4.jpg"
  }
  bgSize="cover"
  bgPosition="center"
  bgAttachment="fixed"
    rounded="3xl"
    shadow="2xl"
    border={"1px"}
    borderColor={"white"}
    mt={{ base: "10vh", lg: "25vh" }}
  >
    <Flex
      textAlign={"center"}
      pt={0}
      justifyContent={"right"}
      direction={"column"}
      width={"full"}
      overflow={"hidden"}
    >
      <Section1Content />

    </Flex>
  </Container>



  )
} 

const Section1Content = () => {
  return (
    <HStack p={{base:2, md: 4,lg:8, xl: 20}} float={{base: 'none', md:'left'}}>
    <Box 
    bg={'whiteAlpha.900'} 
    border={'2px'}
    borderColor='white'
    shadow={'xl'}

    maxW={{base: '6xl', md: 'lg', lg: 'md',  xl:'xl'}}
    p={{base: 3, md: 6, lg:10, xl: 14}} rounded={'lg'}
    pt={{base: 8,  md: 12, xl: 24}}>

    <Box p={{base: 4, md: 4, lg: 0}}>
        <HStack mt={{base:6,  md:2}}>
            <Divider borderColor='#cf2e2e'  w={{base: '35px', lg: '45px'}}  />
        <Text textColor='#cf2e2e' fontFamily={'redTopFont'} fontSize={'sm'}>
        GET-AWAY & RETREAT
        </Text>
        </HStack>

        <Text  fontFamily={'navBarFont'} 
        letterSpacing={'1px'} 
        pb={{base:8, md: 4, lg: 4, xl: 8}} 
        lineHeight={{lg: '55px' ,xl:'55px'}} 
        // textColor='white'
        textColor='#0e2a4e'
        textAlign={'left'}
        fontWeight={800} fontSize={{base:'35px' ,lg: '35px', xl:'50px'}}>
        Take a dip
        </Text>

        <Text 
        // textColor='white'
        // textColor='blue.800'
        textColor='#0e2a4e'

        fontFamily={'bodyFont'}           textAlign={'left'}
        fontSize='lg' py={4} fontWeight={400}>
          Let your muscles relax as you ease into the water, surrounded 
          by beautiful forest and open skies. Breathe deeply, de-stress, and enjoy the wonders of a 
          different kind of forest bath.
        </Text>

        <Text 
        textColor='#cf2e2e'
        // textColor='#0e2a4e'

        // textColor='blue.800'
        textAlign={'left'}
        pt={6}

        fontFamily={'bodyFont'} fontSize='lg'>
          Open Daily: 7:00pm - 11:00pm
        </Text>

        <Flex py={{base:10, md: 6}} >
        <Button fontFamily={'bodyFont'} colorScheme='red' alignSelf={'left'} textColor='white' fontSize='lg'>
            Reserve Now
        </Button>
        </Flex>
        </Box>
    </Box>

    </HStack>      
  )
}


const Section2 = () => {


  return (
    <Container
    maxW={{ base: "95%", md: "90%" }}
    py={4}
    minHeight={{ base:'190vh', md: "110vh" }}
    // background="rgba(240,255,244,0.55)"
    // bg="whiteAlpha.700"
              bgImage={
    "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724943926/IMG-20211216-WA0012-e1671046591860_zmxnir.jpg"
  }
  bgSize="cover"
  bgPosition="center"
  bgAttachment="fixed"
    rounded="3xl"
    shadow="2xl"
    border={"1px"}
    borderColor={"white"}
    mt={{ base: "35vh", lg: "25vh" }}
  >
    <Flex
      textAlign={"center"}
      pt={0}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
      overflow={"hidden"}
    >
      <Section2Content />


    </Flex>
  </Container>



  )
} 

const Section2Content = () => {
  return (
    <HStack p={{base:2, md: 4,lg:8, xl: 20}} float={{base: 'none', md:'left'}}>
    <Box 
    bg={'whiteAlpha.900'} 
    border={'2px'}
    borderColor='white'
    shadow={'xl'}

    maxW={{base: '6xl', md: 'lg', lg: 'md',  xl:'xl'}}
    p={{base: 3, md: 6, lg:10, xl: 14}} rounded={'lg'}
    pt={{base: 8,  md: 12, xl: 24}}>

    <Box p={{base: 4, md: 4, lg: 0}}>
        <HStack mt={{base:6,  md:2}}>
            <Divider borderColor='#cf2e2e'  w={{base: '35px', lg: '45px'}}  />
        <Text textColor='#cf2e2e' fontFamily={'redTopFont'} fontSize={'sm'}>
        FOREST BATHING
        </Text>
        </HStack>

        <Text  fontFamily={'navBarFont'} 
        letterSpacing={'1px'} 
        pb={{base:8, md: 4, lg: 4, xl: 8}} 
        lineHeight={{lg: '55px' ,xl:'55px'}} 
        // textColor='white'
        textColor='#0e2a4e'
        textAlign={'left'}
        fontWeight={800} fontSize={{base:'35px' ,lg: '35px', xl:'50px'}}>
        Revitalize your spirit.
        </Text>

        <Text 
        // textColor='white'
        // textColor='blue.800'
        textColor='#0e2a4e'

        fontFamily={'bodyFont'}           textAlign={'left'}
        fontSize='lg' py={4} fontWeight={400}>
          Originating from Japan, Forest Bathing is a powerful antidote to the pressures of the modern world,
           proven to deliver lasting benefits to your physical and mental wellbeing, and creating within you a
            profound connection to nature.
        </Text>
        <Text 
        // textColor='white'
        // textColor='blue.800'
        textColor='#0e2a4e'

        fontFamily={'bodyFont'}           textAlign={'left'}
        fontSize='lg' py={4} fontWeight={400}>
          Our forest guides will lead you through a series of fun group activities and show you some great spots
           and fresh fruit trees when in season. Come and enjoy this goodness.
        </Text>

        <Text 
        textColor='#cf2e2e'
        // textColor='#0e2a4e'

        // textColor='blue.800'
        textAlign={'left'}
        pt={6}

        fontFamily={'bodyFont'} fontSize='lg'>
          Just take to the forest, immerse yourself and wonder among the trees.
        </Text>

        <Flex py={{base:10, md: 6}} justify={'left'}>
        <Button fontFamily={'bodyFont'} colorScheme='red'  textColor='white' fontSize='lg'>
            Contact to Book
        </Button>
        </Flex>
        </Box>
    </Box>

    </HStack>      
  )
}


const Section3 = () => {


  return (
    <Container
    maxW={{ base: "95%", md: "90%" }}
    py={4}
    minHeight={{ base:'190vh', md: "110vh" }}
    // background="rgba(240,255,244,0.55)"
    // bg="whiteAlpha.700"
              bgImage={
    "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724943925/IMG-20211216-WA0060_ubzh0b.jpg"
  }
  bgSize="cover"
  bgPosition="center"
  bgAttachment="fixed"
    rounded="3xl"
    shadow="2xl"
    border={"1px"}
    borderColor={"white"}
    mt={{ base: "35vh", lg: "25vh" }}
  >
    <Flex
      textAlign={"center"}
      pt={0}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
      overflow={"hidden"}
    >
      <Section3Content />

    </Flex>
  </Container>



  )
} 



const Section3Content = () => {
  return (
    <HStack p={{base:2, md: 4,lg:8, xl: 20}} float={{base: 'none', md:'left'}}>
    <Box 
    bg={'whiteAlpha.900'} 
    border={'2px'}
    borderColor='white'
    shadow={'xl'}

    maxW={{base: '6xl', md: 'lg', lg: 'md',  xl:'xl'}}
    p={{base: 3, md: 6, lg:10, xl: 14}} rounded={'lg'}
    pt={{base: 8,  md: 12, xl: 24}}>

    <Box p={{base: 4, md: 4, lg: 0}}>
        <HStack mt={{base:6,  md:2}}>
            <Divider borderColor='#cf2e2e'  w={{base: '35px', lg: '45px'}}  />
        <Text textColor='#cf2e2e' fontFamily={'redTopFont'} fontSize={'sm'}>
        BIKE TRAILS
        </Text>
        </HStack>

        <Text  fontFamily={'navBarFont'} 
        letterSpacing={'1px'} 
        pb={{base:8, md: 4, lg: 4, xl: 8}} 
        lineHeight={{lg: '55px' ,xl:'55px'}} 
        // textColor='white'
        textColor='#0e2a4e'
        textAlign={'left'}
        fontWeight={800} fontSize={{base:'35px' ,lg: '35px', xl:'50px'}}>
        Your body & mind
        </Text>

        <Text 
        // textColor='white'
        // textColor='blue.800'
        textColor='#0e2a4e'

        fontFamily={'bodyFont'}           textAlign={'left'}
        fontSize='lg' py={4} fontWeight={400}>
          Unwind with a leisurely bike ride though the forest.
           Discover Shinrin-Yoku, the ancient art of "forest bathing" and bask in the fresh eucalyptus breeze.

        </Text>


        <Text 
        textColor='#cf2e2e'
        // textColor='#0e2a4e'

        // textColor='blue.800'
        textAlign={'left'}
        pt={6}

        fontFamily={'bodyFont'} fontSize='lg'>
This and many more nature based activities at the tips of your fingers        </Text>

        <Flex py={{base:10, md: 6}} justify={'left'}>
        <Button fontFamily={'bodyFont'} colorScheme='red'  textColor='white' fontSize='lg'>
            Contact to Book
        </Button>
        </Flex>
        </Box>
    </Box>

    </HStack>      
  )
}

const Section4 = () => {


  return (
    <Container
    maxW={{ base: "95%", md: "90%" }}
    py={4}
    minHeight={{ base:'190vh', md: "110vh" }}
    // background="rgba(240,255,244,0.55)"
    // bg="whiteAlpha.700"
              bgImage={
    "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724943927/IMG_8943-2_gdlxkq.jpg"
  }
  bgSize="cover"
  bgPosition="center"
  bgAttachment="fixed"
    rounded="3xl"
    shadow="2xl"
    border={"1px"}
    borderColor={"white"}
    mt={{ base: "35vh", lg: "25vh" }}
  >
    <Flex
      textAlign={"center"}
      pt={0}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
      overflow={"hidden"}
    >
      <Section4Content />

    </Flex>
  </Container>



  )
} 



const Section4Content = () => {
  return (
    <HStack p={{base:2, md: 4,lg:8, xl: 20}} float={{base: 'none', md:'left'}}>
    <Box 
    bg={'whiteAlpha.900'} 
    border={'2px'}
    borderColor='white'
    shadow={'xl'}

    maxW={{base: '6xl', md: 'lg', lg: 'md',  xl:'xl'}}
    p={{base: 3, md: 6, lg:10, xl: 14}} rounded={'lg'}
    pt={{base: 8,  md: 12, xl: 24}}>

    <Box p={{base: 4, md: 4, lg: 0}}>
        <HStack mt={{base:6,  md:2}}>
            <Divider borderColor='#cf2e2e'  w={{base: '35px', lg: '45px'}}  />
        <Text textColor='#cf2e2e' fontFamily={'redTopFont'} fontSize={'sm'}>
        CAMP FIRES
        </Text>
        </HStack>

        <Text  fontFamily={'navBarFont'} 
        letterSpacing={'1px'} 
        pb={{base:8, md: 4, lg: 4, xl: 8}} 
        lineHeight={{lg: '55px' ,xl:'55px'}} 
        // textColor='white'
        textColor='#0e2a4e'
        textAlign={'left'}
        fontWeight={800} fontSize={{base:'35px' ,lg: '35px', xl:'50px'}}>
        Watch the sparks fly...
        </Text>

        <Text 
        // textColor='white'
        // textColor='blue.800'
        textColor='#0e2a4e'

        fontFamily={'bodyFont'}           textAlign={'left'}
        fontSize='lg' py={4} fontWeight={400}>
          Bring your friends and family and cuddle up around a campfire. 
          Some of the best memories are made this way. Tell stories, roast some marshmallows, 
          reflect on the day you just had, and plan your next trip back. We'll keep the fire lit for you.

        </Text>


        <Text 
        textColor='#cf2e2e'
        // textColor='#0e2a4e'

        // textColor='blue.800'
        textAlign={'left'}
        pt={6}

        fontFamily={'bodyFont'} fontSize='lg'>
          Let story time be one to remember.
        </Text>

        <Flex py={{base:10, md: 6}} justify={'left'}>
        <Button fontFamily={'bodyFont'} colorScheme='red'  textColor='white' fontSize='lg'>
            Contact to Book
        </Button>
        </Flex>
        </Box>
    </Box>

    </HStack>      
  )
}


const Section5 = () => {


  return (
    <Container
    maxW={{ base: "95%", md: "90%" }}
    py={4}
    minHeight={{ base:'190vh', md: "110vh" }}
    // background="rgba(240,255,244,0.55)"
    // bg="whiteAlpha.700"
              bgImage={
    "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724943926/IMG_3184-1024x683-1-e1671047429238_ucl3jf.jpg"
  }
  bgSize="cover"
  bgPosition="center"
  bgAttachment="fixed"
    rounded="3xl"
    shadow="2xl"
    border={"1px"}
    borderColor={"white"}
    mt={{ base: "35vh", lg: "25vh" }}
  >
    <Flex
      textAlign={"center"}
      pt={0}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
      overflow={"hidden"}
    >
      <Section5Content />

    </Flex>
  </Container>



  )
} 



const Section5Content = () => {
  return (
    <HStack p={{base:2, md: 4,lg:8, xl: 20}} float={{base: 'none', md:'left'}}>
    <Box 
    bg={'whiteAlpha.900'} 
    border={'2px'}
    borderColor='white'
    shadow={'xl'}

    maxW={{base: '6xl', md: 'lg', lg: 'md',  xl:'xl'}}
    p={{base: 3, md: 6, lg:10, xl: 14}} rounded={'lg'}
    pt={{base: 8,  md: 12, xl: 24}}>

    <Box p={{base: 4, md: 4, lg: 0}}>
        <HStack mt={{base:6,  md:2}}>
            <Divider borderColor='#cf2e2e'  w={{base: '35px', lg: '45px'}}  />
        <Text textColor='#cf2e2e' fontFamily={'redTopFont'} fontSize={'sm'}>
        FAMILY EXPERIENCE
        </Text>
        </HStack>

        <Text  fontFamily={'navBarFont'} 
        letterSpacing={'1px'} 
        pb={{base:8, md: 4, lg: 4, xl: 8}} 
        lineHeight={{lg: '55px' ,xl:'55px'}} 
        // textColor='white'
        textColor='#0e2a4e'
        textAlign={'left'}
        fontWeight={800} fontSize={{base:'35px' ,lg: '35px', xl:'50px'}}>

          Something for everyone.
        </Text>

        <Text 
        // textColor='white'
        // textColor='blue.800'
        textColor='#0e2a4e'

        fontFamily={'bodyFont'}           textAlign={'left'}
        fontSize='lg' py={4} fontWeight={400}>
          Sometimes the Great Outdoors is better with the people you love.
        </Text>


        <Text 
        textColor='#cf2e2e'
        // textColor='#0e2a4e'

        // textColor='blue.800'
        textAlign={'left'}
        pt={6}

        fontFamily={'bodyFont'} fontSize='lg'>
This and many more nature based activities at the tips of your fingers        </Text>

        <Flex py={{base:10, md: 6}} justify={'left'}>
        <Button fontFamily={'bodyFont'} colorScheme='red'  textColor='white' fontSize='lg'>
            Contact to Book
        </Button>
        </Flex>
        </Box>
    </Box>

    </HStack>      
  )
}



