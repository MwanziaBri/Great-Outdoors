import { useEffect } from 'react';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import AboutUsComponent2 from '../components/landingPage/AboutUsComponent2';

import styles from '../styles/reserveport.module.css'

 
const scripts = [
  "https://reservations.reserveport.com/static/js/manifest.js",
  "https://reservations.reserveport.com/static/js/vendor.js",
  "https://reservations.reserveport.com/static/js/app.js",
  "https://www.reserveport.com/media/api5/jquery.min.js",
  "https://www.reserveport.com/media/api5/popper.min.js",
  "https://www.reserveport.com/media/api5/bootstrap.min.js"
];

const stylesheets = [
  "https://reservations.reserveport.com/static/css/app.css",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.css",
  "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css",
];

export default function Home() {
  useEffect(() => {
    // Function to dynamically load external scripts
    const loadScripts = () => {
      scripts.forEach(src => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        document.body.appendChild(script);
      });
    };

    // Function to dynamically load external stylesheets
    const loadStylesheets = () => {
      stylesheets.forEach(href => {
        const link = document.createElement("link");
        link.href = href;
        link.rel = "stylesheet";  // Correctly set the rel attribute to "stylesheet"
        document.head.appendChild(link); // Append to head, not body
      });
    };

    // Load custom script
    loadScripts();  // Load the external scripts when component mounts
    loadStylesheets();   // Load the external styles when component mounts
  }, []);  // Empty dependency array ensures this runs once on component mount

  
  return (
    
    <Box>
      <Head>
        <title>Reservations - Great Outdoors Kalanamu</title>
        <meta name="description" content="Reservations - Retreat.Rest.Rejuvenate" />
        <meta property="og:title" content="Reservations - Great Outdoors Kalanamu" />
        <meta property="og:description" content="Eco-friendly forest resort, located only 45 minutes (about 35km) drive from Kampala" />
        <meta property="og:image" content="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716989029/tgo-logo-e1671037379448_tee1nd.png" />
        <meta property="og:image:secure_url" content="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716989029/tgo-logo-e1671037379448_tee1nd.png" />
        <meta property="og:url" content="https://greatoutdoorsuganda.com/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716989029/tgo-logo-e1671037379448_tee1nd.png" />
        <link rel='stylesheet' href='../styles/reserveport.module.css'/>
      </Head>

      <Box>
        <NavBar />
      </Box>

      <Box 
        bg={'whiteAlpha'} 
        backgroundSize={'cover'}
        bgRepeat={'no-repeat'}
        minHeight={'100vh'} 
        // mt={{base: 20, lg: 44}}
        pt={{base: 24, lg: 32}}
        // className={styles.someClass}  // Example usage of imported styles
      >
        <Box >
          <booking-widget id="1687"></booking-widget>
        </Box>
      </Box>

      <Box>
        <Footer />
      </Box>
    </Box>
  );
}