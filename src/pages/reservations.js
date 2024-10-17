import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Box, Text, Spinner, Center } from '@chakra-ui/react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import AboutUsComponent2 from '../components/landingPage/AboutUsComponent2';

const scripts = [
  "https://www.reserveport.com/media/api5/jquery.min.js",
  "https://www.reserveport.com/media/api5/popper.min.js",
  "https://www.reserveport.com/media/api5/bootstrap.min.js",
  "https://reservations.reserveport.com/static/js/manifest.js",
  "https://reservations.reserveport.com/static/js/vendor.js",
  "https://reservations.reserveport.com/static/js/app.js"
];

const stylesheets = [
  "https://reservations.reserveport.com/static/css/app.css",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.css",
  "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css",
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = false; // Changed to false to maintain order
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const loadStylesheet = (href) => {
      return new Promise((resolve, reject) => {
        const link = document.createElement("link");
        link.href = href;
        link.rel = "stylesheet";
        link.onload = resolve;
        link.onerror = reject;
        document.head.appendChild(link);
      });
    };

    const loadAllResources = async () => {
      try {
        // Load scripts sequentially
        for (const script of scripts) {
          await loadScript(script);
          console.log(`Loaded script: ${script}`);
        }

        // Load stylesheets
        await Promise.all(stylesheets.map(loadStylesheet));
        console.log("All stylesheets loaded");

        // Wait longer to ensure everything is initialized
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Check for jQuery and initialize the booking widget
        if (window.jQuery && window.BookingWidget) {
          window.jQuery(document).ready(() => {
            window.BookingWidget.init();
            console.log("BookingWidget initialized");
          });
        } else {
          console.error("jQuery or BookingWidget not found");
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error loading resources:", error);
        setIsLoading(false);
      }
    };

    loadAllResources();
  }, []);

  return (
    <Box>
      <Head>
        <title>Reservations | Great Outdoors Kalanamu</title>
        <meta name="description" content="Reservations - Retreat.Rest.Rejuvenate" />
        <meta property="og:title" content="Reservations - Great Outdoors Kalanamu" />
        <meta property="og:description" content="Eco-friendly forest resort, located only 45 minutes (about 35km) drive from Kampala" />
        <meta property="og:image" content="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716989029/tgo-logo-e1671037379448_tee1nd.png" />
        <meta property="og:image:secure_url" content="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716989029/tgo-logo-e1671037379448_tee1nd.png" />
        <meta property="og:url" content="https://greatoutdoorsuganda.com/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716989029/tgo-logo-e1671037379448_tee1nd.png" />
        {/* <link rel='stylesheet' href='../styles/reserveport.module.css'/> */}
      </Head>

      <Box>
        <NavBar />
      </Box>

      <Box 
        bg={'whiteAlpha'} 
        backgroundSize={'cover'}
        bgRepeat={'no-repeat'}
        minHeight={'100vh'} 
        pt={{base: 24, lg: 32}}
      >
        {isLoading ? (
          <Center h="50vh">
            <Spinner size="xl" />
            <Text ml={4}>Loading booking widget...</Text>
          </Center>
        ) : (
          <Box>
            <Box>
              <booking-widget id="1687"></booking-widget>
            </Box>
          </Box>
        )}
      </Box>

      <Box>
        <Footer />
      </Box>
    </Box>
  );
}
