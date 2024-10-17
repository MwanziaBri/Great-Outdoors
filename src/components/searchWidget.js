import { useEffect } from 'react'
import Script from 'next/script'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'


const stylesheets = [
  "https://reservations.reserveport.com/checkavailability/static/css/app.css",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.css",
  "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
];

export default function Home() {
  const [scriptsLoaded, setScriptsLoaded] = useState(false);
  useEffect(() => {
    // Function to dynamically load external stylesheets
    const loadStylesheets = () => {
      stylesheets.forEach(href => {
        if (!document.querySelector(`link[href="${href}"]`)) {
          const link = document.createElement("link");
          link.href = href;
          link.rel = "stylesheet";  // Correctly set the rel attribute to "stylesheet"
          document.head.appendChild(link); // Append to head, not body
        }
      });
    };

    // Load custom script and styles only if not already present
    loadStylesheets();   // Load the external styles when component mounts
  }, []);  // Empty dependency array ensures this runs once on component mount

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
            strategy="beforeInteractive" 
            onLoad={handleScriptLoad} 
          />
          <Script 
            src="https://reservations.reserveport.com/checkavailability/static/js/vendor.js" 
            strategy="beforeInteractive" 
            onLoad={handleScriptLoad} 
          />
          <Script 
            src="https://reservations.reserveport.com/checkavailability/static/js/app.js" 
            strategy="beforeInteractive" 
            onLoad={handleScriptLoad} 
          />
  
          <Script 
            src="https://www.reserveport.com/media/api5/jquery.min.js" 
            strategy="beforeInteractive" 
            onLoad={handleScriptLoad} 
          />
          <Script 
            src="https://www.reserveport.com/media/api5/popper.min.js" 
            strategy="beforeInteractive" 
            onLoad={handleScriptLoad} 
          />
          <Script 
            src="https://www.reserveport.com/media/api5/bootstrap.min.js" 
            strategy="beforeInteractive" 
            onLoad={handleScriptLoad} 
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
