import React, { useRef } from "react";
import { useInView } from "framer-motion";

import { chakra, Box, Flex, Icon, Stack, Text, HStack, Divider, ScaleFade } from "@chakra-ui/react";
import { BsPerson } from 'react-icons/bs';
import * as Icons from "react-icons/fa";


export default function AmenitiesComponent(){
  const ref1 = useRef(null)
  const isInView1 = useInView(ref1)


  
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
      <Flex mb={4} >
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


      
      <Box mr="4" boxSize={{base:'1em', md:'1em'}} >
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
        <Box ml={4}>
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
    <Flex
      p={{base: 4,  md: 12, lg: 16, xl: 44}}
      w="full"
      justifyContent="center"
      alignItems="center"
      // bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101466/IMG_4045-scaled_umaqq6.jpg'}
      bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101466/IMG_4045-scaled_umaqq6.jpg'}
      bgSize="cover" bgPosition="center" bgAttachment="fixed"
                   overflowX='hidden'

      minH={{base:' 260vh', md:'170vh'}} 
    >
      {/* <ScaleFade initialScale={0.8}
          in={isInView1}> */}

      <Box 
      ref={ref1}
      py={{base: 20, lg:24}} px={{base:6, lg: 12}} bg="whiteAlpha.900" 

      border={'1px'}
      borderColor={'white'}
      rounded="xl">
        <Box maxW="7xl" mx="auto" px={{ base: 2, lg: 8 }}>
          <Box textAlign={{ lg: "center" }}>
              <Text textColor='#cf2e2e' fontFamily={'redTopFont'} fontSize={'sm'}>
              AMENITIES
              </Text>
             {/* <Text textColor='#0e2a4e' fontFamily={'navBarFont'} letterSpacing={'1px'} lineHeight={{lg: '55px' ,xl:'55px'}} fontWeight={800} fontSize={{base:'45px' ,lg: '45px', xl:'50px'}}> */}
               

             <Text  fontFamily={'navBarFont'} 
                letterSpacing={'1px'} 
                pb={{base:8, md: 4, lg: 4, xl: 8}} 
                lineHeight={{lg: '55px' ,xl:'55px'}} 
                // textColor='white'
                textColor='#0e2a4e'              
                fontWeight={800} 
                fontSize={{base:'30px' ,lg: '35px', xl:'50px'}}>
              Make Your Stay Memorable
            </Text>
          </Box>

          <Box mt={{base: 4, lg: 10}}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: "grid" }}
              gridTemplateColumns={{ base:"repeat(3,1fr)",  md: "repeat(3,1fr)" }}
              gridColumnGap={{ md: 8 }}
              gridRowGap={{ md: 10 }}
            >
              <Feature
                title="Feel nature"
                icon={'FaTree'}
              >
                The resort is right in the forest, and surrounded by airy lush green spaces.
              </Feature>

              <Feature
                title="Open air spaces"
                icon={
                  'FaWind'
                }
              >
                Eat, lounge or just take a walk in the forest, smell the eucalyptus in the air.
              </Feature>

              <Feature
                title="Farm-to-plate"
                icon={
                  'FaRegLemon'
                }
              >
                Fresh food, right from the farm prepared by an experienced chef.
              </Feature>

              <Feature
                title="Swimming Pool"
                icon={
                  'FaSwimmingPool'
                }
              >
                Two varied sized swimming pools are up and ready for you to take a dive into.
              </Feature>

              <Feature
                title="Pick & Drop Facility"
                icon={
                  'FaCar'
                }
              >
                For groups and individuals we can arrange your pick-up and drop off.
              </Feature>

              <Feature
                title="Wifi"
                icon={
                  'FaWifi'
                }
              >
                Limited wifi due to our remote location, you can access wifi in designated locations
              </Feature>
            </Stack>
          </Box>
        </Box>
      </Box>

      {/* </ScaleFade> */}
    </Flex>
  );
};
