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


import NavBar from '../components/navbar' 
import Footer from '../components/footer' 

import ImageGridPhotoGallery from '../components/image-grid-Lightbox/imageGridPhotoGallery'

const imageGridImages =[

  {   
      src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720008924/MG_2634-3-e1671000104768_k2zbhy.jpg",
      width: 1000,
      height: 666,
      caption: "Great Outdoors",
  },
  {   
      src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101466/IMG_4045-scaled_umaqq6.jpg",
      width: 1000,
      height: 666,
      caption: "Great Outdoors",
  },
  {   
      src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101623/IMG_9124-scaled_tvyhqg.jpg",
      width: 1000,
      height: 666,
      caption: "Great Outdoors",
  },
  {   
    src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101643/IMG_0685-scaled_hwn4m2.jpg",
    width: 1000,
    height: 666,
    caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101623/IMG_9124-scaled_tvyhqg.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101644/IMG_4475-scaled_zlmfjc.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101644/IMG_4475-scaled_zlmfjc.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101654/IMG_9093-scaled_lb7gia.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101656/IMG_9127-1024x683_mtfxvr.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101663/IMG_4353-1024x683_wt2qsj.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101678/IMG_3959-scaled_jd1awh.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101689/IMG_9107-scaled_cbnbbk.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101728/A7300369-1024x683_cxdn75.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724104893/IMG_9060_mtrnge.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724104889/A7300790-1024x683_ifl3hn.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724104883/A7300768-1024x683_qlsaig.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724104874/MG_2065-1024x683_khthhc.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724104863/MG_1907-1024x683_agoyxy.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724104854/IMG_3897-1024x683_kpibsc.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724104851/IMG_3908-1024x683_suoh8v.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724104842/A7300376-1024x683_uv82ns.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724104810/IMG_3701-scaled_agc8bi.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101810/A7300734-1024x645_xt0ed2.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101818/A7300337-1024x683_trpffp.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1723823743/A7300820-1024x683_rh8gsj.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720103322/A7301110-1024x665_rxooji.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720104864/A7301120-1024x683_ulqp5l.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},





] 


export default function GalleryPage() {
  return (
    <Box 
    bgImage={
      'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720099212/IMG_844443-2_lvd6bz.jpg'
    }
    bgSize="cover"
    bgRepeat='no-repeat'
    bgPosition="center"
    bgAttachment="fixed"
    overflowX='hidden'
    minH={'80dvh'}
    >
    <Head>
      <title>Gallery | Great Outdoors</title>
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
      //   bg={'#0b1722'}
        // bgImage={
        //   'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720099212/IMG_844443-2_lvd6bz.jpg'
        // }
        // bgSize="cover"
        // bgPosition="center"
        // bgAttachment="fixed"
        // overflowX='hidden'
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
      ABOUT
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
        Gallery
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
      See scenes from around our expansive grounds 
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
      <Box >
              <ImageGridPhotoGallery photos={imageGridImages} />
      </Box>
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




