import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from "@mui/material";
import {  UiProvider } from "../context";
import { lightTheme } from "../themes";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';



export default function App({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    AOS.init({
      duration: 500,
      delay: 200,
      easing: 'ease-in-out',
      mirror: true,
      once:false
  
    });
  
  },[])
  return (
    <UiProvider>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UiProvider>
  );}
