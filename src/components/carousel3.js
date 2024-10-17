import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
import { Box, Flex, Text} from '@chakra-ui/react'



const Carousel3 =(props)=> {

  const slides = props.slides;

    // const slides =[
    //     {   
    //         img: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1719928250/IMG_3683-scaled_wby9wk.jpg",
    //         width: 770,
    //         height: 300,
    //         caption: "Great Outdoors",
    //         label: "At Home in Nature",
    
    //     },
    //     {   
    //       img: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716990249/MG_2753-2_vkitl3.jpg",
    //       width: 1024,
    //       height: 683,
    //       caption: "Great Outdoors",
    //       label: "Cozy Cottages",
        
    //     },
    //     {   
    //       img: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716990366/MG_2898-2_y3khog.jpg",
    //       width: 1024,
    //       height: 683,
    //       caption: "Great Outdoors",
    //       label: "Corporate Retreats",
        
    //     },
        
        
    //   ] 
        return (
          <Box  
          // bgColor={'#0b1722'}
          // mb={-16} 
          >
            <Carousel
            preventMovementUntilSwipeScrollTolerance={true} 
             swipeScrollTolerance={50}
            >
              {slides.map((slide, sid) => (                
                <Box
                // minH='100vh' 
                w='full'
                // backgroundSize={'cover'}
                // bgPosition="center" 
                // bgRepeat={'no-repeat'}  
                // backgroundImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1719928250/IMG_3683-scaled_wby9wk.jpg'}   
                // backgroundImage={slide.img}  
                 
                >

                  <Box >
                    <Image
                      src={slide.img}
                      height={slide.height}
                      width={slide.width}

                    />
                  </Box>
                </Box>
                ))}
            </Carousel>
            </Box>
        )
};


export default Carousel3