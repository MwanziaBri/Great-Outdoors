import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

export default function Home() {
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

        <link href="https://reservations.reserveport.com/static/css/app.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://www.reserveport.com/media/api5/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.css" />
        <link href="../styles/reserveport.module.css" rel="stylesheet" />

        <script type="text/javascript" src="https://www.reserveport.com/media/api5/popper.min.js"></script>
        <script type="text/javascript" src="https://www.reserveport.com/media/api5/bootstrap.min.js"></script>
        <script src="https://www.reserveport.com/media/api5/jquery.min.js"></script>
      </Head>

      <Box>
        <NavBar />
      </Box>

      <Box
        bg={'whiteAlpha'}
        backgroundSize={'cover'}
        bgRepeat={'no-repeat'}
        minHeight={'100vh'}
        pt={{ base: 24, lg: 32 }}
      >

      <booking-widget id="1687"></booking-widget>

      </Box>

      <Box>
        <Footer />
      </Box>

      <script src="https://reservations.reserveport.com/static/js/manifest.js"></script>
      <script src="https://reservations.reserveport.com/static/js/vendor.js"></script>
      <script src="https://reservations.reserveport.com/static/js/app.js"></script>
    </Box>
  );
}
