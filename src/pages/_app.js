import '@/styles/globals.css'
import '@/styles/reserveport.css'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

//fonts - https://github.com/chakra-ui/chakra-ui/discussions/7235
import { Space_Mono, Roboto, Playfair_Display, Poppins, Inter } from 'next/font/google'
import Footer from '../components/footer' 
import NavBar from '../components/navbar' 

import { extendTheme } from '@chakra-ui/react'

const headingFont = Playfair_Display({ subsets: [ 'latin' ], weight: ['500'],display: 'swap', adjustFontFallback: false  })
const navBarFont = Playfair_Display({ subsets: [ 'latin' ], weight: ['400'], display: 'swap', adjustFontFallback: false })
const redTopFont = Roboto({ subsets: [ 'latin' ], weight: ['400'], display: 'swap', adjustFontFallback: false })
const bodyFont = Inter({ subsets: [ 'latin' ], weight: ['400'], display: 'swap', adjustFontFallback: false })
const floatBoxFont = Poppins({ subsets: [ 'latin' ], weight: ['400'], display: 'swap', adjustFontFallback: false })

const theme = extendTheme({
  fonts: {
    headingFont: headingFont.style.fontFamily,
    redTopFont: redTopFont.style.fontFamily,
    navBarFont: navBarFont.style.fontFamily,
    bodyFont: bodyFont.style.fontFamily,
    floatBoxFont: floatBoxFont.style.fontFamily

  },
})


export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      {/* <NavBar /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </ChakraProvider>

      )
}
