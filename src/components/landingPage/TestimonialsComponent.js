import React from 'react'
import { Box, Center, Text, Button, HStack, Icon, Divider, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'
import TestimonialCard from './TestimonialCard'
import Carousel from '../carousel3'

const testimonials = [
  {
    name: 'ISU, Board of Directors',
    role: 'Governance Course ',
    content: 'Your flexibility and willingness to rethink the agenda midway was necessary to ensure the successful outcomes.',
    avatar:
      'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1718637864/images_1_jje5hj.jpg',
  },

]


const TestimonialsComponent = () => {
  return (
    <Box minH={'100vh'} pt={10} bg={{base:'#ffffff' , lg:'#0e1720'}} >
      <Box bg={'white'} mx={10}  p={12} rounded='xl'>

        <HStack p={28}>
          <Box rounded={'2xl'} bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720012115/IMG_4029-scaled_wygye5.jpg'} 
          // maxW={'35vw'} 
          p={12}>
          <HStack>
               <Divider borderColor='#cf2e2e'  w={{base: '35px', lg: '45px'}} />
            <Text textColor='#cf2e2e' fontFamily={'redTopFont'} fontSize={'sm'}>
            TESTIMONIALS
            </Text>
            </HStack>
            <Text textColor='white' fontFamily={'navBarFont'} letterSpacing={'1px'} pb={10} lineHeight={{lg: '55px' ,xl:'55px'}} fontWeight={800} fontSize={{base:'45px' ,lg: '45px', xl:'50px'}}>
              Clients Review
            </Text>

            <Box py={4}>
              <Button 
              textColor='#cf2e2e'  
              letterSpacing={'1px'}
              fontFamily={'redTopFont'} 
              fontSize={'lg'}
              _hover={{ bg:'black', textColor: 'white'}}
              >
                Verified Google Reviews
              </Button>
            </Box>
          </Box>

          {/* <Box bg={'red.600'} h={'15vh'} w={'10vw'}>
            <Text textColor='white' fontFamily={'navBarFont'} fontSize='lg'>
              Satisfied Customers
            </Text>
            <Icon
              boxSize={6}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
            </Icon>

          </Box> */}

          <Box>
            {/* <Image
              src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720008924/MG_2634-3-e1671000104768_k2zbhy.jpg'}
              width={1000}
              height={666}      
            /> */}

            <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={'20'} mt={{base:10, lg:8}} mb={16} mx={'auto'}>
                    {testimonials.map((cardInfo, index) => (
                      <TestimonialCard key={index} {...cardInfo} index={index} />
                    ))}
            </SimpleGrid>
            </Box>

        </HStack>
        </Box>


        <Box>

        </Box>
        
      </Box>
    // </Box>
  )
}

export default TestimonialsComponent