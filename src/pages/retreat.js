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
  
  
  
  export default function RetreatPage() {
    return (
      <Box>
        <Head>
          <title>Retreat | Great Outdoors</title>
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
              Corporate Packages
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
                Retreats
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
              Relax, enjoy get-aways with your colleagues, friends, and
              reconnect.
            </chakra.h2>
          </Box>

          <Section1 />

          <Section2 />

          <Section3 />


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
      "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724170783/IMG_2432-2-scaled-e1671037067747_xsovzl.jpg"
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
        justifyContent={"center"}
        direction={"column"}
        width={"full"}
        overflow={"hidden"}
      >
        <Section1Content />

      </Flex>
    </Container>



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
      "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724170789/IMG_4904-Copy_xd8f6m.jpg"
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

  const Section3 = () => {


    return (
      <Container
      maxW={{ base: "95%", md: "90%" }}
      py={4}
      minHeight={{ base:'190vh', md: "110vh" }}
      // background="rgba(240,255,244,0.55)"
      // bg="whiteAlpha.700"
                bgImage={
      "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724170785/IMG_2498-2-scaled-e1671048069683_vfr5dv.jpg"
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
          Take a break from the office.
          </Text>

          <Text 
          // textColor='white'
          // textColor='blue.800'
          textColor='#0e2a4e'

          fontFamily={'bodyFont'}           textAlign={'left'}
          fontSize='lg' py={4} fontWeight={400}>
            The Great Outdoors is where people come for serene getaways, unforgettable weekends. Relax, 
            enjoy corporate retreats, and reconnect.
          </Text>
          <Text 
          // textColor='white'
          textColor='#0e2a4e'

          // textColor='blue.800'
          fontFamily={'bodyFont'}
          textAlign={'left'}

          fontSize='lg'>
            The well-designed cottages, fully in harmony with nature (made from and of the forest!), have modern 
            comforts and are nestled among the trees, making the resort the ideal retreat for nature lovers.
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
              Contact to Book
          </Button>
          </Flex>
          </Box>
      </Box>

      </HStack>      
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
          REJUVENATE AND BOND
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
          Ride, Walk, Run
          </Text>

          <Text 
          // textColor='white'
          // textColor='blue.800'
          textColor='#0e2a4e'

          fontFamily={'bodyFont'}           textAlign={'left'}
          fontSize='lg' py={4} fontWeight={400}>
            This exclusive eco-friendly retreat provides a unique space to rejuvenate your body, 
            senses and spirits while taking in the goodness of the forest life along the way.
          </Text>

          <Text 
          textColor='#cf2e2e'
          // textColor='#0e2a4e'

          // textColor='blue.800'
          textAlign={'left'}
          pt={6}

          fontFamily={'bodyFont'} fontSize='lg'>
            Ask about our activity list, or make a custom booking for your team.
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
          CONFERENCES & TRAININGS
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
          Events & meetings
          </Text>

          <Text 
          // textColor='white'
          // textColor='blue.800'
          textColor='#0e2a4e'

          fontFamily={'bodyFont'}           textAlign={'left'}
          fontSize='lg' py={4} fontWeight={400}>
            Efficient meetings and events ought to happen in spacious spaces that inspire fun, creativity and comfort for everyone.

          </Text>
          <Text 
          // textColor='white'
          textColor='#0e2a4e'

          // textColor='blue.800'
          fontFamily={'bodyFont'}
          textAlign={'left'}

          fontSize='lg'>
            At the Great Outdoors, you could use our elaborate, tropical and beautiful gardens or our luxurious boardroom that 
            will accommodate the whole team with a perfect environment to keep you focused.
          </Text>

          <Text 
          textColor='#cf2e2e'
          // textColor='#0e2a4e'

          // textColor='blue.800'
          textAlign={'left'}
          pt={6}

          fontFamily={'bodyFont'} fontSize='lg'>
            Free Wifi, Special stay offers, Projector & Screen, refreshments on order.
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
  
  
  const RejuvenateAndBondContent = () => {
    return (
        <Box
        borderWidth='1px'
         borderRadius='xl'
        borderColor='purple.500'
        shadow='xl'
       //  overflow='hidden'
       padding={8}
       mx={{md: 10,lg:20}}
       // paddingRight={12}
       background="whiteAlpha.700"
       my={{base: 16,md:20, lg: 20}}
     >

            <Box overflow='hidden' m={{base: 2, md: 6}} borderRadius={'10px'}>
            <Image
                    src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1715259596/PP1_w92zkp.jpg'}
                    width={570*2}
                    height={320}
                
                    
                    />
            </Box>

       <Text
           bgClip="text"
           bgGradient='linear(to-r, blackAlpha.800, purple.500)'
           fontWeight="extrabold"
           textAlign='left'
           fontSize={{ base: "xl",md: "3xl",}}
           p={{base: 4, lg:4}}
           fontFamily='bodyFont'
       >
         Services are tailor-made according to the stage and may include, but are not limited to the following:

       </Text>
  
       <Box  >
       <SimpleGrid columns={{base: 1, md:1, lg: 1}}  >
         <Box  mt={2} mb={{lg:20}} >
           <SimpleGrid columns={1} spacing={6}>
                <SolutionsListItem text=" Formulation and alignment of the vision, mission and school motto; clarity is the most important selling point a new school can have. We will enable you to formulate your message clearly and concisely, to raise interest and ensure you attract the families who will benefit the most from what you offer." />
                <SolutionsListItem text="Locating and/or design of school premises; working with your architects, we advise on aspects of school layout and design which support and promote the type of learning and communication you aim to achieve." />
                <SolutionsListItem text="Marketing, website, prospectus, use of social media and other school publications" />
                <SolutionsListItem text="Advice on legal and statutory requirements, including health, safety and emergency procedures & guidance." /> 
                <SolutionsListItem text="Creation and alignment of school policies and procedures" />
                <SolutionsListItem text="Financial planning and resourcing to fit your budget" />
                <SolutionsListItem text="Organizational set up and job descriptions, including defining the type of leadership you require." />
                <SolutionsListItem text="Curriculum design and assessment processes" />
                <SolutionsListItem text="Staff induction, leadership mentoring and training" />
                <SolutionsListItem text="Planning launch events and school calendar" />
                <SolutionsListItem text="On-going professional support firmly grounded in the reality of forming and building a school culture and systems" />
                <SolutionsListItem text="​For the owners of newly acquired schools we offer support with re-branding; renewing the vision and mission and overhaul of buildings, curriculum and teaching approaches." />
                
           </SimpleGrid>
         </Box>
       </SimpleGrid>
       </Box>
       
     </Box>
    )
  }
  
  
  const ConferencesAndTrainingsContent = () => {
    return(
      <Box>
        Heyo
      </Box>
    )
  }

  
  const SolutionsListItem = (props) => {
    return (
        <Box
        maxW='5xl' borderWidth='1px' borderRadius='lg' overflow='hidden'
        padding={3}
        paddingRight={{base:8,md:12}}
        // bgColor="gray.100"
        background="whiteAlpha.800"
        // border='30px'
        // shadow={'md'}
        >
        <HStack  align={'flex-start'} >
          
          <Box color={'green.400'} px={2} >
            <Icon as={CheckIcon} />
          </Box>
          <VStack align={'start'}>
            <Text color={'black'} textAlign='left' fontWeight={200} fontSize={'xl'} fontFamily='bodyFont' >{props.text}</Text>
          </VStack>
        </HStack>
        </Box>
    )
  }
  
  
  
  const CallToAction = () => {
    return (
      <Flex
      // bg="#edf3f8"
      // _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      {/* <Box bg="gray.50" _dark={{ bg: "gray.800" }}> */}
      <Box>
        <Box
          // maxW={{md: '85vw', lg: '8xl'}}
          w={{ md: "3xl", lg: "5xl" }}
          mx="auto"
          py={{ base: 12, lg: 16 }}
          px={{ base: 4, lg: 8 }}
          display={{ lg: "flex" }}
          alignItems={{ lg: "center" }}
          justifyContent={{ lg: "space-between" }}
        >
          <chakra.h2
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
            color="purple.900"
            fontFamily='bodyFont'
            textAlign='left'

            _dark={{ color: "gray.100" }}
          >
            <chakra.span display="block">
            Don&apos;t Leave it to Chance
            </chakra.span>
            <chakra.span
              display="block"
              // color="brand.600"
              // _dark={{ color: "gray.500" }}
              bgClip="text"
            bgGradient="linear(to-r, purple.900, purple.300)"
            pr={10}
            >
              Take your School to the Next Level!
            </chakra.span>
          </chakra.h2>
          <Stack
            direction={{ base: "column" }}
            mt={{ base: 8, lg: 0 }}
            flexShrink={{ lg: 0 }}
          >
                  <Button
                  as="a"
                  href="/info/contact-enquiry"
                  colorScheme="whiteAlpha"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  shadow={'lg'}
                  border={'1px'}
                  rounded={'6px'}
                  borderColor='purple'
                  textColor={useColorModeValue('purple.700', 'white')}
  
  
                  w={{
                      base: "full",
                      sm: "auto",
                  }}
                  mb={{
                      base: 2,
                      sm: 0,
                  }}
                  size="lg"
                  cursor="pointer"
                  fontFamily='bodyFont'
  
                  >
                  Talk to us Today
                  <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                      <path
                      fillRule="evenodd"
                      d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                      clipRule="evenodd"
                      />
                  </Icon>
                  </Button>
          </Stack>
        </Box>
      </Box>
    </Flex>
    )
  }
