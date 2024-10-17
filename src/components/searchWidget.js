import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';

const scripts = [
  "https://reservations.reserveport.com/checkavailability/static/js/manifest.js",
  "https://reservations.reserveport.com/checkavailability/static/js/vendor.js",
  "https://reservations.reserveport.com/checkavailability/static/js/app.js",
  
  "https://www.reserveport.com/media/api5/jquery.min.js",
  "https://www.reserveport.com/media/api5/popper.min.js",
  "https://www.reserveport.com/media/api5/bootstrap.min.js"
];

const stylesheets = [
  "https://reservations.reserveport.com/checkavailability/static/css/app.css",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.css",
  "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
];

export default function Home() {
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  useEffect(() => {
    // Load external scripts and stylesheets
    const loadScripts = () => {
      let loadedCount = 0;

      scripts.forEach(src => {
        if (!document.querySelector(`script[src="${src}"]`)) {
          const script = document.createElement("script");
          script.src = src;
          script.async = true;
          script.onload = () => {
            loadedCount += 1;
            if (loadedCount === scripts.length) {
              setScriptsLoaded(true); // Mark scripts as fully loaded
              initializeWidget(); // Explicitly call widget initialization
            }
          };
          document.body.appendChild(script);
        }
      });
    };

    const loadStylesheets = () => {
      stylesheets.forEach(href => {
        if (!document.querySelector(`link[href="${href}"]`)) {
          const link = document.createElement("link");
          link.href = href;
          link.rel = "stylesheet";
          document.head.appendChild(link);
        }
      });
    };

    // Function to initialize the widget if it requires re-initialization
    const initializeWidget = () => {
      if (window && typeof window["initializeSearchAvailability"] === "function") {
        window["initializeSearchAvailability"](); // Call the global function to initialize the widget if it exists
      } else {
        console.warn("Widget initialization function not found.");
      }
    };

    loadScripts();
    loadStylesheets();
  }, []);

  return (
    <>
      {/* Only render the <search-availability> component once scripts are fully loaded */}
      {scriptsLoaded ? (
        <search-availability id="1687" clientemail="true"></search-availability>
      ) : (
        <Box>Loading widget...</Box>
      )}
    </>
  );
}
