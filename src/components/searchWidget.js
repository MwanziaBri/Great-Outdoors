import { useEffect } from 'react'
import Script from 'next/script'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'

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
  useEffect(() => {
    // Function to dynamically load external scripts
    const loadScripts = () => {
      scripts.forEach(src => {
        if (!document.querySelector(`script[src="${src}"]`)) {
          const script = document.createElement("script");
          script.src = src;
          script.async = true;
          document.body.appendChild(script);
        }
      });
    };

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
    loadScripts();  // Load the external scripts when component mounts
    loadStylesheets();   // Load the external styles when component mounts
  }, []);  // Empty dependency array ensures this runs once on component mount

  return (
    <search-availability id="1687" clientemail="true"></search-availability>
  );
}
