import React from 'react'
import { Box, Center, Text, Button, HStack, Divider } from '@chakra-ui/react'
import Image from 'next/image'

const OffersComponent = () => {
  return (
    <Box minH={'100vh'} >
      <Box minH={{base:' 160vh', md:'100vh'}} bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720012553/IMG_8943-2_jh9wgb.jpg'} 
             bgSize="cover" bgPosition="center" bgAttachment="fixed" 
             overflowX='hidden'


       >

        <HStack p={{base:4, md: 4,lg:8, xl: 20}} float={{base: 'none', md:'right'}}>
          <Box 
          bg={'whiteAlpha.300'} 
          border={'2px'}
          borderColor='white'
          maxW={{base: '6xl', md: 'lg', lg: 'md',  xl:'xl'}}
          my={{base:'64', md: '0vh'}}

           p={{base: 3, md: 6, lg:10, xl: 14}} 
           pt={{base: 2,  md: 12, xl: 24}}

           rounded={'lg'}>

          <Box p={{base: 4, md: 4, lg: 0}}>
            <HStack mt={{base:6,  md:2}}>
                <Divider borderColor='#cf2e2e'  w={{base: '35px', lg: '45px'}}  />
              <Text textColor='#cf2e2e' fontFamily={'redTopFont'} fontSize={'sm'}>
                OUR OFFER
              </Text>
            </HStack>

                <Text  fontFamily={'navBarFont'} 
                letterSpacing={'1px'} 
                pb={{base:8, md: 4, lg: 4, xl: 8}} 
                lineHeight={{lg: '55px' ,xl:'55px'}} 
                textColor='white'
                // textColor='#0e2a4e'              
                fontWeight={800} 
                fontSize={{base:'30px' ,lg: '35px', xl:'50px'}}>
            Christmas Season Full Board Offers
            </Text>

            <Text 
                textColor='white'
                fontFamily={'bodyFont'}  
                fontSize={{base:'sm', md: 'lg'}} 
                py={2} fontWeight={400}>
              Double Cottages at UGX500,000 and Family Cottages starting at UGX650,000 with all meals included.
            </Text>
            <Text 
                textColor='white'
                fontFamily={'bodyFont'}  
                fontSize={{base:'sm', md: 'lg'}} 
                py={2} fontWeight={400}>
              Single and Double Deluxe Rooms starting at UGX300,000 | Family Deluxe Rooms starting UGX550,000
            </Text>

            <Box pt={{base:10, md: 6}} pb={{base:2, md: 6}}>
              <Button fontFamily={'bodyFont'} colorScheme='red' textColor='white' fontSize='lg'>
                See Offers and Discounts
              </Button>
            </Box>
            </Box>
          </Box>

        </HStack>
        </Box>


        <Box>

        </Box>
        
      </Box>
    // </Box>
  )
}

export default OffersComponent