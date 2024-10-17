import Head from 'next/head'
import Image from 'next/image'

import { Box} from '@chakra-ui/react'
import { getCloudinaryImage, getCloudinaryImageBlur } from '../util/cloudinaryImageRetreival';

import NextLink from 'next/link'

import FloatingReservationsComponent from '../components/landingPage/floatingReservationsComponent'
import AboutUsComponent from '../components/landingPage/AboutUsComponent'
import AmenitiesComponent from '../components/landingPage/AmenitiesComponent'
import CorporateComponent from '../components/landingPage/CorporateComponent'
import EatAndDrinkComponent from '../components/landingPage/EatAndDrinkComponent'
import ForestComponent from '../components/landingPage/ForestComponent'
import TestimonialsComponent from '../components/landingPage/TestimonialsComponent'
import OffersComponent from '../components/landingPage/OffersComponent'
import LandingPageImageSlider from '../components/landingPage/LandingPageImageSlider'
import Carousel from '../components/carousel3'
import ForestComponent2 from '../components/landingPage/ForestComponent2'
import AboutUsComponent2 from '../components/landingPage/AboutUsComponent2'
import EatAndDrinkComponent2 from '../components/landingPage/EatAndDrinkComponent2'
import Carousel2 from '../components/carousel2'

import NavBar from '../components/navbar' 
import Footer from '../components/footer' 

import client from '../../src/sanity/lib/client'


export async function getStaticProps() {
  const landingPageContent = await client.fetch(`
  *[_type == "landingPage"]{
    ...,
        images[] 
          {
        "url": asset->url,
        "height": asset->metadata.dimensions.height,
        "width": asset->metadata.dimensions.width
      }
    }`);

  return {
    props: {
      landingPageContent,
    },
    revalidate: 10, //In seconds
  };
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

export default function Home(props) {
  console.log('props')
  console.log(props)

 return (
    <Box>
      <Head>
        <title>Great Outdoors Kalanamu - Retreat.Rest.Rejuvenate</title>
        <meta name="description" content="Retreat.Rest.Rejuvenate" />

        <meta property="og:title" content="Great Outdoors Kalanamu" />
        <meta property="og:description" content="Eco-friendly forest resort, located only 45 minutes (about 35km) drive from Kampala" />
        <meta property="og:image" content="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716989029/tgo-logo-e1671037379448_tee1nd.png" />
        <meta property="og:image:secure_url" content="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716989029/tgo-logo-e1671037379448_tee1nd.png" />
        <meta property="og:url" content="https://greatoutdoorsuganda.com/" />
        <meta property="og:type" content="website" />

        <link rel="icon" href="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716989029/tgo-logo-e1671037379448_tee1nd.png" />
     
        <link href="https://reservations.reserveport.com/static/css/app.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://www.reserveport.com/media/api5/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.css" />

        <script src="https://reservations.reserveport.com/checkavailability/static/js/manifest.js"></script>
        <script src="https://reservations.reserveport.com/checkavailability/static/js/vendor.js"></script>
        <script src="https://reservations.reserveport.com/checkavailability/static/js/app.js"></script>

        <script src="https://www.reserveport.com/media/api5/jquery.min.js" async></script>
        <script src="https://www.reserveport.com/media/api5/popper.min.js" async></script>
        <script src="https://www.reserveport.com/media/api5/bootstrap.min.js" async></script>
      </Head>

      <Box>
        <NavBar />
      </Box>
      
      <Box 
      bg={'whiteAlpha'} 
        backgroundSize={'cover'}
        bgRepeat={'no-repeat'}
      >
        <Box>
          <Carousel2  slides={slides}/>
          <search-availability id="1687" clientemail="true"></search-availability>
          <AboutUsComponent2  pageContent={props.landingPageContent}/>
          <CorporateComponent  pageContent={props.landingPageContent}/>
          <EatAndDrinkComponent2 pageContent={props.landingPageContent}/>
          <AmenitiesComponent  pageContent={props.landingPageContent}/>
          <ForestComponent2  pageContent={props.landingPageContent}/>
        </Box>

              
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
      
  )
}