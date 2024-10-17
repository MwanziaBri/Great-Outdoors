import { useState } from 'react'
import Script from 'next/script'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'

export default function Home() {
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  const handleScriptLoad = () => {
    // Set scriptsLoaded to true once all necessary scripts are loaded
    setScriptsLoaded(true);
  };

  return (
    <>
      <Head>
        {/* External scripts loaded with Next.js Script component, strategy set to 'beforeInteractive' */}
        <Script 
          src="https://reservations.reserveport.com/checkavailability/static/js/manifest.js" 
          strategy="beforeInteractive" onLoad={handleScriptLoad} 
        />
        <Script 
          src="https://reservations.reserveport.com/checkavailability/static/js/vendor.js" 
          strategy="beforeInteractive" onLoad={handleScriptLoad} 
        />
        <Script 
          src="https://reservations.reserveport.com/checkavailability/static/js/app.js" 
          strategy="beforeInteractive" onLoad={handleScriptLoad} 
        />

        <Script 
          src="https://www.reserveport.com/media/api5/jquery.min.js" 
          strategy="beforeInteractive" onLoad={handleScriptLoad} 
        />
        <Script 
          src="https://www.reserveport.com/media/api5/popper.min.js" 
          strategy="beforeInteractive" onLoad={handleScriptLoad} 
        />
        <Script 
          src="https://www.reserveport.com/media/api5/bootstrap.min.js" 
          strategy="beforeInteractive" onLoad={handleScriptLoad} 
        />
      </Head>

      {/* Conditionally render the widget once the scripts are loaded */}
      {scriptsLoaded ? (
        <search-availability id="1687" clientemail="true"></search-availability>
      ) : (
        <Box>Loading widget...</Box>
      )}
    </>
  );
}
